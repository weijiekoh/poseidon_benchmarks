/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('hardhat-contract-sizer')
require('@nomiclabs/hardhat-ethers')
require('hardhat-artifactor')

module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }

  },
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      accounts: [
        '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e'
      ],
      //accounts: {
        //mnemonic: "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"
      //},
      loggingEnabled: false,
      allowUnlimitedContractSize: false
    }
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  }
};
