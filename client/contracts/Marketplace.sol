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

    address payable owner; //owner of the smart contract
    uint256 listingPrice = 0.00001 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    //a way to store the activity of an item
    struct Activity {
        uint256 itemId;
        address from;
        address to;
        string eventType;
        uint256 price;
        uint256 timestamp;
    }

    struct MarketItem {
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller; //person selling the nft
        address payable owner; //owner of the nft
        address payable creator; //creator of the nft
        uint256 price;
        bool sold;
        bool isRewardItem;
        uint likes;
        uint views;
    }

    //a way to access values of the MarketItem struct above by passing an integer ID
    mapping(uint256 => MarketItem) private marketItems;
    mapping(uint256 => Activity) private activities;

    //log message (when Item is sold)
    event MarketItemCreated(
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        address creator,
        uint256 price,
        bool sold,
        bool isRewardItem,
        uint likes,
        uint views
    );

    event ActivityRecorded(
        uint indexed itemId,
        address from,
        address to,
        string eventType,
        uint256 price,
        uint256 timestamp
    );

    /// @notice item likes gettters and setters
    function getItemLikes(uint256 itemId) public view returns (uint) {
        return marketItems[itemId].likes;
    }

    function incrementItemLikes(uint256 itemId) public returns (uint) {
        marketItems[itemId].likes += 1;
        return marketItems[itemId].likes;
    }

    function decrementItemLikes(uint256 itemId) public returns (uint) {
        marketItems[itemId].likes -= 1;
        return marketItems[itemId].likes;
    }

    /// @notice item views gettters and setters
    function getItemViews(uint256 itemId) public view returns (uint) {
        return marketItems[itemId].views;
    }

    function incrementItemViews(uint256 itemId) public returns (uint) {
        marketItems[itemId].views += 1;
        return marketItems[itemId].views;
    }

    function decrementItemViews(uint256 itemId) public returns (uint) {
        marketItems[itemId].views -= 1;
        return marketItems[itemId].views;
    }

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

        marketItems[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender), //address of the seller putting the nft up for sale
            payable(address(0)), //no owner yet (set owner to empty address)
            payable(msg.sender), //address of the creator of the nft
            price,
            false,
            isRewardItem,
            0,
            0
        );

        //transfer ownership of the nft to the contract itself
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        // store activity
        // recordActivity(itemId, address(0), msg.sender, "Mint", price);
        activities[itemId] = Activity(
            itemId,
            address(0),
            msg.sender,
            "Mint",
            price,
            block.timestamp
        );

        emit ActivityRecorded(
            itemId,
            address(0),
            msg.sender,
            "Mint",
            price,
            block.timestamp
        );

        //log this transaction
        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            msg.sender,
            price,
            false,
            isRewardItem,
            0,
            0
        );
    }

    /// @notice function to record activity
    function recordActivity(
        uint256 itemId,
        address from,
        address to,
        string memory eventType,
        uint256 price
    ) internal {
        activities[itemId] = Activity(
            itemId,
            from,
            to,
            eventType,
            price,
            block.timestamp
        );

        emit ActivityRecorded(
            itemId,
            from,
            to,
            eventType,
            price,
            block.timestamp
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
            if (marketItems[i + 1].owner == address(0)) {
                //yes, this item has never been sold
                uint currentId = marketItems[i + 1].itemId;
                MarketItem storage currentItem = marketItems[currentId];
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
            if (marketItems[i + 1].owner == msg.sender) {
                itemCount += 1; //total length
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemCount; i++) {
            if (marketItems[i + 1].owner == msg.sender) {
                uint currentId = marketItems[i + 1].itemId;
                MarketItem storage currentItem = marketItems[currentId];
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
            if (marketItems[i + 1].seller == msg.sender) {
                itemCount += 1; //total length
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemCount; i++) {
            if (marketItems[i + 1].seller == msg.sender) {
                uint currentId = marketItems[i + 1].itemId;
                MarketItem storage currentItem = marketItems[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /// @notice function to update whether an NFT is a reward item
    function updateIsRewardItem(uint256 itemId, bool isRewardItem) public {
        require(msg.sender == owner, "Only the owner can update isRewardItem");
        marketItems[itemId].isRewardItem = isRewardItem;
    }

    function getNFTActivity(
        uint256 tokenId
    ) public view returns (Activity memory) {
        return activities[tokenId];
    }

    /// @notice function to get NFT details by TokenId/ItemId
    function getNFTDetails(
        uint256 itemId
    ) public view returns (MarketItem memory) {
        require(itemId > 0 && itemId <= _itemIds.current(), "Invalid Item ID");
        return marketItems[itemId];
    }
}
