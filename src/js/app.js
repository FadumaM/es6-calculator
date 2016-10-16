window.onload = function() {
  const keys = document.getElementsByTagName("li");
  let screen = document.getElementById("screen");
  let input = [];

  for (let value of keys) {
    value.addEventListener("click", start)
  }



  function start() {
    let decimal
    let value = this.innerHTML;
    if (isNaN(value)) {
      switch (value) {
        case ".":
          input.map(function() {

          })
          break;
        case "C":
          clear();
          break;
        case "+":
          console.log("+");
          break;
        case "-":
          console.log("-");
          break;
        case "x":
          console.log("x");
          break;
        case "÷":
          console.log("÷");
          break;
      }
    } else {
      screen.innerHTML = input;
      input.push(value);
      console.log(input);
    }

  }

  function clear() {
    input = [];
    console.log(input);
    screen.innerHTML = "";
  }

  function calculate() {
    // switch (value) {
    //   case "C":
    //     clear();
    //     break;
    //   case "+":
    //     console.log("+");
    //     break;
    //   case "-":
    //     console.log("-");
    //     break;
    //   case "x":
    //     console.log("x");
    //     break;
    //   case "÷":
    //     console.log("÷");
    //     break;
    //   default:
    //     screen.innerHTML = value;
    //     input.push(value);
    //     console.log(input);
    //
    // }
  }

}
