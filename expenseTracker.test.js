import { Expense } from "./expense.js";
import { ExpenseTracker } from "./expenseTracker.js";

// test for adding an expense

test ("Should add an expense", ()=>{

    const tracker = new ExpenseTracker();
    tracker.addExpense(new Expense("food","500","food"))
    
    expect(tracker.expenses.length).toBe(1)
});
test ("should calculate total correctly", ()=>{
    const tracker = new ExpenseTracker ();
    tracker.addExpense(new Expense("food",500,"food"))
    tracker.addExpense(new Expense("transport",500,"transport"))

    expect(tracker.calculateTotal()).toBe(1000)
});
test ("should delete expense selected",()=>{
    const tracker = new ExpenseTracker();
    const expense1 = new Expense("food", 500, "food");
    const expense2 = new Expense("transport", 300, "transport");

    tracker.addExpense(expense1);
    tracker.addExpense(expense2);

    tracker.removeExpense(expense2.id);

    expect(tracker.expenses.length).toBe(1)

});
test("should filter expenses by category", () => {
    const tracker = new ExpenseTracker();

    tracker.addExpense(new Expense("food", 500, "food"));
    tracker.addExpense(new Expense("transport", 300, "transport"));
    tracker.addExpense(new Expense("lunch", 200, "food"));

    const foodExpenses = tracker.filterByCategory("food");

    expect(foodExpenses.length).toBe(2);
});