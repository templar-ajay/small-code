document
  .querySelector('[data-test-selector="remote-clipboard-copy"]')
  .addEventListener("click", f);
async function f() {
  const x = Array.from(document.querySelector("tbody").querySelectorAll("td"))
    .map((td, i) => (i % 2 ? td.innerText : "\n"))
    .join("");
  setTimeout(() => {
    window.navigator.clipboard.writeText(x);
    console.log(`code copied to clipboard`);
  }, 500);
}
