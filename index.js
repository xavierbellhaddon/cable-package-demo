const checkbox = document.querySelectorAll(".package-option");

checkbox.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      console.log("Checked");
    } else {
      console.log("Unchecked");
    }
  });
});
