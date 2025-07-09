function square() {
    try {
      const value = eval(display.value);
      display.value = value ** 2;
    } catch {
      display.value = 'Error';
    }
  }

  const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch {
    display.value = 'Error';
  }
}
