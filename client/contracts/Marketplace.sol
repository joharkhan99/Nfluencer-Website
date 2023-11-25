//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//prevents re-entrancy attacks
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds; //total number of items ever created
    Counters.Counter private _itemsSold; //total number of items sold
    Counters.Counter private _activityIds;
    Counters.Counter private _offerIds;

    address payable owner; //owner of the smart contract
    //people have to pay to puy their NFT on this marketplace
    uint256 listingPrice = 0.00001 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    // price history of an item
    struct PriceHistory {
        uint256 timestamp;
        uint256 price;
    }

    //a way to store the activity of an item
    struct Activity {
        uint256 activityId;
        uint256 itemId;
        address actor;
        string eventType;
        uint256 price;
        address from;
        address to;
        uint256 timestamp;
    }

    struct Offer {
        uint256 offerId;
        uint256 itemId;
        uint256 price;
        uint256 usdPrice;
        uint256 floorDifference;
        uint256 expiration;
        address from;
    }

    struct MarketItem {
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller; //person selling the nft
        address payable owner; //owner of the nft
        uint256 price;
        bool sold;
        bool isRewardItem;
        // PriceHistory[] priceHistory;
        // Offer[] offers;
    }

    //a way to access values of the MarketItem struct above by passing an integer ID
    mapping(uint256 => MarketItem) private idMarketItem;
    mapping(uint256 => Activity) private idActivity;
    mapping(uint256 => Offer) private idOffer;

    //log message (when Item is sold)
    event MarketItemCreated(
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold,
        bool isRewardItem
    );

    event ActivityRecorded(
        uint indexed activityId,
        uint indexed itemId,
        address indexed actor,
        string eventType,
        uint256 price,
        address from,
        address to,
        uint256 timestamp
    );

    event OfferCreated(
        uint indexed offerId,
        uint indexed itemId,
        uint256 price,
        uint256 usdPrice,
        uint256 floorDifference,
        uint256 expiration,
        address from
    );

    /// @notice function to get an item price history
    // function getPriceHistory(
    //     uint256 itemId
    // ) public view returns (PriceHistory[] memory) {
    //     return idMarketItem[itemId].priceHistory;
    // }

    /// @notice function to get listingprice
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function setListingPrice(uint _price) public returns (uint) {
        if (msg.sender == address(this)) {
            listingPrice = _price;
        }
        return listingPrice;
    }

    /// @notice function to create market item
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price,
        bool isRewardItem
    ) public payable nonReentrant {
        require(price > 0, "Price must be above zero");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        _itemIds.increment(); //add 1 to the total number of items ever created
        uint256 itemId = _itemIds.current();

        idMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender), //address of the seller putting the nft up for sale
            payable(address(0)), //no owner yet (set owner to empty address)
            price,
            false,
            isRewardItem
            // new PriceHistory[](0),
            // new Offer[](0)
        );

        //add price to price history
        // idMarketItem[itemId].priceHistory.push(
        //     PriceHistory(block.timestamp, price)
        // );

        recordActivity(
            itemId,
            msg.sender,
            "Mint",
            price,
            address(0),
            address(0)
        );

        //transfer ownership of the nft to the contract itself
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        //log this transaction
        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false,
            isRewardItem
        );
    }

    /// @notice function to create a sale
    function createMarketSale(
        address nftContract,
        uint256 itemId
    ) public payable nonReentrant {
        uint price = idMarketItem[itemId].price;
        uint tokenId = idMarketItem[itemId].tokenId;

        require(
            msg.value == price,
            "Please make the price to be same as listing price"
        );

        //pay the seller the amount
        idMarketItem[itemId].seller.transfer(msg.value);

        //transfer ownership of the nft from the contract itself to the buyer
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);

        idMarketItem[itemId].owner = payable(msg.sender); //mark buyer as new owner
        idMarketItem[itemId].sold = true; //mark that it has been sold
        _itemsSold.increment(); //increment the total number of Items sold by 1
        payable(owner).transfer(listingPrice); //pay owner of contract the listing price

        // Record the sale price in the price history
        // idMarketItem[itemId].priceHistory.push(
        //     PriceHistory(block.timestamp, price)
        // );

        recordActivity(
            itemId,
            msg.sender,
            "Sale",
            price,
            idMarketItem[itemId].seller,
            msg.sender
        );

        recordActivity(
            itemId,
            msg.sender,
            "Transfer",
            0,
            idMarketItem[itemId].seller,
            msg.sender
        );
    }

    /// @notice total number of items unsold on our platform
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint itemCount = _itemIds.current(); //total number of items ever created
        //total number of items that are unsold = total items ever created - total items ever sold
        uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

        //loop through all items ever created
        for (uint i = 0; i < itemCount; i++) {
            //get only unsold item
            //check if the item has not been sold
            //by checking if the owner field is empty
            if (idMarketItem[i + 1].owner == address(0)) {
                //yes, this item has never been sold
                uint currentId = idMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items; //return array of all unsold items
    }

    /// @notice fetch list of NFTS purchased by this user
    function fetchPurchasedNFTs() public view returns (MarketItem[] memory) {
        //get total number of items ever created
        uint totalItemCount = _itemIds.current();

        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            //get only the items that this user has bought/is the owner
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1; //total length
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint currentId = idMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /// @notice fetch list of NFTS created by this user
    function fetchItemsCreated() public view returns (MarketItem[] memory) {
        //get total number of items ever created
        uint totalItemCount = _itemIds.current();

        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            //get only the items that this user has bought/is the owner
            if (idMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1; //total length
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                uint currentId = idMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /// @notice function to update whether an NFT is a reward item
    function updateIsRewardItem(uint256 itemId, bool isRewardItem) public {
        require(msg.sender == owner, "Only the owner can update isRewardItem");
        idMarketItem[itemId].isRewardItem = isRewardItem;
    }

    /// @notice function to update the activity of an item
    function recordActivity(
        uint256 itemId,
        address actor,
        string memory eventType,
        uint256 price,
        address from,
        address to
    ) internal {
        _activityIds.increment();
        uint256 activityId = _activityIds.current();

        idActivity[activityId] = Activity(
            activityId,
            itemId,
            actor,
            eventType,
            price,
            from,
            to,
            block.timestamp
        );

        emit ActivityRecorded(
            activityId,
            itemId,
            actor,
            eventType,
            price,
            from,
            to,
            block.timestamp
        );
    }

    // @notice function to get activity history of an item
    function getActivityHistory(
        uint256 itemId
    ) public view returns (Activity[] memory) {
        uint activityCount = _activityIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < activityCount; i++) {
            if (idActivity[i + 1].itemId == itemId) {
                itemCount += 1;
            }
        }

        Activity[] memory activities = new Activity[](itemCount);
        for (uint i = 0; i < activityCount; i++) {
            if (idActivity[i + 1].itemId == itemId) {
                uint currentId = idActivity[i + 1].activityId;
                Activity storage currentActivity = idActivity[currentId];
                activities[currentIndex] = currentActivity;
                currentIndex += 1;
            }
        }
        return activities;
    }

    // @notice function to create offer of an item
    function createOffer(
        uint256 itemId,
        uint256 price,
        uint256 usdPrice,
        uint256 floorDifference,
        uint256 expiration
    ) public {
        require(itemId > 0 && itemId <= _itemIds.current(), "Invalid Item ID");
        require(!idMarketItem[itemId].sold, "Item is already sold");
        require(
            msg.sender == idMarketItem[itemId].seller,
            "Only the seller can create an offer"
        );

        _offerIds.increment();
        uint256 offerId = _offerIds.current();

        idOffer[offerId] = Offer(
            offerId,
            itemId,
            price,
            usdPrice,
            floorDifference,
            block.timestamp + expiration,
            msg.sender
        );

        // idMarketItem[itemId].offers.push(idOffer[offerId]);

        emit OfferCreated(
            offerId,
            itemId,
            price,
            usdPrice,
            floorDifference,
            block.timestamp + expiration,
            msg.sender
        );
    }

    /// @notice function to get NFT details by TokenId/ItemId
    function getNFTDetails(
        uint256 itemId
    ) public view returns (MarketItem memory) {
        require(itemId > 0 && itemId <= _itemIds.current(), "Invalid Item ID");
        return idMarketItem[itemId];
    }
}
