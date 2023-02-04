const assert = require("assert");
const ganache = require("ganache");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;
//to get access to a variable stored within function scope of before each, declare beforehand

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // async is marked after function. await keyword replaced .then
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: Bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
