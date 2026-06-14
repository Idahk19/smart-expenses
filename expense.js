// Every expense you create later will follow this structure.
export class Expense{ 
    constructor(description, amount, category){
        this.id = Date.now()+ Math.random(); //Every expense gets its own unique identity so we can delete it correctly
        this.description = description;
        this.amount = amount;
        this.category = category;
  
    }
}
