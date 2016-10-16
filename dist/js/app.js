"use strict";

window.onload = function () {
  var keys = document.getElementsByTagName("li");
  var screen = document.getElementById("screen");
  var input = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      value.addEventListener("click", start);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  function start() {
    var decimal = void 0;
    var value = this.innerHTML;
    if (isNaN(value)) {
      switch (value) {
        case ".":
          input.map(function () {});
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
};