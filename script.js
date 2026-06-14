import {Expense} from "./expense.js";
import {ExpenseTracker} from "./expenseTracker.js";

const addBtn = document.getElementById("addBtn");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const list = document.getElementById("expenseList");
const total = document.getElementById("total");
const form = document.getElementById("expenseForm").reset();
const filterCategory = document.getElementById("filterCategory");

//creating ONE object that will store all expenses.
const tracker = new ExpenseTracker();
tracker.loadExpenses();
updateUI();

// add expense on click // event listener
addBtn.addEventListener("click", () => {
    const expense = new Expense ( //creating a single expense item.
        description.value,
        Number(amount.value),
        category.value.toLowerCase()
    );
    tracker.addExpense(expense) //storing the expense inside your array.
    
    updateUI();
});

// filterByCategory event listener

filterCategory.addEventListener("change", () => {
    updateUI();
});

function updateUI(){
    list.innerHTML = ""; // clear old list first

    let expensesToDisplay;

    if (filterCategory.value === "all"){

        expensesToDisplay = tracker.expenses;

    }else{
        expensesToDisplay = tracker.filterByCategory(

            filterCategory.value
        )
    }

    expensesToDisplay.forEach((expense, index) =>{
        list.innerHTML += `
    <tr class="border-b hover:bg-gray-50">
        <td class="p-3">${expense.description}</td>
        <td class="p-3">${expense.category}</td>
        <td class="p-3">Ksh ${expense.amount}</td>
        <td class="p-3 text-center">
            <button
                onclick="editExpense(${expense.id})"
                class="bg-green-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
            >
                Edit
            </button>
            <button
                onclick="deleteExpense(${expense.id})"
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

window.deleteExpense = function(id) {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
        tracker.removeExpense(id);
        updateUI();
    }
}
window.editExpense = function(id) {
    const expense = tracker.expenses.find(exp => exp.id === id);

    if (!expense) return;

    const newDescription = prompt("Edit description:", expense.description);
    const newAmount = prompt("Edit amount:", expense.amount);
    const newCategory = prompt("Edit category:", expense.category);

    const updatedExpense = new Expense(
        newDescription,
        Number(newAmount),
        newCategory.toLowerCase()
    );

    // keep same ID
    updatedExpense.id = id;

    tracker.updateExpense(id, updatedExpense);
    updateUI();
};
