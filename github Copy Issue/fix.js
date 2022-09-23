document
  .querySelector('[data-test-selector="remote-clipboard-copy"]')
  .addEventListener("click", f);
function f() {
  navigator.clipboard.writeText(
    Array.from(document.querySelector("tbody").querySelectorAll("td"))
      .map((td, i) => (i % 2 ? td.innerText : "\n"))
      .join("")
  );
}
