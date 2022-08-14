// temporary moti made problem 
function lick() {
    let tring = "";
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    for (let i = 2; i <= a; i++) {
        for (let k = 1; k <= b; k++) {
            tring += `${i == 2 && k == 1 ? "+" : "-"} ${i ** k} `;
        }
    }
    console.log(tring);
}

// solved