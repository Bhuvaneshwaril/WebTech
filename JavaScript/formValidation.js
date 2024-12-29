let username = document.getElementById("username")
let mail = document.getElementById("mail")
let newpass = document.getElementById("newpass")
let cpass = document.getElementById("cpass")

let emptyValidation = document.getElementById("emptyValidation")
let passValidation1 = document.getElementById("passValidation1")
let passValidation2 = document.getElementById("passValidation2")
let passValidation3 = document.getElementById("passValidation3")


let neye1 = document.getElementById("neye1")
let neye2 = document.getElementById("neye2")
let ceye1 = document.getElementById("ceye1")
let ceye2 = document.getElementById("ceye2")


newpass.addEventListener("focusin", () => {
    userValue = username.value
    if(userValue == ""){
        emptyValidation.style.display = "block"
    }
})

username.addEventListener("keypress", () => {
    userValue = username.value
    if(userValue != ""){
        emptyValidation.style.display = "none"
    }
})

cpass.addEventListener("focusout", () => { 
    if(newpass.value == "" && cpass.value ==""){
        passValidation1.style.display = "none"
        passValidation2.style.display = "none"
    }
    else if(newpass.value == cpass.value){
        passValidation2.style.display = "block"
        passValidation1.style.display = "none"
    }
    else if(newpass.value != cpass.value){
        passValidation1.style.display = "block"
        passValidation2.style.display = "none"
    }
})

newpass.addEventListener("focusout", () => {
    pwd = Number(newpass.value)
    if(String(pwd) == "NaN"){
        passValidation3.style.display = "block"
    }
    else{
        passValidation3.style.display = "none"
    }
})


newpass.addEventListener("focusin", () => {
    neye2.style.visibility = "visible"
})

cpass.addEventListener("focusin", () => {
    ceye2.style.visibility = "visible"
})

neye2.addEventListener("click", () => {
    neye1.style.visibility = "visible"
    neye2.style.visibility = "hidden"
    newpass.removeAttribute("type")
    newpass.setAttribute("type", "text")
})

neye1.addEventListener("click", () => {
    neye1.style.visibility = "hidden"
    neye2.style.visibility = "visible"
    newpass.removeAttribute("type")
    newpass.setAttribute("type", "password")
})

ceye2.addEventListener("click", () => {
    ceye1.style.visibility = "visible"
    ceye2.style.visibility = "hidden"
    cpass.removeAttribute("type")
    cpass.setAttribute("type", "text")
})

ceye1.addEventListener("click", () => {
    ceye1.style.visibility = "hidden"
    ceye2.style.visibility = "visible"
    cpass.removeAttribute("type")
    cpass.setAttribute("type", "password")
})