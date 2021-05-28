let user = document.getElementById("username");
let pwd = document.getElementById("password");
let error = document.getElementById("error");
let message = document.getElementById("message");
let display = document.getElementById("display");

function validate(){

    let regexp1 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
    
    let regexp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(user.value.trim() !="" && pwd.value.trim() !=""){
        
        if(regexp1.test(user.value)){
            error.innerHTML = "";

            if(pwd.value.length<8){
              message.innerHTML = "**Password length must be atleast 8 characters";
              message.style.color = "red";
              return false;
            }

                else if(regexp2.test(pwd.value)){
                 return true;
                }
    

                    else {
                        message.innerHTML = "**Password length must be atleast 8 characters, at least one uppercase, and one lower case, must contain at least one number";
                        message.style.color = "red";
                        return false;
                    }
        }
        else {
          error.innerHTML = "Invalid username (must have 5 characters minimum, only (.,-,_) special characters are allowed)";
          error.style.color = "red";
          return false;
        }
    
    }
    else{
        display.innerHTML = "**Fields cannot be empty";
        display.style.color = "red";
        return false;
    }
}

