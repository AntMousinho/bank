class Printer {     // Responsibility - Print account history
    printStatement(account) {
        console.log("Account Summary:\nDate || Credit || Debit || Balance");
        account.transactions.forEach(transaction => {
            console.log(transaction.join(" || "));
        });
    }
}

class Account {     // Responsibility - Store account details (balance and transaction history)
    constructor() {
        this._balance = 0;
        this._transactions = [];
    }

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