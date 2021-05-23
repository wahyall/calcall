const temperatureSatu = document.querySelector('#temperature-1');
const suhuSatu = document.querySelector('.suhu-1');
const idSuhuSatu = document.querySelector('.suhu .form-1 .code');

const temperatureDua = document.querySelector('#temperature-2');
const suhuDua = document.querySelector('.suhu-2');
const idSuhuDua = document.querySelector('.suhu .form-2 .code');

// Fired Event
function funTemperatureSatu() {
   const rootCelcius = convertCelciusTo(temperatureSatu.value, suhuSatu.value);
   const result = convertCelciusFrom(temperatureDua.value, rootCelcius);
   suhuDua.value = result;
   if (temperatureSatu.value == 'K') {
      idSuhuSatu.innerHTML = temperatureSatu.value;
   } else {
      idSuhuSatu.innerHTML = '°' + temperatureSatu.value;
   }
};

function funTemperatureDua() {
   const rootCelcius = convertCelciusTo(temperatureDua.value, suhuDua.value);
   const result = convertCelciusFrom(temperatureSatu.value, rootCelcius);
   suhuSatu.value = result;
   if (temperatureDua.value == 'K') {
      idSuhuDua.innerHTML = temperatureDua.value;
   } else {
      idSuhuDua.innerHTML = '°' + temperatureDua.value;
   }
};

function funValueSuhuSatu() {
   if (suhuSatu.value.length == 0) {
      suhuSatu.value = 0;
   }
   suhuSatu.value = parseFloat(suhuSatu.value);
   const rootCelcius = convertCelciusTo(temperatureSatu.value, suhuSatu.value);
   const result = convertCelciusFrom(temperatureDua.value, rootCelcius);
   suhuDua.value = result;
};

function funValueSuhuDua() {
   if (suhuDua.value.length == 0) {
      suhuDua.value = 0;
   }
   suhuDua.value = parseFloat(suhuDua.value);
   const rootCelcius = convertCelciusTo(temperatureDua.value, suhuDua.value);
   const result = convertCelciusFrom(temperatureSatu.value, rootCelcius);
   suhuSatu.value = result;
};

temperatureSatu.dispatchEvent(new Event('change'));
temperatureDua.dispatchEvent(new Event('change'));


// Button Number 
suhuSatu.parentElement.addEventListener('click', function () {
   suhuSatu.setAttribute('focus', 'focus');
   suhuDua.removeAttribute('focus');
   suhuSatu.parentElement.style.borderBottom = '1px solid var(--borderOn)';
   suhuDua.parentElement.style.borderBottom = '2px solid var(--borderOff)';
});

suhuDua.parentElement.addEventListener('click', function () {
   suhuDua.setAttribute('focus', 'focus');
   suhuSatu.removeAttribute('focus');
   suhuDua.parentElement.style.borderBottom = '1px solid var(--borderOn)';
   suhuSatu.parentElement.style.borderBottom = '2px solid var(--borderOff)';
});

const buttonstemperature = document.querySelectorAll('.suhu .button-suhu span');
buttonstemperature.forEach(function (button) {
   button.addEventListener('click', function () {
      if (suhuSatu.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            if (suhuSatu.value < 0 && suhuSatu.value.length == 2) {
               suhuSatu.value = '0';
               funValueSuhuSatu();
            }

            if (suhuSatu.value.indexOf('.') != -1) {
               suhuSatu.value = suhuSatu.value.substring(0, suhuSatu.value.length - 1);
            } else {
               suhuSatu.value = suhuSatu.value.substring(0, suhuSatu.value.length - 1);
               funValueSuhuSatu();
            }
         } else if (button.getAttribute('value') == '.') {
            suhuSatu.value += '.';
         } else if (button.getAttribute('value') == 'c') {
            suhuSatu.value = '0';
            funValueSuhuSatu();
         } else if (button.getAttribute('value') == 'pm') {
            suhuSatu.value *= -1;
            funValueSuhuSatu();
         } else if (button.getAttribute('value') == '0') {
            if (suhuSatu.hasAttribute('focus') == true) {
               if (suhuSatu.value.indexOf('.') != -1) {
                  suhuSatu.value += '0';
               } else {
                  suhuSatu.value += '0';
                  funValueSuhuSatu();
               }
            } else if (suhuDua.hasAttribute('focus') == true) {
               if (suhuSatu.value.indexOf('.') != -1) {
                  suhuSatu.value += '0';
               } else {
                  suhuSatu.value += '0';
                  funValueSuhuSatu();
               }
            }
         } else {
            suhuSatu.value = parseFloat(suhuSatu.value += button.getAttribute('value'));
            funValueSuhuSatu();
         }
      } else if (suhuDua.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            if (suhuDua.value < 0 && suhuDua.value.length == 2) {
               suhuDua.value = '0';
               funValueSuhuDua();
            }

            if (suhuDua.value.indexOf('.') != -1) {
               suhuDua.value = suhuDua.value.substring(0, suhuDua.value.length - 1);
            } else {
               suhuDua.value = suhuDua.value.substring(0, suhuDua.value.length - 1);
               funValueSuhuDua();
            }
         } else if (button.getAttribute('value') == '.') {
            suhuDua.value += '.';
         } else if (button.getAttribute('value') == 'c') {
            suhuDua.value = '0';
            funValueSuhuDua();
         } else if (button.getAttribute('value') == 'pm') {
            suhuDua.value *= -1;
            funValueSuhuDua();
         } else if (button.getAttribute('value') == '0') {
            if (suhuDua.hasAttribute('focus') == true) {
               if (suhuDua.value.indexOf('.') != -1) {
                  suhuDua.value += '0';
               } else {
                  suhuDua.value += '0';
                  funValueSuhuDua();
               }
            } else if (suhuDua.hasAttribute('focus') == true) {
               if (suhuDua.value.indexOf('.') != -1) {
                  suhuDua.value += '0';
               } else {
                  suhuDua.value += '0';
                  funValueSuhuDua();
               }
            }
         } else {
            suhuDua.value = parseFloat(suhuDua.value += button.getAttribute('value'));
            funValueSuhuDua();
         }
      }
   })
});


