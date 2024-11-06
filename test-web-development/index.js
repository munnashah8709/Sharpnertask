function addExpense() {
    const amount = document.getElementById('expenseAmount').value;
    const description = document.getElementById('expenseDescription').value;
    const category = document.getElementById('expenseCategory').value;

    if (!amount || !description || !category) {
        alert('Please fill out all fields.');
        return;
    }
    const expense = {
        amount,
        description,
        category
    };
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseCategory').value = '';

    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = ''; // Clear existing items
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            ${expense.amount} - ${expense.description} - ${expense.category}
            <div>
                <button class="btn btn-sm btn-warning mr-2" onclick="editExpense(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteExpense(${index})">Delete</button>
            </div>
        `;
        expenseList.appendChild(listItem);
    });
}

function editExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expense = expenses[index];
    document.getElementById('expenseAmount').value = expense.amount;
    document.getElementById('expenseDescription').value = expense.description;
    document.getElementById('expenseCategory').value = expense.category;
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}
function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}
window.onload = displayExpenses;
