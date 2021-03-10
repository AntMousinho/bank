# Self Goals

Revert the code back to original project task. Go back to the basic functionality and build from there.
* Printing an Account statement
* Making deposits and withdrawals
* 3 cohesive classes


* Maintain high cohesion, low coupling
* Keep it clean and maintainable
    * Everything is there for a specific reason
* Don't go too into detail and functionality, keep it simple

# After feedback
* Split the script into multiple files, 1 per class
* Printer class to return strings rather than log to console
* Improve the way transactions are recorded and stored
    * only 1 source for balance, record the deposit/withdrawal amount and calculate balance change when running printer class
    * Change transactions into an array of objects, each with identical keys for access