const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
//creates an instance of web3 connected to teh ganache local network using a provider (neccesary com tool)
const web3 = new Web3(ganache.provider());
