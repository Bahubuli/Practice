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
    if (operator === '+-/')
    {
         return divd(num1, num2);
    }
}

let num1=5, num2=10, operator="+", gotleft = false;

const display = document.querySelector(".display");

display.textContent = operate(num1, operator, num2);

const clear = document.querySelector(".clear");

clear.addEventListener("click",()=> {

    num1 = 0
    num2 = 0
    display.textContent = "";

})


const nums = document.querySelectorAll(".num");


nums.forEach(num => {

    num.addEventListener("click", ()=>{
        if(gotleft) num2 = num2 + "" + num.textContent;
        else num1 = num1 + "" + num.textContent;
    }

   console.log( num1 );
 })
