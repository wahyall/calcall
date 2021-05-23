const numberSatu = document.querySelector('#number-1');
const bilanganSatu = document.querySelector('.bilangan-1');
const idBilanganSatu = document.querySelector('.bilangan .form-1 .code');

const numberDua = document.querySelector('#number-2');
const bilanganDua = document.querySelector('.bilangan-2');
const idBilanganDua = document.querySelector('.bilangan .form-2 .code');

// Fired Event
function focusOnSatu() {
   bilanganSatu.setAttribute('focus', 'focus');
   bilanganDua.removeAttribute('focus');
   bilanganSatu.parentElement.style.borderBottom = '1px solid var(--borderOn)';
   bilanganDua.parentElement.style.borderBottom = '2px solid var(--borderOff)';
}

function focusOnDua() {
   bilanganDua.setAttribute('focus', 'focus');
   bilanganSatu.removeAttribute('focus');
   bilanganDua.parentElement.style.borderBottom = '1px solid var(--borderOn)';
   bilanganSatu.parentElement.style.borderBottom = '2px solid var(--borderOff)';
}

function checkKeyboardSatu() {
   if (numberSatu.value == 'HEX') {
      document.querySelector('.hex-button').classList.add('open');
      document.querySelector('.oct-button').classList.remove('open');
      document.querySelector('.bin-button').classList.remove('open');
   } else if (numberSatu.value == 'OCT') {
      document.querySelector('.oct-button').classList.add('open');
      document.querySelector('.hex-button').classList.remove('open');
      document.querySelector('.bin-button').classList.remove('open');
   } else if (numberSatu.value == 'BIN') {
      document.querySelector('.bin-button').classList.add('open');
      document.querySelector('.hex-button').classList.remove('open');
      document.querySelector('.oct-button').classList.remove('open');
   } else {
      document.querySelector('.hex-button').classList.remove('open');
      document.querySelector('.oct-button').classList.remove('open');
      document.querySelector('.bin-button').classList.remove('open');
   }
}

function checkKeyboardDua() {
   if (numberDua.value == 'HEX') {
      document.querySelector('.hex-button').classList.add('open');
      document.querySelector('.oct-button').classList.remove('open');
      document.querySelector('.bin-button').classList.remove('open');
   } else if (numberDua.value == 'OCT') {
      document.querySelector('.oct-button').classList.add('open');
      document.querySelector('.hex-button').classList.remove('open');
      document.querySelector('.bin-button').classList.remove('open');
   } else if (numberDua.value == 'BIN') {
      document.querySelector('.bin-button').classList.add('open');
      document.querySelector('.hex-button').classList.remove('open');
      document.querySelector('.oct-button').classList.remove('open');
   } else {
      document.querySelector('.hex-button').classList.remove('open');
      document.querySelector('.oct-button').classList.remove('open');
      document.querySelector('.bin-button').classList.remove('open');
   }
}

function funNumberSatu() {
   const rootDecimal = convertDecimalTo(numberSatu.value, bilanganSatu.value);
   const result = convertDecimalFrom(numberDua.value, rootDecimal);
   bilanganDua.value = result;
   focusOnSatu();
   checkKeyboardSatu();
   idBilanganSatu.innerHTML = numberSatu.value;
};

function funNumberDua() {
   const rootDecimal = convertDecimalTo(numberDua.value, bilanganDua.value);
   const result = convertDecimalFrom(numberSatu.value, rootDecimal);
   bilanganSatu.value = result;
   focusOnDua();
   checkKeyboardDua();
   idBilanganDua.innerHTML = numberDua.value;
};

function funValueBilanganSatu() {
   if (bilanganSatu.value.length == 0) {
      bilanganSatu.value = 0;
   }
   bilanganSatu.value = bilanganSatu.value;
   const rootDecimal = convertDecimalTo(numberSatu.value, bilanganSatu.value);
   const result = convertDecimalFrom(numberDua.value, rootDecimal);
   bilanganDua.value = result;
};

function funValueBilanganDua() {
   if (bilanganDua.value.length == 0) {
      bilanganDua.value = 0;
   }
   bilanganDua.value = bilanganDua.value;
   const rootDecimal = convertDecimalTo(numberDua.value, bilanganDua.value);
   const result = convertDecimalFrom(numberSatu.value, rootDecimal);
   bilanganSatu.value = result;
};

numberSatu.dispatchEvent(new Event('change'));
numberDua.dispatchEvent(new Event('change'));


