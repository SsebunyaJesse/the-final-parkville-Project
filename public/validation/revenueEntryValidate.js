// accessing the dom by form name and element
const Cartyresectionrevenue = document.entryForm.cartyresectionrevenue;
const Batterysectionrevenue = document.entryForm.batterysectionrevenue;
const Parkingsectionrevenue = document.entryForm.parkingsectionrevenue;
const Totalrevenue = document.entryForm.totalrevenue;


//displaying errors picked from id of error element in form
const cartyresectionrevenueError = document.getElementById('rcartyresectionrevenue');
const batterysectionrevenueError = document.getElementById('rbatterysectionrevenue');
const parkingsectionrevenueError = document.getElementById('rparkingsectionrevenue');
const totalrevenueError = document.getElementById('rtotalrevenue');

//event listners got from declared constants
Cartyresectionrevenue.addEventListener('blur', Cartyresectionrevenue_verify, true);
Batterysectionrevenue.addEventListener('blur', Batterysectionrevenue_verify, true);
Parkingsectionrevenue.addEventListener('blur', Parkingsectionrevenue_verify, true);
Totalrevenue.addEventListener('blur', Totalrevenue_verify, true);

//validations
function validate(){
    //cartyresectionrevenue validation, checking if its empty
    if(Cartyresectionrevenue.value ==='')
    {
        cartyresectionrevenueError.textContent = 'Cartyresectionrevenue is required';
        Cartyresectionrevenue.focus();
        return false;
    }
    //batterysectionrevenue validation
    if(Batterysectionrevenue.value ===''){
        batterysectionrevenueError.textContent = 'Batterysectionrevenue is required';
        Batterysectionrevenue.focus();
        return false;
    } 
    //batterysectionrevenue validation
    if(Parkingsectionrevenue.value ===''){
        parkingsectionrevenueError.textContent = 'Parkingsectionrevenue is required';
        Parkingsectionrevenue.focus();
        return false;
    } 
    //totalrevenue validation
    if(Totalrevenue.value ===''){
        totalrevenueError.textContent = 'Totalrevenue is required';
        Totalrevenue.focus();
        return false;
    }
}

//regex
const nameRegex = /^.{1,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@'
const digit = /^\d$/; // for numbers

//event handlers for correct data

//cartyresectionrevenue
 function Cartyresectionrevenue_verify(){
     if(Cartyresectionrevenue.value !='' && Cartyresectionrevenue.value.match(digit)){
        cartyresectionrevenueError.innerHTML = '';
         return true;
     }
     else{
        cartyresectionrevenueError.textContent = 'Cartyresectionrevenue should be digits'
        Cartyresectionrevenue.focus();
        return false;
        }
 }

//batterysectionrevenue
function Batterysectionrevenue_verify(){
    if(Batterysectionrevenue.value !='' && Batterysectionrevenue.value.match(digit)){
        batterysectionrevenueError.innerHTML = '';
        return true;
    }
    else{
        batterysectionrevenueError.textContent = 'Batterysectionrevenue should be digits'
        Batterysectionrevenue.focus();
       return false;
       }
}
//parkingsectionrevenue
function Parkingsectionrevenue_verify(){
    if(Parkingsectionrevenue.value !='' && Parkingsectionrevenue.value.match(digit)){
        parkingsectionrevenueError.innerHTML = '';
        return true;
    }
    else{
       parkingsectionrevenueError.textContent = 'Parkingsectionrevenue should be digits'
       Parkingsectionrevenue.focus();
       return false;
       }
}
//totalsectionrevenue
function Totalrevenue_verify(){
    if(Totalrevenue.value !='' && Totalrevenue.value.match(digit)){
        totalrevenueError.innerHTML = '';
        return true;
    }
    else{
       totalrevenueError.textContent = 'Totalrevenue should be digits'
       Totalrevenue.focus();
       return false;
       }
}