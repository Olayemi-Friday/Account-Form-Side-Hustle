let regBtn=document.getElementById("regBtn")
let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let email=document.getElementById("email")
let phone=document.getElementById("phone")
let password=document.getElementById("password")
let cPassword=document.getElementById("cPassword")
let fnameErr=document.getElementById("fnameErr")
let lnameErr=document.getElementById("lnameErr")
let emailErr=document.getElementById("emailErr")
let phoneErr=document.getElementById("phoneErr")
let passwordErr=document.getElementById("passwordErr")
let cPasswordErr=document.getElementById("cPasswordErr")

regBtn.addEventListener('click', function(){
    validationInfo()
})

function validationInfo() {
    if(fname.value==""){
        fnameErr.innerHTML="Please Enter Your First Name"
    }else if(lname.value==""){
        lnameErr.innerHTML="Please Enter Your Last Name"
    }else if(email.value==""){
        emailErr.innerHTML="Enter an Email Address"
    }else if(phone.value==""){
        phoneErr.innerHTML="Enter your Phone Number"
    }else if(password.value==""){
        passwordErr.innerHTML="Enter your Password"
    }else if(cPassword.value==""){
        cPasswordErr.innerHTML="Re-enter your Password "
    }else{
        clearErr()
    }
}