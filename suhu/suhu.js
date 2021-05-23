function convertCelciusTo(option, value) {
   return CelciusFrom[option](value);
};

function convertCelciusFrom(option, value) {
   return parseFloat(CelciusTo[option](value).toFixed(2));
};

// Constructor
function DataConstructor(value, title, right) {
   this.value = value;
   this.title = title;
   this.right = right;
};

let Suhu = [
   new DataConstructor('C', 'Celsius', '°C'),
   new DataConstructor('R', 'Reamur', '°R'),
   new DataConstructor('F', 'Fahrenheit', '°F'),
   new DataConstructor('K', 'Kelvin', 'K')
]

let CelciusFrom = {
   C: function (value) {
      return value * 1;
   },
   R: function (value) {
      return value * (5 / 4);
   },
   F: function (value) {
      return (5 / 9) * (value - 32);
   },
   K: function (value) {
      return value - 273;
   }
}

let CelciusTo = {
   C: function (value) {
      return value * 1;
   },
   R: function (value) {
      return value * (4 / 5);
   },
   F: function (value) {
      return value * (9 / 5) + 32;
   },
   K: function (value) {
      return value + 273;
   }
}

function RenderSuhu() {
   const suhuSatu = document.querySelector('#temperature-1');
   const suhuDua = document.querySelector('#temperature-2');

   Suhu.forEach(function (item) {
      const optionElSatu = document.createElement('option');
      optionElSatu.setAttribute('value', item.value);
      optionElSatu.setAttribute('data-right', item.right);
      optionElSatu.innerHTML = item.title;
      if (item.value == 'C') {
         optionElSatu.setAttribute('selected', 'selected')
      }
      suhuSatu.appendChild(optionElSatu);

      const optionElDua = document.createElement('option');
      optionElDua.setAttribute('value', item.value);
      optionElDua.setAttribute('data-right', item.right);
      optionElDua.innerHTML = item.title;
      if (item.value == 'R') {
         optionElDua.setAttribute('selected', 'selected')
      }
      suhuDua.appendChild(optionElDua);
   });

   $('#temperature-1').selectator({
      useSearch: false
   });
   $('#temperature-2').selectator({
      useSearch: false
   });
};

RenderSuhu();