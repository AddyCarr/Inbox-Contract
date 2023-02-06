const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "",
  "https://sepolia.infura.io/v3/bbef5089d59f4e4884052e9c4e3f7a76"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there, I'm live!"],
    })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("contract deployed to", result.options.address);
};

deploy();
