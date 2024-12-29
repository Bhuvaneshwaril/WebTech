let list = document.createElement("ul")
document.body.append(list)
let num = prompt("Enter the number of list:")
for (i=1; i<=num;i++){
    let animals = prompt(`Enter Animal Name ${i}:`)
    let li = document.createElement("li")
    if (animals != ""){
        list.appendChild(li)
        li.textContent = animals
    }
    else{
        i--
    }
}