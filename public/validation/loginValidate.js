// accessing the dom by form name and element
const Username = document.entryForm.username;
const Password = document.entryForm.password;

//displaying errors picked from id of error element in form
const usernameError = document.getElementById('lusername');
const passwordError = document.getElementById('lpassword');

//event listners got from declared constants
Username.addEventListener('blur', Username_verify, true);
Password.addEventListener('blur', Password_verify, true);

//validations
function validate(){
    //username validation, checking if its empty
    if(Username.value ===''){
        usernameError.textContent = 'Username is required';
        Username.focus();
        return false;
    }
    //password validation
    if(Password.value ===''){
        passwordError.textContent = 'Password is required';
        Password.focus();
        return false;
    } 
}

//regex
const nameRegex = /^.{2,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@'

//event handlers for correct data

//Username
 function Username_verify(){
     if(Username.value !='' && Username.value.match(nameRegex)){
         usernameError.innerHTML = '';
         return true;
     }
     else{
        usernameError.textContent = 'Username should be between 2-20 alphabetic characters '
        Username.focus();
        return false;
        }
 }

//password
function Password_verify(){
    if(Password.value !='' && Password.value.match(passwordRegex)){
        passwordError.innerHTML = '';
        return true;
    }
    else{
       passwordError.textContent = 'Minimum eight characters, at least one letter and one number'
       Password.focus();
       return false;
       }
}