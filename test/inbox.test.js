const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

beforeEach(() => {
    // get a list of all accounts
    web3.eth.getAccounts()
    .then(fetchedAcc/counts => [
        console.lo(fetchedAcccounts);
    ])
}

descirbe ('Inbox', () => {
    it('deploys a contract', ( ) => {});
})









// just about, everamacyion we
// CAR EXAMPLE MOCHA TEST
// ? What is a class and it's properties
// class Car { 
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

//"carr" below is not related to class above, just an arbitray name. All values in strings are not related variables.
//arrow function contains all of the it statements
// remmebr function scope of vriables is only within  the funcation or neste functions.
// thi s is why we must initialise car outside of beforeEacj statement.

// let car;
// //let bc we are reassigning value in ea fnc.

// beforeEach(() => {
//   car = new Car();
// });

// describe("Car", () => {
//   it("can park", () => {
//     const car = new Car();
//     assert.equal(car.park(), "stopped");
//   });

//   it("can drive", () => {
//     const car = new Car();
//     assert.equal(car.drive, "vroom");
//   });
// });

// //above is a mocha structure where two tests are nested ina  describe statement, where the 'it' statement tests are being tested for teh assertations of the test, vroom and drive.
