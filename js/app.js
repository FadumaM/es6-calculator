let equation = []
let display;
let val = 0;

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

const addEquation = () => {
  if (isFinite(val) || isFinite(equation[equation.length - 1])) {
    equation.push(val);
  }
};

const addDisplay = () => {
  val = event.target.innerText;
  display = document.getElementById('display');
  isFinite(val) ? display.innerText += val : display.innerText = '';
  addEquation();
};

const addEventListener = () => {
  const numbers = [...document.getElementsByClassName('input')];
  const enter = document.getElementById('enter');
  const clear = document.querySelector('.clear');
  enter.addEventListener('click', calculate);
  numbers.map(number => {
    number.addEventListener('click', addDisplay)
  });
  clear.addEventListener('click', reset);
};

window.onload = () => addEventListener();