// Button Number 
bilanganSatu.parentElement.addEventListener('click', function () {
   focusOnSatu();
   checkKeyboardSatu();
});

bilanganDua.parentElement.addEventListener('click', function () {
   focusOnDua();
   checkKeyboardDua();
});


// Decimal Buttons
const buttonsNumber = document.querySelectorAll('.bilangan .button-bilangan span');
buttonsNumber.forEach(function (button) {
   button.addEventListener('click', function () {
      if (bilanganSatu.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            bilanganSatu.value = bilanganSatu.value.substring(0, bilanganSatu.value.length - 1);
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'c') {
            bilanganSatu.value = '0';
            funValueBilanganSatu();
         } else {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = button.getAttribute('value');
            } else {
               bilanganSatu.value += button.getAttribute('value');
            }
            funValueBilanganSatu();
         }
      } else if (bilanganDua.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            bilanganDua.value = bilanganDua.value.substring(0, bilanganDua.value.length - 1);
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'c') {
            bilanganDua.value = '0';
            funValueBilanganDua();
         } else {
            if (bilanganDua.value == 0) {
               bilanganDua.value = button.getAttribute('value');
            } else {
               bilanganDua.value += button.getAttribute('value');
            }
            funValueBilanganDua();
         }
      }
   })
});


// Hexadecimal Buttons
const hexButtons = document.querySelectorAll('.hex-button span');
hexButtons.forEach(function (button) {
   button.addEventListener('click', function () {
      if (bilanganSatu.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            bilanganSatu.value = bilanganSatu.value.substring(0, bilanganSatu.value.length - 1);
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'cl') {
            bilanganSatu.value = '0';
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'A') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'A';
            } else {
               bilanganSatu.value += 'A';
            }
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'B') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'B';
            } else {
               bilanganSatu.value += 'B';
            }
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'C') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'C';
            } else {
               bilanganSatu.value += 'C';
            }
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'D') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'D';
            } else {
               bilanganSatu.value += 'D';
            }
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'E') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'E';
            } else {
               bilanganSatu.value += 'E';
            }
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'F') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'F';
            } else {
               bilanganSatu.value += 'F';
            }
            funValueBilanganSatu();
         } else {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = button.getAttribute('value');
            } else {
               bilanganSatu.value += button.getAttribute('value');
            }
            funValueBilanganSatu();
         }
      } else if (bilanganDua.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            bilanganDua.value = bilanganDua.value.substring(0, bilanganDua.value.length - 1);
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'cl') {
            bilanganDua.value = '0';
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'A') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'A';
            } else {
               bilanganDua.value += 'A';
            }
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'B') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'B';
            } else {
               bilanganDua.value += 'B';
            }
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'C') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'C';
            } else {
               bilanganDua.value += 'C';
            }
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'D') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'D';
            } else {
               bilanganDua.value += 'D';
            }
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'E') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'E';
            } else {
               bilanganDua.value += 'E';
            }
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'F') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'F';
            } else {
               bilanganDua.value += 'F';
            }
            funValueBilanganDua();
         } else {
            if (bilanganDua.value == 0) {
               bilanganDua.value = button.getAttribute('value');
            } else {
               bilanganDua.value += button.getAttribute('value');
            }
            funValueBilanganDua();
         }
      }
   })
});


// Octal Buttons
const octButtons = document.querySelectorAll('.oct-button span');
octButtons.forEach(function (button) {
   button.addEventListener('click', function () {
      if (bilanganSatu.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            bilanganSatu.value = bilanganSatu.value.substring(0, bilanganSatu.value.length - 1);
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'cl') {
            bilanganSatu.value = '0';
            funValueBilanganSatu();
         } else {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = button.getAttribute('value');
            } else {
               bilanganSatu.value += button.getAttribute('value');
            }
            funValueBilanganSatu();
         }
      } else if (bilanganDua.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            bilanganDua.value = bilanganDua.value.substring(0, bilanganDua.value.length - 1);
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'cl') {
            bilanganDua.value = '0';
            funValueBilanganDua();
         } else {
            if (bilanganDua.value == 0) {
               bilanganDua.value = button.getAttribute('value');
            } else {
               bilanganDua.value += button.getAttribute('value');
            }
            funValueBilanganDua();
         }
      }
   })
});


