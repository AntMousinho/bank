class Bank {
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

module.exports = Bank;