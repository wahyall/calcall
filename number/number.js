function convertDecimalTo(option, value) {
   return DecimalFrom[option](value);
};

function convertDecimalFrom(option, value) {
   return DecimalTo[option](value);
};

// Constructor
function DataConstructor(value, title) {
   this.value = value;
   this.title = title;
   this.right = value;
};

let Bilangan = [
   new DataConstructor('BIN', 'Binary Number'),
   new DataConstructor('OCT', 'Octal Number'),
   new DataConstructor('DEC', 'Decimal Number'),
   new DataConstructor('HEX', 'Hexadecimal Number')
]

let DecimalFrom = {
   DEC: function (value) {
      return value;
   },
   BIN: function (value) {
      return parseInt(`${value}`, 2);
   },
   OCT: function (value) {
      return parseInt(`${value}`, 8);
   },
   HEX: function (value) {
      return parseInt(`${value}`, 16);
   }
}

let DecimalTo = {
   DEC: function (value) {
      return value;
   },
   BIN: function (value) {
      return (parseInt(value)).toString(2);
   },
   OCT: function (value) {
      return (parseInt(value)).toString(8);
   },
   HEX: function (value) {
      return ((parseInt(value)).toString(16)).toLocaleUpperCase();
   }
}

function RenderBilangan() {
   const bilanganSatu = document.querySelector('#number-1');
   const bilanganDua = document.querySelector('#number-2');

   Bilangan.forEach(function (item) {
      const optionElSatu = document.createElement('option');
      optionElSatu.setAttribute('value', item.value);
      optionElSatu.setAttribute('data-right', item.right);
      optionElSatu.innerHTML = item.title;
      if (item.value == 'DEC') {
         optionElSatu.setAttribute('selected', 'selected')
      }
      bilanganSatu.appendChild(optionElSatu);

      const optionElDua = document.createElement('option');
      optionElDua.setAttribute('value', item.value);
      optionElDua.setAttribute('data-right', item.right);
      optionElDua.innerHTML = item.title;
      if (item.value == 'BIN') {
         optionElDua.setAttribute('selected', 'selected')
      }
      bilanganDua.appendChild(optionElDua);
   });

   $('#number-1').selectator({
      useSearch: false
   });
   $('#number-2').selectator({
      useSearch: false
   });
};

RenderBilangan();