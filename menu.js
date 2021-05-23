const menuToggle = document.querySelector('.menu-toggle');
const menuWrapper = document.querySelector('.menu-wrapper');
const calculatorMenu = document.querySelector('.menu-wrapper .kalkulator');
const currencyMenu = document.querySelector('.menu-wrapper .currency');
const temperatureMenu = document.querySelector('.menu-wrapper .temperature');
const bilanganMenu = document.querySelector('.menu-wrapper .number');


menuToggle.addEventListener('click', function () {
   menuWrapper.classList.toggle('open');
});

calculatorMenu.addEventListener('click', function () {
   menuWrapper.classList.toggle('open');
   document.querySelector('.kurs-value').classList.remove('open');
   document.querySelector('.suhu').classList.remove('open');
   document.querySelector('.bilangan').classList.remove('open');

   // Close Number System Keyboard
   document.querySelector('.hex-button').classList.remove('open');
   document.querySelector('.oct-button').classList.remove('open');
   document.querySelector('.bin-button').classList.remove('open');
})

currencyMenu.addEventListener('click', function () {
   menuWrapper.classList.toggle('open');
   document.querySelector('.kurs-value').classList.add('open');
   document.querySelector('.suhu').classList.remove('open');
   document.querySelector('.bilangan').classList.remove('open');

   // Close Number System Keyboard
   document.querySelector('.hex-button').classList.remove('open');
   document.querySelector('.oct-button').classList.remove('open');
   document.querySelector('.bin-button').classList.remove('open');
})

temperatureMenu.addEventListener('click', function () {
   menuWrapper.classList.toggle('open');
   document.querySelector('.kurs-value').classList.remove('open');
   document.querySelector('.suhu').classList.add('open');
   document.querySelector('.bilangan').classList.remove('open');

   // Close Number System Keyboard
   document.querySelector('.hex-button').classList.remove('open');
   document.querySelector('.oct-button').classList.remove('open');
   document.querySelector('.bin-button').classList.remove('open');
})

bilanganMenu.addEventListener('click', function () {
   menuWrapper.classList.toggle('open');
   document.querySelector('.kurs-value').classList.remove('open');
   document.querySelector('.suhu').classList.remove('open');
   document.querySelector('.bilangan').classList.add('open');
   focusOnSatu();

   // Close Number System Keyboard
   document.querySelector('.hex-button').classList.remove('open');
   document.querySelector('.oct-button').classList.remove('open');
   document.querySelector('.bin-button').classList.remove('open');
})