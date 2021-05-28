let title = document.getElementById("title");
let author = document.getElementById("author");
let genre = document.getElementById("genre");
let error = document.getElementById("error");
let titleError = document.getElementById("titleError");
let authorError = document.getElementById("authorError");
let genreError = document.getElementById("genreError");

function validate(){

    // let regexp = /^\w+$/;
    let regexp = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*$/

    if (title.value.trim() != "" && author.value.trim() != "" && genre.value.trim() != ""){
        if(regexp.test(title.value)){
            titleError.innerHTML = "";
            if(regexp.test(author.value)){
                authorError.innerHTML = "";
                if(regexp.test(genre.value)){
                    genreError.innerHTML = "";
                    return true;
                }
                else{
                    genreError.innerHTML = "Genre invalid";
                    genreError.style.color = "red";
                    return false;
                }
            }
            else{
                authorError.innerHTML = "Invalid Author's name";
                authorError.style.color = "red";
                return false;
            }            
        }
        else{
            titleError.innerHTML = "Title invalid";
            titleError.style.color = "red";
            return false;
        }
           
    }
    else {
        error.innerHTML = "**Fields cannot be empty";
        error.style.color = "red";
        return false;
    }
}