// 1.Функция получения температуры в заданном городе
function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showTemperature('Махачкала', 30);

// 2.Проверка показателей скорости относительно скорости света
const speedOfLight = 299792458;
function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость');
  } else if (speed < speedOfLight) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}
checkSpeed(300000000); // Субсветовая скорость
checkSpeed(299792458); // Скорость света
checkSpeed(350000000); // Сверхсветовая скорость

// 3.Приобретение продукции
const product = 'Кофемашина';
const price = 3500; // Цена товара указана в долларах
function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретена. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference} $, пополните баланс`);
  }
}
buyProduct(4000); 
// → Кофемашина приобретена. Спасибо за покупку!

buyProduct(2000); 
// → Вам не хватает 1500 $, пополните баланс

// 4. Создать 1 функцию
function greet(name, country) {
  console.log(`Привет, ${name} из ${country}!`);
}
greet('Абдурагим', 'Россия');

// 5. Три переменных
let name = 'Абдурагим';
let age = 35;
let country = 'Россия';

// 6.Вызов функций

