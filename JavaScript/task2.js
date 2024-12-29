let cHeader = document.createElement("header")
let cNav = document.createElement("nav")
let cMain = document.createElement("main")
let div1 = document.createElement("div")
let div2 = document.createElement("div")
let cFooter = document.createElement("footer")
let home = document.createElement("a")
let about = document.createElement("a")
let contact = document.createElement("a")
let register = document.createElement("a")

cHeader.setAttribute("id", "header")
cNav.setAttribute("id", "navigation")
cMain.setAttribute("id", "main")
div1.setAttribute("id", "div1")
div2.setAttribute("id", "div2")
cFooter.setAttribute("id", "footer")

document.body.append(cHeader,cNav,cMain,cFooter)
cMain.appendChild(div1)
cMain.appendChild(div2)


let header = document.getElementById("header")
header.style.border = "1px solid black"
header.innerHTML = "<h1>Header</h1>"
header.style.textAlign = "center"

let nav = document.getElementById("navigation")
nav.appendChild(home)
nav.appendChild(about)
nav.appendChild(contact)
nav.appendChild(register)
nav.style.border = "1px solid black"
nav.style.textAlign = "center"
nav.style.marginTop = "10px"
home.textContent = "Home"
about.textContent = "About"
contact.textContent = "Contact"
register.textContent = "Register"
nav.style.padding = "15px"
nav.style.fontSize = "23px"
home.style.padding = "100px"
contact.style.padding = "100px"
register.style.padding = "100px"
about.style.padding = "100px"

let main = document.getElementById("main")
main.style.border = "1px solid black"
main.style.height = "53vh"
main.style.marginTop = "10px"
main.style.display = "flex"
main.style.justifyContent = "center"

let bgImg = document.getElementById("div1")
bgImg.style.width = "50%"
bgImg.style.border = "1px solid black"
bgImg.style.backgroundImage = "url('../Assets/butterfly.jpg')"
bgImg.style.backgroundSize = "cover"


let bgVid = document.getElementById("div2")
bgVid.style.width = "50%"
bgVid.style.border = "1px solid black"
bgVid.innerHTML = "<video controls loop muted autoplay height='100%' width='100%'><source src='../Assets/Anime Dance.mp4'></source></video>"

let footer = document.getElementById("footer")
footer.style.border = "1px solid black"
footer.innerHTML = "<h1>Footer</h1>"
footer.style.textAlign = "center"
footer.style.marginTop = "10px"

