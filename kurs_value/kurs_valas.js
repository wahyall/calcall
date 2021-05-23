function convertDollarTo(currency, value) {
   return DollarFrom[currency](value);
}

function convertDollarFrom(currency, value) {
   return parseFloat(DollarTo[currency](value).toFixed(2));
}


// Constructor
function DataConstructor(value, title, left, kurs) {
   this.value = value;
   this.title = title;
   this.left = left;
   this.right = value;
   this.kurs = kurs;
}


// Data Kurs Valas
let KursValas = [
   new DataConstructor('IDR', 'Indonesia Rupiah', 'indonesia', 14150),
   new DataConstructor('MYR', 'Malaysia Ringgit', 'malaysia', 4.1),
   new DataConstructor('USD', 'United States Dollar', 'usa', 1),
   new DataConstructor('CNY', 'Chinese Yuan', 'chinese', 6.59),
   new DataConstructor('EUR', 'European Euro', 'european', 0.84),
   new DataConstructor('HKD', 'Hong Kong Dollar', 'hong-kong', 7.7),
   new DataConstructor('CAD', 'Canada Dollar', 'canada', 1.3),
   new DataConstructor('JPY', 'Japanese Yen', 'japan', 103.8),
   new DataConstructor('KRW', 'South Korea Won', 'south-korea', 1116.2),
   new DataConstructor('DZD', 'Algeria Dinar', 'algeria', 128.45),
   new DataConstructor('INR', 'India Rupee', 'india', 74.13),
   new DataConstructor('SGD', 'Singapore Dollar', 'singapore', 1.35),
   new DataConstructor('ARS', 'Argentina Peso', 'argentina', 80.27),
   new DataConstructor('AUD', 'Australia Dollar', 'australia', 1.36),
   new DataConstructor('BRL', 'Brazil Real', 'brazil', 5.3),
   new DataConstructor('BND', 'Brunei Ringgit', 'brunei', 1.34),
   new DataConstructor('MMK', 'Myanmar Kyat', 'myanmar', 1307.5),
   new DataConstructor('EGP', 'Egypt Pound', 'egypt', 15.6),
   new DataConstructor('ISK', 'Iceland Krona', 'iceland', 135.9),
   new DataConstructor('PHP', 'Philippines Peso', 'philippines', 48.26),
   new DataConstructor('RUB', 'Russia Ruble', 'russia', 76),
   new DataConstructor('PKR', 'Pakistan Rupee', 'pakistan', 160.5),
   new DataConstructor('TYR', 'Turkey Lira', 'turkey', 7.6),
   new DataConstructor('AED', 'Uni Emirates Arab Dirham', 'uni-emirates-arab', 3.67),
   new DataConstructor('THB', 'Thailand Baht', 'thailand', 30.3),
   new DataConstructor('SAR', 'Saudi Arabia Real', 'saudi-arabia', 3.75),
   new DataConstructor('ZAR', 'South Africa Rand', 'south-africa', 15.35),
   new DataConstructor('KWD', 'Kuwait Dinar', 'kuwait', 0.3),
   new DataConstructor('LBP', 'Lebanon Pound', 'lebanon', 1.51),
   new DataConstructor('QAR', 'Qatar Real', 'qatar', 3.64),
   new DataConstructor('SEK', 'Sweden Krona', 'sweden', 8.62),
   new DataConstructor('CHF', 'Switzerland Franc', 'switzerland', 0.91),
   new DataConstructor('VND', 'Vietnam Dong', 'vietnam', 23180),
   new DataConstructor('KHR', 'Cambodia Real', 'cambodia', 4050),
   new DataConstructor('COP', 'Colombia Peso', 'colombia', 3632.95),
   new DataConstructor('CLP', 'Chile Peso', 'chile', 764.1),
   new DataConstructor('CZK', 'Czech Republic Crown', 'czech-republic', 22.23)
];

let DollarTo = {};
let DollarFrom = {};

KursValas.forEach(function (item) {
   DollarTo[item.value] = function (value) {
      return value * item.kurs;
   }
});

KursValas.forEach(function (item) {
   DollarFrom[item.value] = function (value) {
      return value / item.kurs;
   }
});

function RenderKursValas() {
   const currencySatu = document.querySelector('#currency-1');
   const currencyDua = document.querySelector('#currency-2');

   KursValas.forEach(function (item) {
      const optionElSatu = document.createElement('option');
      optionElSatu.setAttribute('value', item.value);
      optionElSatu.setAttribute('data-left', 'img/' + item.left + '.png');
      optionElSatu.setAttribute('data-right', item.right);
      optionElSatu.innerHTML = item.title;
      if (item.value == 'USD') {
         optionElSatu.setAttribute('selected', 'selected')
      }
      currencySatu.appendChild(optionElSatu);

      const optionElDua = document.createElement('option');
      optionElDua.setAttribute('value', item.value);
      optionElDua.setAttribute('data-left', 'img/' + item.left + '.png');
      optionElDua.setAttribute('data-right', item.right);
      optionElDua.innerHTML = item.title;
      if (item.value == 'IDR') {
         optionElDua.setAttribute('selected', 'selected')
      }
      currencyDua.appendChild(optionElDua);
   });

   $('#currency-1').selectator({});
   $('#currency-2').selectator({});
};

RenderKursValas();