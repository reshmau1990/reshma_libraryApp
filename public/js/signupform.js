let email = document.getElementById("email");
let user = document.getElementById("username");
let pwd = document.getElementById("password");
let pwd1 = document.getElementById("password1");
let emailError = document.getElementById("emailError");
let userError = document.getElementById("userError");
let message1 = document.getElementById("message1");
let type = document.getElementById("type");
let strength1 = document.getElementById("strength1");
let message2 = document.getElementById("message2");
let display = document.getElementById("display");

function strengthpwd(){
    type.innerHTML = "Type a password";
    type.style.color = "blue";
}

function none(){
    type.innerHTML = "";
    message2.innerHTML = "";
}

function chk(){
    if(pwd1.value!=pwd.value){
        message2.innerHTML = "**Password not matching";
        message2.style.color = "red";   
    }
    else{
        message2.innerHTML = "";
    }
}

function str(){
 
let regExp1 = /^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
let regExp2 = /^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;

    if(regExp1.test(pwd.value)){
    strength1.innerHTML = "<b>Strong password</b>";
    strength1.style.color = "green";
    }

    else if(regExp2.test(pwd.value)){
    strength1.innerHTML = "<b>Strength:Medium</b>";
    strength1.style.color = "orange";
    }
    
    else {
        strength1.innerHTML = "<b>Weak password</b>";
        strength1.style.color = "red";
        }

}


function validate1(){
    
    let regep1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regep2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let regep = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

    if(email.value.trim() != "" &&  user.value.trim() != "" && pwd.value.trim() != "" && pwd1.value != ""){
        display.innerHTML = "";
        
        if (regep1.test(email.value)){
         
            emailError.innerHTML = "";

            if(regep.test(user.value)){

              userError.innerHTML = "";
              if(pwd.value.length<8){
                 message1.innerHTML = "**Password length must be atleast 8 characters";
                 message1.style.color = "red";
                  return false;
                }
                else if (regep2.test(pwd.value)){

                   message1.innerHTML = "";
                    if(pwd1.value==pwd.value){
                      return true;
                    }
                    else{
                       message2.innerHTML = "**Password not matching";
                       message2.style.color = "red";
                       return false;
                    }

                }
                else {
                    message1.innerHTML = "**Password length must be atleast 8 characters, at least one uppercase, and one lower case, must contain at least one number";
                    message1.style.color = "red";
                    return false;
                }
            }
            else{
                userError.innerHTML = "**Invalid username (must have 5 characters minimum, only (.,-,_) special characters are allowed) ";
                userError.style.color = "red";
                return false;
            }
          
        }    
        else {
             emailError.innerHTML = "**Invalid email-id";
             emailError.style.color = "red";
             return false;
        }
    }
    else{
        display.innerHTML = "**Fields cannot be empty";
        display.style.color = "red";
        return false;
    }
}
