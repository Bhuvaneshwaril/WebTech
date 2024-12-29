let div = document.createElement("div")

div.setAttribute("id", "mydiv")

document.body.append(div)

let h1 = document.createElement("h1")
let h2 = document.createElement("h1")

div.appendChild(h1)
div.appendChild(h2)

h1.id = "heading1"
h2.setAttribute("id", "heading2")

let mydiv = document.getElementById("mydiv")
let ename = document.getElementById("heading1")
let loc = document.getElementById("heading2")
mydiv.style.border = "1px solid black"

let a = prompt("Enter your name:")
let b = prompt("Enter your location:")

ename.textContent = `Ename: ${a}`
loc.textContent = `Location: ${b}`