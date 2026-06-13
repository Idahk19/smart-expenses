// Every expense you create later will follow this structure.
class Expense{ 
    constructor(description, amount, category){
        this.description = description;
        this.amount = amount;
        this.category = category;
  
    }
}
module.exports = Expense;