export class ExpenseTracker{
    constructor(){
        this.expenses = []; // Create an empty array
    }
    // add a new expense
    addExpense(expense){
   this.expenses.push(expense);
   this.saveExpenses()
   }

   // Go through all expenses and add their amounts

   calculateTotal(){
    return this.expenses.reduce((total, expense) => {
        return total + expense.amount;
    },0)
   }

   // Go to position X and remove 1 item

   removeExpense(id){
    this.expenses = this.expenses.filter(
    expense => expense.id !== id
    );
     this.saveExpenses();
   }
   //Give me only expenses that match this category
   filterByCategory(category){
    return this.expenses.filter(expense =>
         expense.category.toLowerCase() === category.toLowerCase())

   }

  saveExpenses() {
    if (typeof localStorage !== "undefined") { // Only run this code if localStorage exists // jest skips it
        localStorage.setItem(
            "expenses",
            JSON.stringify(this.expenses)
        );
    }
}
  loadExpenses() {
    if (typeof localStorage !== "undefined") { // Only run this code if localStorage exists
        const storedExpenses = localStorage.getItem("expenses");

        if (storedExpenses) {
            this.expenses = JSON.parse(storedExpenses);
        }
    }
}
updateExpense(id, updatedExpense) {
    this.expenses = this.expenses.map(expense =>
        expense.id === id ? updatedExpense : expense
    );
    this.saveExpenses();
}

}




