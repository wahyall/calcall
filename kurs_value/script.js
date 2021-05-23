const currencySatu = document.querySelector('#currency-1');
const valasSatu = document.querySelector('.valas-1');
const idValasSatu = document.querySelector('.kurs-value .form-1 .code');

const currencyDua = document.querySelector('#currency-2');
const valasDua = document.querySelector('.valas-2');
const idValasDua = document.querySelector('.kurs-value .form-2 .code');

// Fired Event
function funCurrencySatu() {
   const rootDollar = convertDollarTo(currencySatu.value, valasSatu.value);
   const result = convertDollarFrom(currencyDua.value, rootDollar);
   valasDua.value = result;
   idValasSatu.innerHTML = currencySatu.value;
}

function funCurrencyDua() {
   const rootDollar = convertDollarTo(currencyDua.value, valasDua.value);
   const result = convertDollarFrom(currencySatu.value, rootDollar);
   valasSatu.value = result;
   idValasDua.innerHTML = currencyDua.value;
}

function funValueCurSatu() {
   if (valasSatu.value.length == 0) {
      valasSatu.value = 0;
   }
   valasSatu.value = parseFloat(valasSatu.value);
   const rootDollar = convertDollarTo(currencySatu.value, valasSatu.value);
   const result = convertDollarFrom(currencyDua.value, rootDollar);
   valasDua.value = result;
}

function funValueCurDua() {
   if (valasDua.value.length == 0) {
      valasDua.value = 0;
   }
   valasDua.value = parseFloat(valasDua.value);
   const rootDollar = convertDollarTo(currencyDua.value, valasDua.value);
   const result = convertDollarFrom(currencySatu.value, rootDollar);
   valasSatu.value = result;
}

currencySatu.dispatchEvent(new Event('change'));
currencyDua.dispatchEvent(new Event('change'));


// Button Number 
valasSatu.parentElement.addEventListener('click', function () {
   valasSatu.setAttribute('focus', 'focus');
   valasDua.removeAttribute('focus');
   valasSatu.parentElement.style.borderBottom = '1px solid var(--borderOn)';
   valasDua.parentElement.style.borderBottom = '2px solid var(--borderOff)';
});

valasDua.parentElement.addEventListener('click', function () {
   valasDua.setAttribute('focus', 'focus');
   valasSatu.removeAttribute('focus');
   valasDua.parentElement.style.borderBottom = '1px solid var(--borderOn)';
   valasSatu.parentElement.style.borderBottom = '2px solid var(--borderOff)';
});

const buttonsCurrency = document.querySelectorAll('.kurs-value .button-currency span');
buttonsCurrency.forEach(function (button) {
   button.addEventListener('click', function () {
      if (valasSatu.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            if (valasSatu.value.indexOf('.') != -1) {
               valasSatu.value = valasSatu.value.substring(0, valasSatu.value.length - 1);
            } else {
               valasSatu.value = valasSatu.value.substring(0, valasSatu.value.length - 1);
               funValueCurSatu();
            }
         } else if (button.getAttribute('value') == '.') {
            if (valasSatu.value[valasSatu.value.length - 1] == '.') {
               valasSatu.value;
            } else if (valasSatu.value % 1 == 0) {
               valasSatu.value += '.';
            }
         } else if (button.getAttribute('value') == 'c') {
            valasSatu.value = '0';
            funValueCurSatu();
         } else if (button.getAttribute('value') == '0') {
            if (valasSatu.value.indexOf('.') != -1) {
               valasSatu.value += '0';
            } else {
               valasSatu.value += '0';
               funValueCurSatu();
            }
         } else {
            valasSatu.value = parseFloat(valasSatu.value += button.getAttribute('value'));
            funValueCurSatu();
         }
      } else if (valasDua.hasAttribute('focus') == true) {
         if (button.getAttribute('value') == 'del') {
            if (valasDua.value.indexOf('.') != -1) {
               valasDua.value = valasDua.value.substring(0, valasDua.value.length - 1);
            } else {
               valasDua.value = valasDua.value.substring(0, valasDua.value.length - 1);
               funValueCurDua();
            }
         } else if (button.getAttribute('value') == '.') {
            if (valasDua.value[valasDua.value.length - 1] == '.') {
               valasDua.value;
            } else if (valasDua.value % 1 == 0) {
               valasDua.value += '.';
            }
         } else if (button.getAttribute('value') == 'c') {
            valasDua.value = '0';
            funValueCurDua();
         } else if (button.getAttribute('value') == '0') {
            if (valasDua.value.indexOf('.') != -1) {
               valasDua.value += '0';
            } else {
               valasDua.value += '0';
               funValueCurDua();
            }
         } else {
            valasDua.value = parseFloat(valasDua.value += button.getAttribute('value'));
            funValueCurDua();
         }
      }
   })
});


// With Keyboard Input
document.body.addEventListener('keydown', function (event) {
   if (document.querySelector('.kurs-value').classList.contains('open') == true) {
      for (let i = 1; i <= 9; i++) {
         if (event.key == i) {
            if (valasSatu.hasAttribute('focus') == true) {
               valasSatu.value = parseFloat(valasSatu.value += event.key);
               funValueCurSatu();
            } else if (valasDua.hasAttribute('focus') == true) {
               valasDua.value = parseFloat(valasDua.value += event.key);
               funValueCurDua();
            }
         }
      }

      if (event.key == '.') {
         if (valasSatu.hasAttribute('focus') == true) {
            if (valasSatu.value[valasSatu.value.length - 1] == '.') {
               valasSatu.value;
            } else if (valasSatu.value % 1 == 0) {
               valasSatu.value += '.';
            }
         } else if (valasDua.hasAttribute('focus') == true) {
            if (valasDua.value[valasDua.value.length - 1] == '.') {
               valasDua.value;
            } else if (valasDua.value % 1 == 0) {
               valasDua.value += '.';
            }
         }
      } else if (event.key == '0') {
         if (valasSatu.hasAttribute('focus') == true) {
            if (valasSatu.value.indexOf('.') != -1) {
               valasSatu.value += '0';
            } else {
               valasSatu.value += '0';
               funValueCurSatu();
            }
         } else if (valasDua.hasAttribute('focus') == true) {
            if (valasDua.value.indexOf('.') != -1) {
               valasDua.value += '0';
            } else {
               valasDua.value += '0';
               funValueCurDua();
            }
         }
      } else if (event.key == 'Backspace') {
         if (valasSatu.hasAttribute('focus') == true) {
            if (valasSatu.value.indexOf('.') != -1) {
               valasSatu.value = valasSatu.value.substring(0, valasSatu.value.length - 1);
            } else {
               valasSatu.value = valasSatu.value.substring(0, valasSatu.value.length - 1);
               funValueCurSatu();
            }
         } else if (valasDua.hasAttribute('focus') == true) {
            if (valasDua.value.indexOf('.') != -1) {
               valasDua.value = valasDua.value.substring(0, valasDua.value.length - 1);
            } else {
               valasDua.value = valasDua.value.substring(0, valasDua.value.length - 1);
               funValueCurDua();
            }
         }
      } else if (event.key == 'Control') {
         if (valasSatu.hasAttribute('focus') == true) {
            valasSatu.value = '0';
            funValueCurSatu();
         } else if (valasDua.hasAttribute('focus') == true) {
            valasDua.value = '0';
            funValueCurDua();
         }
      }
   }
})