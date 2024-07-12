document.getElementById("myForm").addEventListener("submit", function (e){
    e.preventDefault();

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if(!validateUsername(username.value)){
        setError(username, "Username must be at least 3 characters");
    } 
    else{
        setSuccess(username);
    }

    if(!validateEmail(email.value)){
        setError(email, "Email is not valid");
    } 
    else{
        setSuccess(email);
    }

    if(!validatePassword(password.value)){
        setError(password, "Password must be at least 6 characters");
    } 
    else{
        setSuccess(password);
    }

    if(password.value !== confirmPassword.value){
        setError(confirmPassword, "Passwords do not match");
    } 
    else{
        setSuccess(confirmPassword);
    }
});

function validateUsername(username){
    return username.length >= 3;
}

function validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password){
    return password.length >= 6;
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    small.style.visibility = "visible";
    input.style.borderColor = "red";
}

function setSuccess(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.style.visibility = "hidden";
    input.style.borderColor = "green";
}
