let table = document.createElement("table");
document.body.append(table);
table.setAttribute("border", "1");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);

let th1 = document.createElement("th");
thead.appendChild(th1);
th1.textContent = "S.NO";
let th2 = document.createElement("th");
thead.appendChild(th2);
th2.textContent = "Employee Name";
let th3 = document.createElement("th");
thead.appendChild(th3);
th3.textContent = "Employee Location";
let th4 = document.createElement("th");
thead.appendChild(th4);
th4.textContent = "Delete";

let num = prompt("Enter the number of Employee:");

for (i = 1; i <= num; i++) {
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (j = 1; j <= 4; j++) {
    let td = document.createElement("td");
    if (j == 1) {
      tr.appendChild(td);
      td.setAttribute("class", "sno")
      td.textContent = i;
    } else if (j == 2) {
      let empname = prompt("Enter Employee Name:");
      if (empname != "") {
        tr.appendChild(td);
        td.textContent = empname;
      } else {
        j--;
      }
    } else if (j == 3) {
      let emploc = prompt("Enter Employee Location:");
      if (emploc != "") {
        tr.appendChild(td);
        td.textContent = emploc;
      } else {
        j--;
      }
    } else if (j == 4) {
      tr.appendChild(td);
      let delBtn = document.createElement("button");
      td.appendChild(delBtn);
      delBtn.textContent = "Delete";
      delBtn.setAttribute("id", `btn${i}`);
    }
  }
  
  let btn = document.getElementById(`btn${i}`);
  btn.addEventListener("click", (e) => {
    trg = e.target.parentElement;
    trg.parentElement.remove();
    for(i=0;i<num;i++){
      let sno = document.getElementsByClassName("sno")
      if(sno[i] != undefined){
        sno[i].textContent = i+1
      }
    }
  });
}