require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/brrRZDQpvkXfveDlXk4D6uPMWWzWQbSq",
      accounts: [
        "0xa1e369616a8fac8ee53f832e9932bc17aed84db1639ac775a4ec42503a2888f4",
      ],
    },
  },
};
