class Printer {
    printAccount(account) {
        console.log(account.name + " - Account Summary:\nDate || Credit || Balance");
        for(let i = 0; i < account.activity.length; i++) {
            console.log(account.activity[i].join(" || "));
        }
    }
}

class Account {
    constructor(name) {
        this._name = name;
        this._balance = 0;
        this._activity = [];
    }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        this._balance = amount;
    }

    get activity() {
        return this._activity;
    }

    set activity(input) {
        this._activity.unshift(input);
    }

    deposit(amount, date) {
        if(amount <= 0) throw new Error('Please deposit a positive amount.');
        this.balance += amount;
        this.activity = [date, amount, 0, this.balance];
        console.log(`Successfully deposited ${amount} to ${this.name}'s account on ${date}. Current balance is ${this.balance}.`);
        return true;
    }

    withdraw(amount, date) {
        if(amount > this.balance) throw new Error('Cannot withdraw more than the current balance.');
        this.balance -= amount;
        this.activity = [date, 0, amount, this.balance];
        console.log(`Successfully withdrawn ${amount} from ${this.name}'s account on ${date}. Current balance is ${this.balance}.`);
        return true;
    }
}

class Branch {
    constructor(name){
    this._name = name;
    this._accounts = [];
    this.branchPrinter = new Printer;
    }

    get name(){
        return this._name;
    }

    get accounts(){
        return this._accounts;
    }

    set accounts(account){
        this._accounts.push(account);
    }

    deposit(accountName, amount, date) {
        let accountCheck = this.findAccount(accountName);
        if(accountCheck !== null) {
            return accountCheck.deposit(amount, date);
        } else throw new Error(`Cannot find account for ${accountName} at the ${this.name} branch.`);
    }

    withdraw(accountName, amount, date) {
        let accountCheck = this.findAccount(accountName);
        if(accountCheck !== null) {
            return accountCheck.withdraw(amount, date);
        } else throw new Error(`Cannot find account for ${accountName} at the ${this.name} branch.`);
    }

    newAccount(accountName) {
        if(this.findAccount(accountName) === null) {
            this.accounts = new Account(accountName);
            console.log(`Created an account for ${accountName} at the ${this.name} branch.`)
            return true;
        }
        throw new Error(`${accountName} already banks with this branch.`)
    }
    
    removeAccount(accountName) {
        let accountCheck = this.findAccount(accountName);
        if(accountCheck !== null) {
            let index = this.accounts.indexOf(accountCheck);
            this.accounts.splice(index, 1);
            console.log(`Successfully removed ${accountName}'s account from the ${this.name} branch.`);
            return true;
        } 
        throw new Error(`Cannot find account for ${accountName} at the ${this.name} branch.`);
        
    }

    findAccount(accountName) {
        for(let i = 0; i < this.accounts.length; i++){
            let accountCheck = this.accounts[i];
            if(accountCheck.name === accountName) return accountCheck;
        }
        return null;
    }

    printAccountList() {
        console.log(`${this.name} branch accounts:`)
        for(let i = 0; i < this.accounts.length; i++) {
            console.log(`${i + 1}: ${this.accounts[i].name}`);
        }
    }

    printAccountSummary(accountName) {
        let accountCheck = this.findAccount(accountName);
        if(accountCheck !== null){
            console.log(`Account at the ${this.name} branch: `)
            this.branchPrinter.printAccount(accountCheck);
        } else throw new Error(`Cannot find account for ${accountName} at the ${this.name} branch`);
    }

    printAllAccountSummary() {
        console.log(`Accounts at the ${this.name} branch:`);
        this.accounts.forEach(account => {
            this.branchPrinter.printAccount(account);
        })
    }
}

class Bank {
    constructor(name) {
        this._name = name;
        this._branches = [];
    }

    get name() {
        return this._name;
    }

    get branches() {
        return this._branches;
    }

    addBranch(branchName) {
        let branchCheck = this.findBranch(branchName);
        if(branchCheck === null) {
            this._branches.push(new Branch(branchName));
            console.log(`${branchName} added to ${this.name} branch list.`)
            return true;
        }
        throw new Error('This branch already exists.');
    }

    removeBranch(branchName) {
        let branchCheck = this.findBranch(branchName);
        if (branchCheck !== null) {
            let index = this.branches.indexOf(branchName);
            this.branches.splice(index, 1);
            console.log(`Successfully removed ${branchName} from ${this.name}'s branch list.`);
            return true;
        }
        throw new Error('This branch could not be found.')
    }

    newAccount(branchName, accountName) {
        let branchCheck = this.findBranch(branchName);
        if(branchCheck !== null) {
            return branchCheck.newAccount(accountName);
        }
        throw new Error('This branch could not be found.');
    }

    removeAccount(branchName, accountName) {
        let branchCheck = this.findBranch(branchName);
        if(branchCheck !== null) {
            return branchCheck.removeAccount(accountName);
        }
        throw new Error('This branch could not be found.');
    }

    deposit(branchName, accountName, depositAmount, date) {
        let branchCheck = this.findBranch(branchName);
        if(branchCheck !== null) {
            return branchCheck.deposit(accountName, depositAmount, date);
        }
        throw new Error('This branch could not be found.');
    }

    withdraw(branchName, accountName, withdrawAmount, date) {
        let branchCheck = this.findBranch(branchName);
        if(branchCheck !== null) {
            return branchCheck.withdraw(accountName, withdrawAmount, date);
        }
        throw new Error('This branch could not be found.');
    }

    findBranch(branchName) {
        for(let i = 0; i< this.branches.length; i++) {
            let checkBranch = this.branches[i];
            if(checkBranch.name === branchName) return checkBranch;
        }
        return null;
    }

    printBranchCustomers(branchName) {
        let branchCheck = this.findBranch(branchName);
        if(branchCheck !== null) {
            branchCheck.printAccountList();
        } else throw new Error('This branch could not be found.');
    }

    printAccountSummary(branchName, accountName) {
        let branchCheck = this.findBranch(branchName);
        if(branchCheck !== null) {
            branchCheck.printAccountSummary(accountName);
        } else throw new Error('This branch could not be found.');
    }

    printBranchAllAccountSummary(branchName) {
        let branchCheck = this.findBranch(branchName);
        if(branchCheck !== null) {
            branchCheck.printAllAccountSummary();
        } else throw new Error('This branch could not be found.');
    }
}


//  Test
// let bank = new Bank('Natwest');
// bank.addBranch('Amersham');
// bank.addBranch('Chesham');
// bank.newAccount('Amersham', 'Antony');
// bank.newAccount('Amersham', 'James');
// bank.newAccount('Chesham', 'John');

// // bank.branchAccountSummary('Amersham', 'Antony');
// // bank.branchAllAccountSummary('Amersham');

// bank.removeAccount('Amersham', 'James');

// bank.branchAllAccountSummary('Amersham');

// bank.deposit('Amersham', 'Antony', 2500, '08/03/21');
// bank.deposit('Amersham', 'Antony', 1000, '20/03/21');
// bank.withdraw('Amersham', 'Antony', 300, '25/03/21');

// bank.removeBranch('Chesham');

// bank.branchAllAccountSummary('Amersham');
// bank.newAccount('Amersham', 'James');
// // bank.newAccount('Amersham', 'John');
// bank.newAccount('Amersham', 'Joe')

// bank.displayBranchCustomers('Amersham');