// Binary Buttons
const binButtons = document.querySelectorAll('.bin-button span');
binButtons.forEach(function (button) {
   button.addEventListener('click', function () {
      if (bilanganSatu.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            bilanganSatu.value = bilanganSatu.value.substring(0, bilanganSatu.value.length - 1);
            funValueBilanganSatu();
         } else if (button.getAttribute('value') == 'cl') {
            bilanganSatu.value = '0';
            funValueBilanganSatu();
         } else {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = button.getAttribute('value');
            } else {
               bilanganSatu.value += button.getAttribute('value');
            }
            funValueBilanganSatu();
         }
      } else if (bilanganDua.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            bilanganDua.value = bilanganDua.value.substring(0, bilanganDua.value.length - 1);
            funValueBilanganDua();
         } else if (button.getAttribute('value') == 'cl') {
            bilanganDua.value = '0';
            funValueBilanganDua();
         } else {
            if (bilanganDua.value == 0) {
               bilanganDua.value = button.getAttribute('value');
            } else {
               bilanganDua.value += button.getAttribute('value');
            }
            funValueBilanganDua();
         }
      }
   })
});



// With Keyboard Input

// Decimal Keyboard
document.body.addEventListener('keyup', function (event) {
   if (document.querySelector('.bilangan').classList.contains('open') == true && document.querySelector('.hex-button').classList.contains('open') == false && document.querySelector('.oct-button').classList.contains('open') == false && document.querySelector('.bin-button').classList.contains('open') == false) {
      if (bilanganSatu.hasAttribute('focus') == true) {
         for (let i = 0; i <= 9; i++) {
            if (event.key == i) {
               if (bilanganSatu.value == 0) {
                  bilanganSatu.value = event.key;
               } else {
                  bilanganSatu.value += event.key;
               }
               funValueBilanganSatu();
            }
         }
         if (event.key == 'Control') {
            bilanganSatu.value = 0;
            funValueBilanganSatu();
         } else if (event.key == 'Backspace') {
            bilanganSatu.value = bilanganSatu.value.slice(0, -1);
            funValueBilanganSatu();
         }
      } else if (bilanganDua.hasAttribute('focus') == true) {
         for (let i = 0; i <= 9; i++) {
            if (event.key == i) {
               if (bilanganDua.value == 0) {
                  bilanganDua.value = event.key;
               } else {
                  bilanganDua.value += event.key;
               }
               funValueBilanganDua();
            }
         }
         if (event.key == 'Control') {
            bilanganDua.value = 0;
            funValueBilanganDua();
         } else if (event.key == 'Backspace') {
            bilanganDua.value = bilanganDua.value.slice(0, -1);
            funValueBilanganDua();
         }
      }
   }
});


// Hexadecimal Keyboard 
document.body.addEventListener('keydown', function (event) {
   if (document.querySelector('.hex-button').classList.contains('open') == true) {
      if (bilanganSatu.hasAttribute('focus') == true) {
         for (let i = 0; i <= 9; i++) {
            if (event.key == i) {
               if (bilanganSatu.value == 0) {
                  bilanganSatu.value = event.key;
               } else {
                  bilanganSatu.value += event.key;
               }
               funValueBilanganSatu();
            }
         }
         if (event.key == 'Control') {
            bilanganSatu.value = 0;
            funValueBilanganSatu();
         } else if (event.key == 'Backspace') {
            bilanganSatu.value = bilanganSatu.value.slice(0, -1);
            funValueBilanganSatu();
         } else if (event.key == 'a' || event.key == 'A') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'A';
            } else {
               bilanganSatu.value += 'A';
            }
            funValueBilanganSatu();
         } else if (event.key == 'b' || event.key == 'B') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'B';
            } else {
               bilanganSatu.value += 'B';
            }
            funValueBilanganSatu();
         } else if (event.key == 'c' || event.key == 'C') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'C';
            } else {
               bilanganSatu.value += 'C';
            }
            funValueBilanganSatu();
         } else if (event.key == 'd' || event.key == 'D') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'D';
            } else {
               bilanganSatu.value += 'D';
            }
            funValueBilanganSatu();
         } else if (event.key == 'e' || event.key == 'E') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'E';
            } else {
               bilanganSatu.value += 'E';
            }
            funValueBilanganSatu();
         } else if (event.key == 'f' || event.key == 'F') {
            if (bilanganSatu.value == 0) {
               bilanganSatu.value = 'F';
            } else {
               bilanganSatu.value += 'F';
            }
            funValueBilanganSatu();
         }
      } else if (bilanganDua.hasAttribute('focus') == true) {
         for (let i = 0; i <= 9; i++) {
            if (event.key == i) {
               if (bilanganDua.value == 0) {
                  bilanganDua.value = event.key;
               } else {
                  bilanganDua.value += event.key;
               }
               funValueBilanganDua();
            }
         }
         if (event.key == 'Control') {
            bilanganDua.value = 0;
            funValueBilanganDua();
         } else if (event.key == 'Backspace') {
            bilanganDua.value = bilanganDua.value.slice(0, -1);
            funValueBilanganDua();
         } else if (event.key == 'a' || event.key == 'A') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'A';
            } else {
               bilanganDua.value += 'A';
            }
            funValueBilanganDua();
         } else if (event.key == 'b' || event.key == 'B') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'B';
            } else {
               bilanganDua.value += 'B';
            }
            funValueBilanganDua();
         } else if (event.key == 'c' || event.key == 'C') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'C';
            } else {
               bilanganDua.value += 'C';
            }
            funValueBilanganDua();
         } else if (event.key == 'd' || event.key == 'D') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'D';
            } else {
               bilanganDua.value += 'D';
            }
            funValueBilanganDua();
         } else if (event.key == 'e' || event.key == 'E') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'E';
            } else {
               bilanganDua.value += 'E';
            }
            funValueBilanganDua();
         } else if (event.key == 'f' || event.key == 'F') {
            if (bilanganDua.value == 0) {
               bilanganDua.value = 'F';
            } else {
               bilanganDua.value += 'F';
            }
            funValueBilanganDua();
         }
      }
   }
});


