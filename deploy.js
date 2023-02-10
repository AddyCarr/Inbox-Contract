const HDWalletProvider = require("truffle-hdwallet-provider");
//
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
//new

const provider = new HDWalletProvider(
  //New wallet address created for dev ops
  "burger season century brush glove broken loop butter zoo argue still smooth",
  "https://sepolia.infura.io/v3/bbef5089d59f4e4884052e9c4e3f7a76"
);
//
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0] });

  console.log("contract deployed to", result.options.address);
};

deploy();
