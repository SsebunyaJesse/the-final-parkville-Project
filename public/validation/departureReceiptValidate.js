// input variable initialization 
const Customersname = document.entryForm.customersname;
const Phonenumber = document.entryForm.phonenumber;
const Gender = document.entryForm.gender;
const Nin = document.entryForm.nin;
const Departuretime = document.entryForm.departuretime;
const Date = document.entryForm.date; 

//displaying errors picked from id of error element in form
const customersnameError = document.getElementById('dcustomersname');
const phonenumberError = document.getElementById('dphonenumber');
const ninError = document.getElementById('dnin');
const departuretimeError = document.getElementById('ddeparturetime');
const dateError = document.getElementById('ddate');

// eventlisteners from the declared constants
Customersname.addEventListener('blur', Customersname_verify, true);
Phonenumber.addEventListener('blur', Phonenumber_verify, true);
Nin.addEventListener('blur', Nin_verify, true);
Departuretime.addEventListener('blur', Departuretime_verify, true);
Date.addEventListener('blur', Date_verify, true);

//get value for input variables used to access the DOM
CustomersnameValue =  Customersname.value;
PhonenumberValue = Phonenumber.value;
NinValue = Nin.value;
DeparturetimeValue = Departuretime.value;
DateValue = Date.value;

// validations
function validate(){

     if(Customersname.value ===''){
        customersnameError.textContent = 'Customers name is required';
        Customersname.focus();
        return false;
    }
    if(Phonenumber.value ===''){
        phonenumberError.textContent = 'Phonenumber is required';
        Phonenumber.focus();
        return false;
    }
    if(Nin.value ===''){
        ninError.textContent = 'NIN is required';
        Nin.focus();
        return false;
    }
    if(Departuretime.value ===''){
        departuretimeError.textContent = 'Departuretime is required';
        Departuretime.focus();
        return false;
    }
    if(Date.value ===''){
        dateError.textContent = 'Date is required';
        Date.focus();
        return false;
    }
}

//regex
const numbers = /^[0-9]+$/
const alphabets = /^[a-zA-Z]+$/;
const nameRegex = /^.{1,20}[a-zA-Z]+$/; 
const alphaNumeric = /^[0-9a-zA-Z]+$/; 
const ninRegex = /^[0-9a-zA-Z]{13}$/; 
const phoneRegex = /^\d{10}$/;
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
const emailRegex = "^(.+)@(.+)$";
const date = "^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
const time =  /^(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9])?$/;
const date2 = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;

//event handlers for correct data
//customers name
function Customersname_verify(){
    if(Customersname.value !='' && Customersname.value.match(alphabets)){
        customersnameError.innerHTML = '';
        return true;
    }
    else{
        customersnameError.textContent = 'Customers name should only be alphabets'
        Customersname.focus();
       return false;
       }
}
//tyremake 
function Phonenumber_verify(){
    if(Phonenumber.value !='' && Phonenumber.value.match(phoneRegex)){
        tyremakeError.innerHTML = '';
        return true;
    }
    else{
        phonenumberError.textContent = 'Phone number should only be 10 digits'
        Phonenumber.focus();
        return false;
       }
}
// NIN
function Nin_verify(){
    if(Nin.value !='' && Nin.value.match(ninRegex)){
        ninError.innerHTML = '';
        return true;
    }
    else{
        ninError.textContent = 'NIN should only be a string of 13 characters'
        Nin.focus();
        return false;
       }
}
// departuretime
function Departuretime_verify(){
    if(Departuretime.value !='' && Departuretime.value.match(time)){
        departuretimeError.innerHTML = '';
        return true;
    }
    else{
        departuretimeError.textContent = 'Departure time should be in order'
        Departuretime.focus();
        return false;
       }
}
// date
function Date_verify(){
    if(Date.value !='' && Date.value.match(date)){
        dateError.innerHTML = '';
        return true;
    }
    else{
        dateError.textContent = 'Date should be in order'
        Date.focus();
        return false;
       }
}