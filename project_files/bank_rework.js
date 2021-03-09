class Printer {     // Responsibility - Prints information to the console
    printStatement(account) {
        console.log("Account " + account.id + " - Summary:\nDate || Credit || Debit || Balance");
        account.transactions.forEach(transaction => {
            console.log(transaction.join(" || "));
        });
    }

    printAccounts(branch) {
        console.log(`Branch ${branch.id} - Accounts:`)
        for(let i = 0; i < branch.accounts.length; i++) {
            console.log(`Account ID: ${branch.accounts[i].id}`);
        }
    }

    printBranches(bank) {
        console.log(`Bank branches: `)
        for(let i = 0; i < bank.branches.length; i++) {
            console.log(`Branch ID: ${bank.branches[i].id}`);
        }
    }
}

class Account {     // Responsibility - Store account details (balance and transaction history)
    constructor() {
        this._id = Math.floor(Math.random() * 10000);
        this._balance = 0;
        this._transactions = [];
    }

    get id() {return this._id};

    get balance() {return this._balance;}

    set balance(amount) {this._balance = amount}

    get transactions() {return this._transactions}

    set transactions(amount) {this._transactions.unshift(amount)}
}

class ATM {         // Responsibility - Edit account balance and transaction history
    deposit(account, depositAmount, depositDate) {
        if(depositAmount <= 0) throw new Error(`Invalid deposit amount`);
        account.balance += depositAmount;
        account.transactions = [depositDate, depositAmount, 0, account.balance];
    }

    withdraw(account, withdrawAmount, withdrawDate) {
        if(withdrawAmount <= 0 || withdrawAmount > account.balance) throw new Error(`Invalid withdrawal amount`);
        account.balance -= withdrawAmount;
        account.transactions = [withdrawDate, 0, withdrawAmount, account.balance];
    }
}

class Branch {      // Responsibility - Store accounts
    constructor(){
        this._id = Math.floor(Math.random() * 1000);
        this._accounts = [];
    }

    get id() {return this._id};

    get accounts() {return this._accounts}

    addAccount(account) {
        if(this._accounts.includes(account)) throw new Error(`Invalid, already in array`);
        this._accounts.push(account);
    }
    
    removeAccount(account) {
        if(!this._accounts.includes(account)) throw new Error(`Invalid, account not in array`);
        let index = this._accounts.indexOf(account);
        this._accounts.splice(index, 1);
    }
}

class Bank {        // Responsibility - Store branches
    constructor(){
        this._branches = [];
    }

    get branches() {return this._branches}

    addBranch(branch) {
        if(this._branches.includes(branch)) throw new Error(`Invalid, branch in array`);
        this._branches.push(branch);
    }

    removeBranch(branch) {
        if(!this._branches.includes(branch)) throw new Error(`Invalid, branch not in array`);
        let index = this._branches.indexOf(branch);
        this._branches.splice(index, 1);
    }
}


// Test
let printer = new Printer();
let atm = new ATM();
let antony = new Account();
let james = new Account();
let john = new Account();
let amersham = new Branch();
let chesham = new Branch();
let natwest = new Bank();

atm.deposit(antony, 2000, '08/03/21');
atm.withdraw(antony, 300, '09/03/21');
atm.deposit(antony, 100, '10/03/21');

atm.deposit(james, 1000, '05/02/21');
atm.deposit(james, 300, '06/03/21');
atm.withdraw(james, 800, '09/03/21');

atm.deposit(john, 300, '07/03/21');
atm.withdraw(john, 200, '09/03/21');

printer.printStatement(antony);
printer.printStatement(james);
printer.printStatement(john);


amersham.addAccount(antony);
amersham.addAccount(james);

printer.printAccounts(amersham);
amersham.removeAccount(antony);
printer.printAccounts(amersham);

chesham.addAccount(john);

printer.printAccounts(chesham);

// chesham.removeAccount(antony);

natwest.addBranch(amersham);
natwest.addBranch(chesham);

printer.printBranches(natwest);