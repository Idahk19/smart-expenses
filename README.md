# Smart Expenses

Smart Tracker is a simple yet powerful expense tracking application built with HTML, CSS, JavaScript, OOP principles, and unit testing using Jest.  
It helps users manage daily expenses, categorize spending, and track total costs in a clean and structured interface.

## Features

- Add new expenses with description, amount, and category
- View all expenses in a structured table format
- Delete expenses with confirmation prompt
- Filter expenses by category (Food, Transport, Shopping, Other)
- Automatically calculate total expenses
- Clean and responsive UI using Tailwind CSS

## Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (ES6 Modules)
- Object-Oriented Programming (OOP)
- Jest (Unit Testing)

## Project Structure
```
Smart-Tracker/
│
├── index.html
├── styles.css
├── script.js
│
├── expense.js
├── expenseTracker.js
│
├── expenseTracker.test.js
│
├── package.json
└── README.md
```

## How It Works

### 1. Add Expense
Users input:
- Description
- Amount
- Category

Then click **Add Expense** to save it.

### 2. Manage Expenses
All expenses are stored inside the `ExpenseTracker` class which handles:
- Adding expenses
- Removing expenses
- Filtering expenses
- Calculating totals

### 3. Display Data
Expenses are dynamically rendered in a table format for clarity and structure.

### 4. Filter System
Users can filter expenses by category to view specific spending patterns.

## Planned Improvements
- Charts and analytics dashboard
- Monthly spending summaries

## Contributions

Contributions are welcome! If you'd like to improve Smart Tracker, follow these steps:

1. Fork the repository

2. Clone your fork
```
git clone https://github.com/your-username/smart-tracker.git
```
3. Create a new branch
```
git checkout -b feature/your-feature-name
```
4. Make your changes
Improve UI
Add new features
Fix bugs
Improve tests

5. Commit your changes
```
git commit -m "feat: add your feature description"
```
6. Push to your branch
```
git push origin feature/your-feature-name
```
## Author 

Idah Karwitha 

## license 

MIT license

## Live URL
