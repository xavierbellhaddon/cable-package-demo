const checkbox = document.querySelectorAll(".package-option");
const total = document.querySelector(".total");

let runningTotal = 0;

checkbox.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      console.log("Checked");
      runningTotal += parseInt(this.value);
    } else {
      console.log("Unchecked");
      runningTotal -= parseInt(this.value)
    }
    total.innerHTML = runningTotal
  });
});
