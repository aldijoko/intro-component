const iconError = document.getElementsByClassName('icon-error');
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const textError = document.getElementsByClassName("text-error");
const input = document.getElementsByTagName("input");

const validationForm = (e) => {
    for(i = 0; i<4;i++){
        input[i].classList.remove("icon-error");
        textError[i].style.display = "none";

        if(!email.validity.valid){
            textError[2].style.display = "block";
            email.classList.add("icon-error");
            e.preventDefault();
        }

        if((!input.type != "email" || input.type != "submit") && input[i].value == ""){
            textError[i].style.display = "block";
            input[i].classList.add("icon-error");
            e.preventDefault();
        }
    }
}

form.addEventListener("submit", validationForm);