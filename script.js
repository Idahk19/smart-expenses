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
    <tr class="border-b hover:bg-gray-50">
        <td class="p-3">${expense.description}</td>
        <td class="p-3">${expense.category}</td>
        <td class="p-3">Ksh ${expense.amount}</td>
        <td class="p-3 text-center">
            <button
                onclick="deleteExpense(${index})"
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
                Delete
            </button>
        </td>
    </tr>
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
