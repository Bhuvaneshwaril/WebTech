let add = document.getElementById("add");
let addData = document.getElementById("data");
let count = 1
add.addEventListener("click", () => {
  let cname = document.getElementById("cname").value;
  let cbno = document.getElementById("cbno").value;
  let cin = document.getElementById("cin").value;
  let cout = document.getElementById("cout").value;
  let tr = document.createElement("tr");
  for (i = 1; i <= 6; i++) {
    if(cname == "" || cbno == "" || cin == "" || cout == ""){
      break
    }
    addData.appendChild(tr);
    if (i == 1) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = count;
      count++
     }
     else if (i == 2) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = cname;
     } else if (i == 3) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = cbno;
    } else if (i == 4) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = cin;
    } else if (i == 5) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = cout;
    }
    else if(i==6){
      let button=document.createElement("button")
      tr.appendChild(button)
      button.textContent="delete"

      button.addEventListener("click",(element)=>{
        button.parentElement.currentEement.remove();
      })
    }
   }

  document.getElementById("cname").value = "";
  document.getElementById("cbno").value = "";
  document.getElementById("cin").value = "";
  document.getElementById("cout").value = "";

  
});