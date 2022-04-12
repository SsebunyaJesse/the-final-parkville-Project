// input variable initialization 
const Username = document.entryForm.username;
const Email = document.entryForm.email;
const Nin = document.entryForm.nin;
const Password = document.entryForm.password;


//displaying errors picked from id of error element in form
const usernameError = document.getElementById('susername');
const emailError = document.getElementById('semail');
const ninError = document.getElementById('snin');
const passwordError = document.getElementById('spassword');

// eventlisteners from the declared constants
Username.addEventListener('blur', Username_verify, true);
Email.addEventListener('blur', Email_verify, true);
Nin.addEventListener('blur', Nin_verify, true);
Password.addEventListener('blur', Password_verify, true);

// validations
function validate(){
     //username validation, checking if its empty
     if(Username.value ===''){
        usernameError.textContent = 'Username is required';
        Username.focus();
        return false;
    }
    if(Email.value ===''){
        emailError.textContent = 'Email is required';
        Email.focus();
        return false;
    }
    if(Nin.value ===''){
        ninError.textContent = 'NIN is required';
        Nin.focus();
        return false;
    }
    if(Password.value ===''){
        passwordError.textContent = 'Password is required';
        Password.focus();
        return false;
    }
}

//regex
const numbers = /^[0-9]+$/
const alphabets = /^[a-zA-Z]+$/;
const nameRegex = /^.{2,20}[a-zA-Z]+$/; 
const alphaNumeric = /^[0-9a-zA-Z]+$/; 
const ninRegex = /^[0-9a-zA-Z]{13}$/; 
const phoneRegex = /^\d{10}$/;
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" 
const emailRegex = "^(.+)@(.+)$";


//event handlers for correct data
//username
function Username_verify(){
    if(Username.value !='' && Username.value.match(nameRegex)){
        usernameError.innerHTML = '';
        return true;
    }
    else{
        usernameError.textContent = 'Username should be 2-20 characters'
        Username.focus();
       return false;
       }
}
//email
function Email_verify(){
    if(Email.value !='' && Email.value.match(emailRegex)){
        emailError.innerHTML = '';
        return true;
    }
    else{

        emailError.textContent = 'Email should contain @ & . notations'
        Email.focus();
        return false;
       }
}
// nin
function Nin_verify(){
    if(Nin.value !='' && Nin.value.match(alphaNumeric)){
        ninError.innerHTML = '';
        return true;
    }
    else{
        ninError.textContent = 'NIN should only be string'
        Nin.focus();
        return false;
       }
}
// password
function Password_verify(){
    if(Password.value !='' && Password.value.match(passwordRegex)){
        passwordError.innerHTML = '';
        return true;
    }
    else{

        passwordError.textContent = 'Password has to be greater than 7 characters & contain atleast alphanumeric symbols and characters'
        Password.focus();
        return false;
       }
}