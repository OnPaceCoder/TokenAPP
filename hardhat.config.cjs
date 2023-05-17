require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_RPC_URL,
      accounts: [`0x${process.env.WALLET_PRIVATE_KEY}`],
    },
  },

  etherscan: {
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
  },
};
