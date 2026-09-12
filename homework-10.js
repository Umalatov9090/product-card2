import { products } from './products.js';
console.log(products);

const productsMap = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log("Результат выполнения метода .reduce():", productsMap);

// Функция 1: спрашивает сколько карточек показать
function getCountFromUser() {
  while (true) {
    let input;

    try {
      input = prompt('Сколько карточек отобразить? От 1 до 5');
    } catch (error) {
      console.warn('Ввод недоступен, отображаются все карточки.');
      return products.length;
    }

    // Если нажали «Отмена»
    if (input === null) {
      return 0;
    }

    const count = Number(input.trim());

    // Защита через if — как в задании
    if (count >= 1 && count <= 5) {
      return count;
    }

    alert('Ошибка! Введите число от 1 до 5.');
  }
}

// Функция 2: Превращает массив данных в визуальные карточки тоесть рендерит список карточек из массива //

function renderCards(itemsToRender) {
  const cardTemplate = document.querySelector('#card-template');
  const cardList = document.querySelector('.products');

  if (!cardTemplate || !cardList) return;

  cardList.innerHTML = '';

  const fragment = document.createDocumentFragment();

  itemsToRender.forEach(product => {
    const card = cardTemplate.content.querySelector('.product-card');
    if (!card) return;

    const productClone = card.cloneNode(true);

    productClone.querySelector('.product-card__img').src = product.image;
    productClone.querySelector('.product-card__img').alt = product.name;
    productClone.querySelector('.product-card__skin-type').textContent = product.skinType;
    productClone.querySelector('.product-card__name').textContent = product.name;
    productClone.querySelector('.product-card__description').textContent = product.description;

    const compoundList = productClone.querySelector('.product-card__components');
    if (compoundList) {
      compoundList.innerHTML = '';
      product.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.className = 'product-card__component';
        li.textContent = ingredient;
        compoundList.appendChild(li);
      });
    }

    productClone.querySelector('.product-card__price-value').textContent = product.price;

    fragment.appendChild(productClone);
  });

  cardList.appendChild(fragment);
  console.log(cardList);
}

// Запуск
const count = getCountFromUser();

if (count > 0) {
  renderCards(products.slice(0, count));
}