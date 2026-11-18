const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const transactionList = document.getElementById('transaction-list');
const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('total-income');
const expenseEl = document.getElementById('total-expense');

let transactions = JSON.parse(localStorage.getItem('spendwise_transactions')) || [];

function updateUI() {
  transactionList.innerHTML = '';
  let income = 0;
  let expense = 0;

  transactions.forEach((tx, index) => {
    const li = document.createElement('li');
    li.className = tx.type === 'expense' ? 'expense-item' : '';
    const sign = tx.type === 'income' ? '+' : '-';

    li.innerHTML = `
      <span>${tx.description}</span>
      <div>
        <strong>${sign}KES ${tx.amount.toFixed(2)}</strong>
        <button class="delete-btn" onclick="deleteTransaction(${index})">X</button>
      </div>
    `;
    transactionList.appendChild(li);

    if (tx.type === 'income') {
      income += tx.amount;
    } else {
      expense += tx.amount;
    }
  });

  const balance = income - expense;
  balanceEl.textContent = `KES ${balance.toFixed(2)}`;
  incomeEl.textContent = `+KES ${income.toFixed(2)}`;
  expenseEl.textContent = `-KES ${expense.toFixed(2)}`;

  localStorage.setItem('spendwise_transactions', JSON.stringify(transactions));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeInput.value;

  if (!description || isNaN(amount) || amount <= 0) return;

  transactions.push({ description, amount, type });
  descriptionInput.value = '';
  amountInput.value = '';
  updateUI();
});

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateUI();
}

updateUI();