// input variable initialization 
const Category = document.entryForm.category;
const Tyresize = document.entryForm.tyresize;
const Tyremake = document.entryForm.tyremake;
const Carmodel = document.entryForm.carmodel;
const Charge = document.entryForm.charge;

//displaying errors picked from id of error element in form
const categoryError = document.getElementById('tservicecategory');
const tyresizeError = document.getElementById('ttyresize');
const tyremakeError = document.getElementById('ttyremake');
const carmodelError = document.getElementById('tcarmodel');
const chargeError = document.getElementById('tcharge');

// eventlisteners from the declared constants
Tyresize.addEventListener('blur', Tyresize_verify, true);
Tyremake.addEventListener('blur', Tyremake_verify, true);
Carmodel.addEventListener('blur', Carmodel_verify, true);
Charge.addEventListener('blur', Charge_verify, true);

// //get value for input variables used to access the DOM
// TyresizeValue =  Tyresize.value;
// TyremakeValue = Tyremake.value;
// CarmodelValue = Carmodel.value;
// ChargeValue = Charge.value;

// validations
function validate(){
     //Tyresize validation, checking if its empty
     if(Tyresize.value ===''){
        tyresizeError.textContent = 'Tyre size is required';
        // Tyresize.label = '1px solid red';
        Tyresize.focus();
        return false;
    }
    if(Tyremake.value ===''){
        tyremakeError.textContent = 'Tyremake is required';
        // Tyremake.border = '1px solid red';
        Tyremake.focus();
        return false;
    }
    if(Carmodel.value ===''){
        carmodelError.textContent = 'Carmodel is required';
        // Carmodel.border = '1px solid red';
        Carmodel.focus();
        return false;
    }
    if(Charge.value ===''){
        chargeError.textContent = 'Charge is required';
        // Charge.border = '1px solid red';
        Charge.focus();
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
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" 
const emailRegex = "^(.+)@(.+)$";


//event handlers for correct data
//tyresize
function Tyresize_verify(){
    if(Tyresize.value !='' && Tyresize.value.match(alphaNumeric)){
        // Batterysize.style.border ='1px solid green';
        batterysizeError.innerHTML = '';
        return true;
    }
    else{
        // Batterysize.style.border = '1px solid red';
        tyresizeError.textContent = 'Should be alpha numerics'
        Tyresize.focus();
       return false;
       }
}
//tyremake 
function Tyremake_verify(){
    if(Tyremake.value !='' && Tyremake.value.match(alphabets)){
        tyremakeError.innerHTML = '';
        return true;
    }
    else{

        tyremakeError.textContent = 'Insert only alphabetic characters'
        Tyremake.focus();
        return false;
       }
}
// carmodel
function Carmodel_verify(){
    if(Carmodel.value !='' && Tyremake.value.match(alphaNumeric)){
        carmodelError.innerHTML = '';
        return true;
    }
    else{
        carmodelError.textContent = 'Carmodel should only be string'
        Carmodel.focus();
        return false;
       }
}
// charge
function Charge_verify(){
    if(Charge.value !='' && Charge.value.match(numbers)){
        chargeError.innerHTML = '';
        return true;
    }
    else{

        chargeError.textContent = 'Charge should only be digits'
        Charge.focus();
        return false;
       }
}