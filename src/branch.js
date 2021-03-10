class Branch {
    constructor(){
        this._id = Math.floor(Math.random() * 1000);
        this._accounts = [];
    }

    get id() {return this._id}

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

module.exports = Branch;