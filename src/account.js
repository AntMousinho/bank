class Account {
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

module.exports = Account;