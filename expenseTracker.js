class ExpenseTracker{
    constructor(){
        this.expenses = []; // Create an empty array
    }
    // add a new expense
    addExpense(expense){
   this.expenses.push(expense)
   }

   // Go through all expenses and add their amounts

   calculateTotal(){
    return this.expenses.reduce((total, expense) => {
        return total + expense.amount;
    },0)
   }

   // Go to position X and remove 1 item

   removeExpense(index){
     this.expenses.splice(index, 1)
   }
   //Give me only expenses that match this category
   filterByCategory(category){
    return this.expense.filter(expense => expense.category === category)

   }

}

module.exports = ExpenseTracker;



