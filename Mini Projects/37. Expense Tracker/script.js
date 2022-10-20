const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus")
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [


]

let transactions = dummyTransactions;

// Remove transaction by ID
function removeTransaction(id)
{
    transactions = transactions.filter(transaction =>transaction.id!==id);
    init();
}



function addTransactionDOM(transaction)
{
    const sign = transaction.amount<0 ? '-' : '+';

    const item = document.createElement("li");

    item.classList.add(sign==='+'?'plus':'minus')

    item.innerHTML = `
    ${transaction.text}
    <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class = "delete-btn" onClick = removeTransaction(${transaction.id})></button>
    `

    list.appendChild(item);
}
// update balance and income/expense

function updateValues()
{
    const amounts = transactions.map(transaction=>
        transaction.amount);

    const total = amounts.reduce((acc,item) => (acc+= item),0);

    const income  = amounts.filter(item => item>0)
                    .reduce((acc,item)=>(acc+=item),0);

    const expense = amounts.filter(item =>item<0).
                    reduce((acc,item)=>(acc+=item),0)*-1;

    balance.innerText = "₹"+`${total}`;
    money_plus.innerText = "₹"+`${income}`;
    money_minus.innerText = "₹"+`${expense}`;
}

function addTransaction(e)
{
    e.preventDefault();

    if(0)
    {
        alert("Please add a text and amount");
    }
    else
    {
        const transaction =
        {
            id:generateId(),
            text:text.value,
            amount: +amount.value

        };

        transactions.push(transaction)
        addTransactionDOM(transaction);
        updateValues();
        text.value = "";
        amount.value = "";
    }
}

// generate random id

function generateId()
{
    return Math.floor(Math.random()*1000000);
}


// Initialize app

function init()
{

    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();
form.addEventListener("submit", addTransaction);