// Octal Keyboard
document.body.addEventListener('keyup', function (event) {
   if (document.querySelector('.oct-button').classList.contains('open') == true) {
      if (bilanganSatu.hasAttribute('focus') == true) {
         for (let i = 0; i <= 7; i++) {
            if (event.key == i) {
               if (bilanganSatu.value == 0) {
                  bilanganSatu.value = event.key;
               } else {
                  bilanganSatu.value += event.key;
               }
               funValueBilanganSatu();
            }
         }
         if (event.key == 'Control') {
            bilanganSatu.value = 0;
            funValueBilanganSatu();
         } else if (event.key == 'Backspace') {
            bilanganSatu.value = bilanganSatu.value.slice(0, -1);
            funValueBilanganSatu();
         }
      } else if (bilanganDua.hasAttribute('focus') == true) {
         for (let i = 0; i <= 7; i++) {
            if (event.key == i) {
               if (bilanganDua.value == 0) {
                  bilanganDua.value = event.key;
               } else {
                  bilanganDua.value += event.key;
               }
               funValueBilanganDua();
            }
         }
         if (event.key == 'Control') {
            bilanganDua.value = 0;
            funValueBilanganDua();
         } else if (event.key == 'Backspace') {
            bilanganDua.value = bilanganDua.value.slice(0, -1);
            funValueBilanganDua();
         }
      }
   }
});


// Binary Keyboard
document.body.addEventListener('keyup', function (event) {
   if (document.querySelector('.bin-button').classList.contains('open') == true) {
      if (bilanganSatu.hasAttribute('focus') == true) {
         for (let i = 0; i <= 1; i++) {
            if (event.key == i) {
               if (bilanganSatu.value == 0) {
                  bilanganSatu.value = event.key;
               } else {
                  bilanganSatu.value += event.key;
               }
               funValueBilanganSatu();
            }
         }
         if (event.key == 'Control') {
            bilanganSatu.value = 0;
            funValueBilanganSatu();
         } else if (event.key == 'Backspace') {
            bilanganSatu.value = bilanganSatu.value.slice(0, -1);
            funValueBilanganSatu();
         }
      } else if (bilanganDua.hasAttribute('focus') == true) {
         for (let i = 0; i <= 1; i++) {
            if (event.key == i) {
               if (bilanganDua.value == 0) {
                  bilanganDua.value = event.key;
               } else {
                  bilanganDua.value += event.key;
               }
               funValueBilanganDua();
            }
         }
         if (event.key == 'Control') {
            bilanganDua.value = 0;
            funValueBilanganDua();
         } else if (event.key == 'Backspace') {
            bilanganDua.value = bilanganDua.value.slice(0, -1);
            funValueBilanganDua();
         }
      }
   }
});