// With Keyboard Input
document.body.addEventListener('keydown', function (event) {
   if (document.querySelector('.suhu').classList.contains('open') == true) {
      for (let i = 1; i <= 9; i++) {
         if (event.key == i) {
            if (suhuSatu.hasAttribute('focus') == true) {
               suhuSatu.value = parseFloat(suhuSatu.value += event.key);
               funValueSuhuSatu();
            } else if (suhuDua.hasAttribute('focus') == true) {
               suhuDua.value = parseFloat(suhuDua.value += event.key);
               funValueSuhuDua();
            }
         }
      }

      if (event.key == '.') {
         if (suhuSatu.hasAttribute('focus') == true) {
            if (suhuSatu.value[suhuSatu.value.length - 1] == '.') {
               suhuSatu.value;
            } else if (suhuSatu.value % 1 == 0) {
               suhuSatu.value += '.';
            }
         } else if (suhuDua.hasAttribute('focus') == true) {
            if (suhuDua.value[suhuDua.value.length - 1] == '.') {
               suhuDua.value;
            } else if (suhuDua.value % 1 == 0) {
               suhuDua.value += '.';
            }
         }
      } else if (event.key == '0') {
         if (suhuSatu.hasAttribute('focus') == true) {
            if (suhuSatu.value.indexOf('.') != -1) {
               suhuSatu.value += '0';
            } else {
               suhuSatu.value += '0';
               funValueSuhuSatu();
            }
         } else if (suhuDua.hasAttribute('focus') == true) {
            if (suhuSatu.value.indexOf('.') != -1) {
               suhuSatu.value += '0';
            } else {
               suhuSatu.value += '0';
               funValueSuhuSatu();
            }
         }
      } else if (event.key == 'Backspace') {
         if (suhuSatu.hasAttribute('focus') == true) {
            if (suhuSatu.value < 0 && suhuSatu.value.length == 2) {
               suhuSatu.value = '0';
               funValueSuhuSatu();
            }

            if (suhuSatu.value.indexOf('.') != -1) {
               suhuSatu.value = suhuSatu.value.substring(0, suhuSatu.value.length - 1);
            } else {
               suhuSatu.value = suhuSatu.value.substring(0, suhuSatu.value.length - 1);
               funValueSuhuSatu();
            }
         } else if (suhuDua.hasAttribute('focus') == true) {
            if (suhuDua.value < 0 && suhuDua.value.length == 2) {
               suhuDua.value = '0';
               funValueSuhuDua();
            }

            if (suhuDua.value.indexOf('.') != -1) {
               suhuDua.value = suhuDua.value.substring(0, suhuDua.value.length - 1);
            } else {
               suhuDua.value = suhuDua.value.substring(0, suhuDua.value.length - 1);
               funValueSuhuDua();
            }
         }
      } else if (event.key == 'Control') {
         if (suhuSatu.hasAttribute('focus') == true) {
            suhuSatu.value = '0';
            funValueSuhuSatu();
         } else if (suhuDua.hasAttribute('focus') == true) {
            suhuDua.value = '0';
            funValueSuhuDua();
         }
      } else if (event.key == 'Shift') {
         if (suhuSatu.hasAttribute('focus') == true) {
            suhuSatu.value *= -1;
            funValueSuhuSatu();
         } else if (suhuDua.hasAttribute('focus') == true) {
            suhuDua.value *= -1;
            funValueSuhuDua();
         }
      }
   }
})