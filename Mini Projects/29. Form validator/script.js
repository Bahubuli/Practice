const form = document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//functions

function showError(input, message) {

    const formControl = input.parentElement;
    formControl.classList.add("error");
    const small = formControl.querySelector("small")
    small.innerText = message;
 }

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.add("success");
}

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



// all in one required check
function checkrequired(inputArr) {
    inputArr.forEach(function (input) {

        if (input.value.trim() === '')
        {
            showError(input,`${getFieldName(input)} is required`);
        }
        else
        {
            showSuccess(input);
        }
     })
 }


function getFieldName(input)
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check input length
function checkLength(input, min, max)
{
    if (input.value.length < min)
    {
        showError(input, `${ getFieldName(input) } must be at least ${ min }`)
    }
    else if (input.value.length > min)
    {
        showError(input, `${ getFieldName(input) } must be at most ${ max }`)
    }
    else
    {
        showSuccess(input);
    }
}

function checkemail(input)
{
    if (isValidEmail(input))
        showSuccess(input);
    else
        showError(input, "enter valid email");
}


function checkPasswordsMatch(input1, input2)
{
    if (input1.value !== input2.value)
    {
        showError(input2, "Passwords do not match");
    }
}

//event listners
form.addEventListener("submit", function (e) {
    e.preventDefault();


    // brute force method
    /*
    if (username.value === '')
    {
        showError(username, "username is required");
    }
    else
    {
        showSuccess(username);
    }
    if (email.value === '')
    {
        showError(email, "email is required");
    }
    else if (!isValidEmail(email.value))
    {
        alert("not valid email");
    }
    else
    {
        showSuccess(email);
    }
    if (password.value === '')
    {
        showError(password, "password is required");
    }
    else
    {
        showSuccess(password);
    }

    if (password2.value === '')
    {
        showError(password2, "password2 is required");
    }
    else
    {
        showSuccess(password2);
    }*/

    checkrequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkemail(email);
    checkPasswordsMatch(password, password2);
 })
