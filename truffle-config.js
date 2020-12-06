var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = ""; // Enter the mnemonic for your rinkeby account (testnet deployment only)
module.exports = {

	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,     // port 7545 for Ganache GUI version and port 8545 for Ganache-cli
			network_id: "*" // Match any network id

		},

		rinkeby: {
			provider: function() {
				return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/27f3b2a9c4984e38b0284da06f0c0902");
			},
			network_id: 4
		}

	}
};
