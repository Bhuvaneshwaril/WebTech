let addNum = document.getElementById("add");
let subNum = document.getElementById("sub");
let divNum = document.getElementById("div");
let container = document.getElementById("container")

addNum.addEventListener("click", () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = Number(num1) + Number(num2);
  let result = document.getElementById("result");
  result.textContent = `Result is: ${num3}`;
  container.style.display = "flex"
});

subNum.addEventListener("click", () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = Number(num1) - Number(num2);
  let result = document.getElementById("result");
  result.textContent = `Result is: ${num3}`;
  container.style.display = "flex"
});

divNum.addEventListener("click", () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = Number(num1) / Number(num2);
  let result = document.getElementById("result");
  result.textContent = `Result is: ${num3}`;
  container.style.display = "flex"
});

let again = document.getElementById("again")
again.addEventListener("click", () => {
  container.style.display = "none"
  location.reload()
})