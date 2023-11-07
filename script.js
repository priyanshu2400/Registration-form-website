let form = document.getElementById('form');
let fullname = document.getElementById('fullname');
let username = document.getElementById('username');
let email =  document.getElementById('email');
let passwd = document.getElementById('password');
let passwd2 = document.getElementById('password2');
form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();
});
let displayError = (element,message) => {
    element.innerText = message;
}
let displaySuccess = (element) => {
    element.innerText = "";
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
let validateInputs = () => {
    let userval = username.value.trim();
    let nameval = fullname.value.trim();
    let emailval = email.value.trim();
    let passwdval = passwd.value.trim();
    let passwdval2 = passwd2.value.trim();
    let count = 0;
    if(userval === ''){
        let userError = document.getElementById('usernameerror');
        displayError(userError,"Username is required");
    }
    else{
        let userSucc = document.getElementById('usernameerror');
        displaySuccess(userSucc);
        count++;
    }
    if(nameval === ''){
        let nameError = document.getElementById('nameerror');
        displayError(nameError,"Full name is required");
    }
    else{
        let nameSucc = document.getElementById('nameerror');
        displaySuccess(nameSucc);
        count++;
    }
    if(emailval === ''){
        let emailError = document.getElementById('emailerror');
        displayError(emailError,"Email is required");
    }
    else if (!isValidEmail(emailval)) {
        let emailError = document.getElementById('emailerror');
        displayError(emailError, 'Provide a valid email address');
    }
    else{
        let emailSucc = document.getElementById('emailerror');
        displaySuccess(emailSucc);
        count++;
    }
    if(passwdval === ''){
        let passError = document.getElementById('passworderror');
        displayError(passError,"Password is required");
    }
    else if(passwdval.length < 8){
        let passlen = document.getElementById('passworderror');
        displayError(passlen,"Password must me atleast 8 characters");
    }
    else{
        let passSucc = document.getElementById('passworderror');
        displaySuccess(passSucc);
        count++;
    }
    if(passwdval2 === ''){
        let pass2Error = document.getElementById('password2error');
        displayError(pass2Error,"Confirm the password");
    }
    else if(passwdval != passwdval2){
        let pass2notmatch = document.getElementById('password2error');
        displayError(pass2notmatch,"Password is not matching");
    }
    else{
        let pass2Succ = document.getElementById('password2error');
        displaySuccess(pass2Succ);
        count++;
    }
    if(count == 5){
        form.innerHTML = "<p>Registration Successfull, Thank you for registering</p>";
    }
}