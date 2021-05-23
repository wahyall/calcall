const buttonNumbers = document.querySelectorAll('.button-number span');
const values = document.querySelector('.values');
const proccess = document.querySelector('.proccess');
let subProccess = '';

let point = [];
let operation = [];

function Result() {
   if (values.value.length != 0) {
      if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' ||
         values.value[values.value.length - 1] == '×' ||
         values.value[values.value.length - 1] == '÷') {
         values.value = values.value.substring(0, values.value.length - 1);
         subProccess = subProccess.substring(0, subProccess.length - 1);
      }
      if (values.value[values.value.length - 1] == '.') {
         proccess.innerHTML = values.value.substring(0, values.value.length - 1);
      } else {
         proccess.innerHTML = values.value;
      }
      if (eval(subProccess) == 0.30000000000000004) {
         values.value = 0.3;
      } else {
         values.value = eval(subProccess);
         subProccess = values.value;
      }
   }

   if (values.value % 1 == 0) {
      point = [];
   } else {
      point = ['.'];
   }

   operation = [];
}

buttonNumbers.forEach(function (button) {
   button.addEventListener('click', function () {
      if (button.getAttribute('value') == '=') { // Result VALIDATION
         Result();
      } else if (button.getAttribute('value') == 'c') { // 'c' VALIDATION
         values.value = '';
         subProccess = '';
         proccess.innerHTML = '';
         point = [];
         operation = [];
      } else if (button.getAttribute('value') == 'del') { // 'del' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            point.pop();
         } else if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
            operation.pop();
         }

         values.value = values.value.substring(0, values.value.length - 1);
         subProccess = subProccess.substring(0, subProccess.length - 1);
      } else if (button.getAttribute('value') == '.') { // '.' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value;
         } else if (point.length <= operation.length || point.length == 0) {
            if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
               values.value += '0.';
               subProccess += '0.';
               point.push('.');
            } else {
               values.value += '.';
               subProccess += '.';
               point.push('.');
            }
         } else if (values.value.length == 0) {
            values.value = '0.'
            subProccess = '0.';
            point.push('.');
         }
      } else if (button.getAttribute('value') == '+') { // '+' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value = values.value.substring(0, values.value.length - 1);
            values.value += '+'
            subProccess = subProccess.substring(0, subProccess.length - 1);
            subProccess += '+'

            operation.push(button.innerHTML);
            point.pop();
         } else if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
            values.value = values.value;
            subProccess = subProccess;
         } else {
            values.value += button.innerHTML;
            subProccess += button.getAttribute('value');
            operation.push(button.innerHTML);
         }
      } else if (button.getAttribute('value') == '-') { // '-' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value = values.value.substring(0, values.value.length - 1);
            values.value += '-'
            subProccess = subProccess.substring(0, subProccess.length - 1);
            subProccess += '-'

            operation.push(button.innerHTML);
            point.pop();
         } else if (values.value[values.value.length - 1] == '-') {
            values.value = values.value;
            subProccess = subProccess
         } else {
            values.value += button.innerHTML;
            subProccess += button.getAttribute('value');
            operation.push(button.innerHTML);
         }
      } else if (button.getAttribute('value') == '*') { // '*' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value = values.value.substring(0, values.value.length - 1);
            values.value += '×'
            subProccess = subProccess.substring(0, subProccess.length - 1);
            subProccess += '*'

            operation.push(button.innerHTML);
            point.pop();
         } else if (values.value.length == 0) {
            values.value = values.value;
            subProccess = subProccess;
         } else if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
            values.value = values.value;
         } else {
            values.value += button.innerHTML;
            subProccess += button.getAttribute('value');
            operation.push(button.innerHTML);
         }
      } else if (button.getAttribute('value') == '/') { // '/' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value = values.value.substring(0, values.value.length - 1);
            values.value += '÷'
            subProccess = subProccess.substring(0, subProccess.length - 1);
            subProccess += '/'

            operation.push(button.innerHTML);
            point.pop();
         } else if (values.value.length == 0) {
            values.value = values.value;
            subProccess = subProccess;
         } else if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
            values.value = values.value;
         } else {
            values.value += button.innerHTML;
            subProccess += button.getAttribute('value');
            operation.push(button.innerHTML);
         }
      } else { // number VALIDATION
         if (values.value == 0) {
            if (values.value.length > 1) {
               values.value += button.innerHTML;
               subProccess += button.getAttribute('value');
            } else {
               values.value = '';
               values.value += button.innerHTML;
               subProccess = '';
               subProccess += button.getAttribute('value');
            }
         } else if (values.value[values.value.length - 2] == '+' || values.value[values.value.length - 2] == '-' || values.value[values.value.length - 2] == '×' || values.value[values.value.length - 2] == '÷') {
            if (values.value[values.value.length - 1] == '0') {
               values.value = values.value.slice(0, values.value.length - 1);
               values.value += button.innerHTML;

               subProccess = subProccess.slice(0, subProccess.length - 1);
               subProccess += button.getAttribute('value');
            } else {
               values.value += button.innerHTML;
               subProccess += button.getAttribute('value');
            }
         } else {
            values.value += button.innerHTML;
            subProccess += button.getAttribute('value');
         }
      }
   });
});


