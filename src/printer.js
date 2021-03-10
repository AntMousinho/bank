class Printer {
    printStatement(account) {
        let output = "Account " + account.id + " - Summary:\nBalance: " + account.balance + "\nDate || Credit || Debit || Balance";
        let newBalance = account.balance;
        account.transactions.forEach(transaction => {
            let string = "";
            if(transaction.amount > 0) {
                string = "\n" + transaction.date + " || " + transaction.amount + " || 0.00 || " + newBalance;
                newBalance -= transaction.amount;
            } else {
                string = "\n" + transaction.date + " || 0.00 || " + (transaction.amount * -1) + " || " + newBalance;
                newBalance -= transaction.amount;
            }
            output += string;
        });
        return output
    }

    printAccounts(branch) {
        let output = "Branch " + branch.id + " - Accounts:"
        for(let i = 0; i < branch.accounts.length; i++) {
            output += "\nAccount ID: " + branch.accounts[i].id;
        }
        return output;
    }

    printBranches(bank) {
        let output = "Bank branches: ";
        for(let i = 0; i < bank.branches.length; i++) {
            output += "\nBranch ID: " + bank.branches[i].id;
        }
        return output;
    }
}

module.exports = Printer;