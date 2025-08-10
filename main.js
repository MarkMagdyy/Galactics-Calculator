function square() {
    try {
      const value = eval(display.value);
      display.value = value ** 2;
    } catch {
      display.value = 'Error';
    }
  }

const display = document.getElementById("display");

function updateDisplay() {
    display.scrollLeft = display.scrollWidth;
}

function appendToDisplay(value) {
  display.value += value;
  updateDisplay()
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  display.value = display.value.replace(/÷/g, "/")
  display.value = display.value.replace(/x/g, "*");   // Convert × to * before evaluating
  display.value = eval(display.value);

  try {
    display.value = eval(display.value);
  }  catch {
    display.value = 'Error';
  }
  
}