// With Keyboard Input
document.body.addEventListener('keyup', function (event) {
   if (document.querySelector('.kurs-value').classList.contains('open') == false && document.querySelector('.suhu').classList.contains('open') == false && document.querySelector('.bilangan').classList.contains('open') == false) {
      for (let i = 0; i <= 9; i++) {
         if (event.key == i) {
            if (values.value == 0) {
               if (values.value.length > 1) {
                  values.value += event.key;
                  subProccess += event.key;
               } else {
                  values.value = '';
                  values.value += event.key;
                  subProccess = '';
                  subProccess += event.key;
               }
            } else if (values.value[values.value.length - 2] == '+' || values.value[values.value.length - 2] == '-' || values.value[values.value.length - 2] == '×' || values.value[values.value.length - 2] == '÷') {
               if (values.value[values.value.length - 1] == '0') {
                  values.value = values.value.slice(0, values.value.length - 1);
                  values.value += event.key;

                  subProccess = subProccess.slice(0, subProccess.length - 1);
                  subProccess += event.key;
               } else {
                  values.value += event.key;
                  subProccess += event.key;
               }
            } else {
               values.value += event.key;
               subProccess += event.key;
            }
         }
      }

      if (event.key == '+') { // '+' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value = values.value.substring(0, values.value.length - 1);
            values.value += '+'
            subProccess = subProccess.substring(0, subProccess.length - 1);
            subProccess += '+'

            operation.push('+');
            point.pop();
         } else if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
            values.value = values.value;
            subProccess = subProccess;
         } else {
            values.value += '+';
            subProccess += '+';
            operation.push('+');
         }
      } else if (event.key == '-') { // '-' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value = values.value.substring(0, values.value.length - 1);
            subProccess = subProccess.substring(0, subProccess.length - 1);
            operation.push('-');
            point.pop();
         } else if (values.value[values.value.length - 1] == '-') {
            values.value = values.value;
            subProccess = subProccess
         } else {
            values.value += '-';
            subProccess += '-';
            operation.push('-');
         }
      } else if (event.key == '*') { // '*' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value = values.value.substring(0, values.value.length - 1);
            subProccess = subProccess.substring(0, subProccess.length - 1);
            operation.push('×');
            point.pop();
         } else if (values.value.length == 0) {
            values.value = values.value;
            subProccess = subProccess;
         } else if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
            values.value = values.value;
         } else {
            values.value += '×';
            subProccess += '*';
            operation.push('×');
         }
      } else if (event.key == '/') { // '/' VALIDATION
         if (values.value[values.value.length - 1] == '.') {
            values.value = values.value.substring(0, values.value.length - 1);
            subProccess = subProccess.substring(0, subProccess.length - 1);
            operation.push('÷');
            point.pop();
         } else if (values.value.length == 0) {
            values.value = values.value;
            subProccess = subProccess;
         } else if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
            values.value = values.value;
         } else {
            values.value += '÷';
            subProccess += '/';
            operation.push('÷');
         }
      } else if (event.key == 'Enter' || event.key == '=') {
         Result();
      } else if (event.key == 'Backspace') {
         if (values.value[values.value.length - 1] == '.') {
            point.pop();
         } else if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
            operation.pop();
         }

         values.value = values.value.substring(0, values.value.length - 1);
         subProccess = subProccess.substring(0, subProccess.length - 1);
      } else if (event.key == 'Control') { // 'C' VALIDATION
         values.value = '';
         subProccess = '';
         proccess.innerHTML = '';
         point = [];
         operation = [];
      } else if (event.key == '.') {
         if (values.value[values.value.length - 1] == '.') {
            values.value;
         } else if (point.length <= operation.length || point.length == 0) {
            if (values.value[values.value.length - 1] == '+' || values.value[values.value.length - 1] == '-' || values.value[values.value.length - 1] == '×' || values.value[values.value.length - 1] == '÷') {
               values.value += '0.';
               subProccess += '0.';
               point.push('.');
            } else {
               values.value += '.';
               subProccess += '.';
               point.push('.');
            }
         } else if (values.value.length == 0) {
            values.value = '0.'
            subProccess = '0.';
            point.push('.');
         }
      }
   }
})