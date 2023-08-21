function add(a,b)
{
    return a + b;
}
function sub(a,b)
{
    return a - b;
}
function mul(a,b)
{
    return a * b;
}
function divd(a,b)
{
    return a / b;
}



function operate(num1, operator, num2)
{
    if (operator === '+')
    {
        return add(num1, num2);
    }
    if (operator === '-')
    {
         return sub(num1, num2);
    }
    if (operator === '*')
    {
         return mul(num1, num2);
    }
    if (operator === '/')
    {
         return divd(num1, num2);
    }
}

let num1=0, num2=0, operator="+", got_left = false;

const display = document.querySelector(".display");



const clear = document.querySelector(".clear");

clear.addEventListener("click",()=> {

    num1 = 0
    num2 = 0
    display.textContent = "";

})


const nums = document.querySelectorAll(".num");


nums.forEach(num => {

    num.addEventListener("click", ()=>{
        if(got_left===true) num2 = num2 + "" + num.textContent;
        else num1 = num1 + "" + num.textContent;

        console.log(num1);
        console.log(num2);
    })


 })

const add_btn = document.querySelector(".add");
const sub_btn = document.querySelector(".sub");
const mul_btn = document.querySelector(".mul");
const divd_btn = document.querySelector(".divd");

const operations = [add_btn, sub_btn, mul_btn, divd_btn];

operations.forEach(op => {

    op.addEventListener("click", () => {
        operator = op.textContent;
        got_left = true;
     })
})

const domath = document.querySelector(".equal");

domath.addEventListener("click",()=> {

    got_left = false;
    display.textContent = operate(parseInt(num1), operator, parseInt(num2))
}

)
