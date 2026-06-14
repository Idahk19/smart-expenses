// Every expense you create later will follow this structure.
export class Expense{ 
    constructor(description, amount, category){
        this.id = Date.now(); 
        this.description = description;
        this.amount = amount;
        this.category = category;
  
    }
}
