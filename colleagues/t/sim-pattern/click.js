document.querySelector("button").addEventListener("click", click);
function click() {
  let string = "";
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  for (let i = 2; i <= a; i++) {
    for (let k = 1; k <= b; k++) {
      string += `${i == 2 && k == 1 ? "+" : "-"} ${i ** k} `;
    }
  }
  console.log(tring);
}
