let author = document.getElementById("author");
let about= document.getElementById("about");
let error= document.getElementById("error");
let error1= document.getElementById("error1");
let display= document.getElementById("display");

function validate(){

    // let regexp = /^\w+$/;
    let regexp = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*$/

    if (author.value.trim() != "" && about.value.trim() != ""){

        if(regexp.test(author.value)){
            error.innerHTML="";
            if(about.value.length>=150){
                error1.innerHTML = "";
                return true;
            }
            else{
                error1.innerHTML = "Content should have minimum 150 characters";
                error1.style.color= "red";
                return false;
            }
            
        }
        else{
            error.innerHTML = "Invalid Author's name";
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

