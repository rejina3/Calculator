const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const val = button.innerText;

    if (val === "C") {
      input.value = 0;
    } else if (val === "Del") {
      input.value = input.value.slice(0, -1);
      if (input.value == "") {
        input.value = 0;
      }
    } else if (val === "=") {
      try {
        input.value = eval(input.value.replace("x", "*")); 
      } catch {
        input.value = "Error";
      }
    } else if (input.value == 0) {
      input.value = val;
    } else if (!["C", "Del", "="].includes(val)) {
      input.value += val;
    }
  });
});
