class ATM {
    deposit(account, depositAmount, depositDate) {
        if(depositAmount <= 0) throw new Error(`Invalid deposit amount`);
        account.balance += depositAmount;
        account.transactions = {
            date: depositDate, 
            amount: depositAmount
        };
    }

    withdraw(account, withdrawAmount, withdrawDate) {
        if(withdrawAmount <= 0 || withdrawAmount > account.balance) throw new Error(`Invalid withdrawal amount`);
        account.balance -= withdrawAmount;
        account.transactions = {
            date: withdrawDate,
            amount: withdrawAmount * -1
        };
    }
}

module.exports = ATM;