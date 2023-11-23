require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    alchemy_sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/afK5DQtH4pQHAXdTA8bzZnNwcbWNzCTG",
      accounts: [
        `0x${"e42c84a338a44683f32e2644b3ea67470170e93ff5eefc935d118083bcf62a89"}`,
      ],
    },
  },
};
