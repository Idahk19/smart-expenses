import {Expense} from "./expense.js";
import {ExpenseTracker} from "./expenseTracker.js";

const addBtn = document.getElementById("addBtn");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const list = document.getElementById("expenseList");
const total = document.getElementById("total");

// add expense on click 

//creating ONE object that will store all expenses.
const tracker = new ExpenseTracker();

addBtn.addEventListener("click", () => {
    const expense = new Expense ( //creating a single expense item.
        description.value,
        Number(amount.value),
        category.value
    );
    tracker.addExpense(expense) //storing the expense inside your array.
    
    updateUI();
})

function updateUI(){
    list.innerHTML = ""; // clear old list first
    tracker.expenses.forEach((expense) =>{
        list.innerHTML += `
    <li>
        ${expense.description} - ${expense.amount} (${expense.category})
    </li>
`;
    });
    total.textContent = tracker.calculateTotal();
}