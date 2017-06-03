let equation = []
let display ;

const reset = () => {
  equation = [];
  display.innerText = ''
}

const calculate = () => {
  const expression = equation.join('');
  const answer = new Function("return " + expression)();
  display.innerText = answer;
  equation = [answer];
}

const clearDisplay = () => display.innerText = '';

const addDisplay = (val) => {
  display = document.getElementById('display');
  isFinite(val) ? display.innerText += val : clearDisplay();
};

const addEquation = (val) => {
  if (isFinite(val)) {
    equation.push(val);
  }else if (isFinite(equation[equation.length - 1])) {
    equation.push(val);
  };
};

const getValue = (event) => {
  const val = event.target.innerText;
  addEquation(val);
  addDisplay(val);
};

const addEventListener = () => {
  const numbers = [...document.getElementsByClassName('input')];
  const enter = document.getElementById('enter');
  const clear = document.querySelector('.clear');
  enter.addEventListener('click', calculate);
  numbers.map(number => {
    number.addEventListener('click', getValue)
  });
  clear.addEventListener('click', reset);
};

window.onload = () => addEventListener();
