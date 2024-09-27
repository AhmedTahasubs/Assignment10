var signupNameInput= document.getElementById("signupName");
var signupEmailInput= document.getElementById("signupEmail");
var signupPassInput= document.getElementById("signupPass");
var loginEmailInput= document.getElementById("loginEmailInput")
var loginPassInput= document.getElementById("loginPassInput")
var usersInfo =[];
var signUpButton =document.getElementById("signUp");
var loginButton =document.getElementById("login");
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var nameRegex = /^[a-zA-Z]{3,}/;
var passRegex = /^\w{8,}$/;
var signuptext = document.getElementById("signuptext");
var logintext = document.getElementById("logintext");





// check if there is users already
if(localStorage.getItem("ourUsers") !==null)
{
    usersInfo = JSON.parse(localStorage.getItem("ourUsers"));
}

// signupfunction
function signup()
{   
    for(var i =0; i< usersInfo.length; i++)
        {
            if(signupEmailInput.value.toLowerCase() == usersInfo[i].signupEmail.toLowerCase())
            {
                signuptext.innerHTML = '<span class="text-danger">Email Already Exists</span>'
                return false;
            }  
        }
     
    if(isValidInputs(emailRegex,signupEmailInput) &
        isValidInputs(nameRegex,signupNameInput) &
        isValidInputs(passRegex,signupPassInput))
        {
        var signupInfo ={
            signupName: signupNameInput.value,
            signupEmail: signupEmailInput.value,
            signupPass: signupPassInput.value,
        }
        signupInfo.signupName= signupInfo.signupName.substring(0, 1).toUpperCase() + signupInfo.signupName.substring(1);
        usersInfo.push(signupInfo);
        localStorage.setItem("ourUsers",JSON.stringify(usersInfo))
        signuptext.innerHTML = '<span class="text-success">Success</span>'; 
        reset();
        }
        else
        {
        signuptext.innerHTML = '<span class="text-danger">Enter Valid Inputs</span>'
        }
}
if(signUpButton !== null)
{
    signUpButton.addEventListener("click",signup);
}
else
{
    
}
// reset all function
function reset()
{
    signupNameInput.value=null;
    signupEmailInput.value=null;
    signupPassInput.value=null;
}

// valid inputs
function isValidInputs(regex,element)
{
    if(regex.test(element.value)==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}




// login function
function login()
{
    // logintext.innerHTML= '<span class="text-danger">All inputs is required</span>'
    var email = loginEmailInput.value;
    var password = loginPassInput.value;
    for(var i =0; i< usersInfo.length; i++)
    {
        if(email.toLowerCase() == usersInfo[i].signupEmail.toLowerCase() &&
            password.toLowerCase() == usersInfo[i].signupPass.toLowerCase())
        {
            document.body.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary py-2">
                                        <div class="container">
                                        <a class="navbar-brand text-decoration-none text-white" href="#">SMART LOGIN</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            </ul>
                                            <a class="btn btn-outline-warning" href="./index.html" type="submit">Logout</a>
                                        </div>
                                        </div>
                                        </nav>
                                        <div class="container d-flex my-5 text-center align-items-center h-100">
                                        <div class="group p-5 m-auto w-75">
                                            <h1>Welcome ${usersInfo[i].signupName}</h1>
                                        </div>
                                        </div>
                                        <script src="../js/bootstrap.bundle.min.js"></script>
                                        <script src="../js/main.js"></script>`
            console.log("hello")
            return true;
        }  
        else
        {
        logintext.innerHTML = '<span class="text-danger">incorrect email or password</span>'
        }

    }
       
}
if(loginButton !== null)
{
    loginButton.addEventListener("click",login);
}
