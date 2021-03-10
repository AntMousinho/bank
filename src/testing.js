const Printer = require('./printer');
const ATM = require('./atm');
const Account = require('./account');
const Branch = require('./branch');
const Bank = require('./bank');

// // // Test
// let printer = new Printer();
// let atm = new ATM();
// let antony = new Account();
// let james = new Account();
// let john = new Account();
// let amersham = new Branch();
// let chesham = new Branch();
// let natwest = new Bank();

// atm.deposit(antony, 1000, '10/01/21');
// atm.deposit(antony, 2000, '13/01/21');
// atm.withdraw(antony, 500, '14/01/21');

// // console.log(antony.balance);

// atm.deposit(james, 1000, '05/02/21');
// atm.deposit(james, 300, '06/03/21');
// atm.withdraw(james, 800, '09/03/21');
// // console.log(james.balance);

// atm.deposit(john, 300, '07/03/21');
// atm.withdraw(john, 200, '09/03/21');
// // console.log(john.balance);

// console.log(printer.printStatement(antony));
// // console.log(printer.printStatement(james));
// // console.log(printer.printStatement(john));


// // amersham.addAccount(antony);
// // amersham.addAccount(james);

// // console.log(printer.printAccounts(amersham));
// // // amersham.removeAccount(antony);
// // // console.log(printer.printAccounts(amersham));

// // chesham.addAccount(john);

// // console.log(printer.printAccounts(chesham));

// // // chesham.removeAccount(antony);

// // natwest.addBranch(amersham);
// // natwest.addBranch(chesham);

// // console.log(printer.printBranches(natwest));