// input variable initialization 
const Category = document.entryForm.category;
const Category2 = document.entryForm.category2;
const Nin = document.entryForm.nin;
const Driversname = document.entryForm.driversname;
const Phonenumber = document.entryForm.phonenumber;
const Numberplate = document.entryForm.numberplate;
const Color = document.entryForm.color;
const Arrivaltime = document.entryForm.arrivaltime;
const Date = document.entryForm.date;
const Model = document.entryForm.model;
const Charge = document.entryForm.charge;

//displaying errors picked from id of error element in form
const ninError = document.getElementById('vnin');
const driversnameError = document.getElementById('vdriversname');
const phonenumberError = document.getElementById('vphonenumber');
const numberplateError = document.getElementById('vnumberplate');
const colorError = document.getElementById('vcolor');
const arrivaltimeError = document.getElementById('varrivaltime');
const dateError = document.getElementById('vdate');
const modelError = document.getElementById('vmodel');
const chargeError = document.getElementById('vcharge');

// eventlisteners from the declared constants
Nin.addEventListener('blur', Nin_verify, true);
Driversname.addEventListener('blur', Driversname_verify, true);
Phonenumber.addEventListener('blur', Phonenumber_verify, true);
Numberplate.addEventListener('blur', Numberplate_verify, true);
Color.addEventListener('blur', Color_verify, true);
Arrivaltime.addEventListener('blur', Arrivaltime_verify, true);
Date.addEventListener('blur', Date_verify, true);
Model.addEventListener('blur', Model_verify, true);
Charge.addEventListener('blur', Charge_verify, true);

// validations
function validate(){
     //nin validation, checking if its empty
     if(Nin.value ===''){
        ninError.textContent = 'NIN is required';
        Nin.focus();
        return false;
    }
    if(Driversname.value ===''){
        driversnameError.textContent = 'Driversname is required';
        Driversname.focus();
        return false;
    }
    if(Phonenumber.value ===''){
        phonenumberError.textContent = 'Phonenumber is required';
        Phonenumber.focus();
        return false;
    }
    if(Numberplate.value ===''){
        numberplateError.textContent = 'Numberplate is required';
        // Charge.border = '1px solid red';
        Numberplate.focus();
        return false;
    }
    if(Color.value ===''){
        colorError.textContent = 'Color is required';
        // Charge.border = '1px solid red';
        Color.focus();
        return false;
    }
    if(Arrivaltime.value ===''){
        arrivaltimeError.textContent = 'Arrivaltime is required';
        Arrivaltime.focus();
        return false;
    }
    if(Date.value ===''){
        dateError.textContent = 'Date is required';
        Date.focus();
        return false;
    }
    if(Model.value ===''){
        modelError.textContent = 'Model is required';
     
        chargeError.textContent = 'Charge is required';
        Charge.focus();
        return false;
    }
}

//regex
const numbers = /^\d+$/;
const alphabets = /^[a-zA-Z]+$/;
const nameRegex = /^.{1,20}[a-zA-Z]+$/; 
const alphaNumeric = /^[0-9a-zA-Z]+$/; 
const ninRegex = /^[0-9a-zA-Z]{13}$/; 
const phoneRegex = /^\d{10}$/;
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" 
const emailRegex = "^(.+)@(.+)$";
const date = "^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
const time =  /^(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9])?$/;
const date2 = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;


//event handlers for correct data
//nin
function Nin_verify(){
    if(Nin.value !='' && Nin.value.match(ninRegex)){
        ninError.innerHTML = '';
        return true;
    }
    else{
        ninError.textContent = 'NIN should be a string of 13 characters'
        Nin.focus();
       return false;
       }
}
//driversname
function Driversname_verify(){
    if(Driversname.value !='' && Driversname.value.match(alphabets)){
        driversnameError.innerHTML = '';
        return true;
    }
    else{

        driversnameError.textContent = 'Driversname should only be alphabets'
        Driversname.focus();
        return false;
       }
}
// phonenumber
function Phonenumber_verify(){
    if(Phonenumber.value !='' && Phonenumber.value.match(phoneRegex)){
        phonenumberError.innerHTML = '';
        return true;
    }
    else{
        phonenumberError.textContent = 'Phonenumber should be digits'
        Phonenumber.focus();
        return false;
       }
}
// numberplate
function Numberplate_verify(){
    if(Numberplate.value !='' && Numberplate.value.match(alphaNumeric)){
        numberplateError.innerHTML = '';
        return true;
    }
    else{

        numberplateError.textContent = 'Numberplate should be a string'
        Charge.focus();
        return false;
       }
}
// color
function Color_verify(){
    if(Color.value !='' && Color.value.match(alphabets)){
        colorError.innerHTML = '';
        return true;
    }
    else{
        colorError.textContent = 'Color should be a string of alphabets'
        Color.focus();
        return false;
       }
}
// arrivaltime
function Arrivaltime_verify(){
    if(Arrivaltime.value !='' && Arrivaltime.value.match(time)){
        numberplateError.innerHTML = '';
        return true;
    }
    else{
        arrivaltimeError.textContent = 'Arrivaltime should be in order'
        Arrivaltime.focus();
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
// Model
function Model_verify(){
    if(Model.value !='' && Model.value.match(alphaNumeric)){
        modelError.innerHTML = '';
        return true;
    }
    else{
        modelError.textContent = 'Model should be a string'
        Model.focus();
        return false;
       }
}
// numberplate
function Charge_verify(){
    if(Charge.value !='' && Charge.value.match()){
        chargeError.innerHTML = '';
        return true;
    }
    else{
        chargeError.textContent = 'Charge should be digits'
        Charge.focus();
        return false;
       }
}