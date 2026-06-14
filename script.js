import {Expense} from "./expense.js";
import {ExpenseTracker} from "./expenseTracker.js";

const addBtn = document.getElementById("addBtn");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const list = document.getElementById("expenseList");
const total = document.getElementById("total");

//creating ONE object that will store all expenses.
const tracker = new ExpenseTracker();
tracker.loadExpenses();
updateUI();

// add expense on click // event listener
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
    tracker.expenses.forEach((expense, index) =>{
        list.innerHTML += `
           <li class="flex justify-between items-center bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm">
    
                ${expense.description} - ${expense.amount} (${expense.category})
                <button onclick="deleteExpense(${index})"
                style="background-color: red; color: white; padding: 4px 8px; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">
                    Delete
                </button>
            </li>
        `;
    });
    total.textContent = tracker.calculateTotal();
}
window.deleteExpense = function(index) {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
        tracker.removeExpense(index);
        updateUI();
    }
}
