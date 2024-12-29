let loginbtn = document.getElementById("loginbtn")
let signupbtn = document.getElementById("signupbtn")
let login = document.getElementById("login")
let signup = document.getElementById("signup")

loginbtn.addEventListener("click", () => {
    login.style.display = "block"
    signup.style.display = "none"
})

signupbtn.addEventListener("click", () => {
    signup.style.display = "block"
    login.style.display = "none"
})