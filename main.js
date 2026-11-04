class Drink {
  #temperature;

  // Базовый класс напитка.
  constructor(name, size, price, temperature, category, icon) {
    if (new.target === Drink) throw new Error('Создайте конкретный напиток.');
    this.name = name;
    this.size = size;
    this.price = price;
    this.category = category;
    this.icon = icon;
    this.setTemperature(temperature);
  }

  getTemperature() { return this.#temperature; }

  setTemperature(value) {
    if (!Number.isFinite(value) || value < 0 || value > 100) {
      throw new Error('Температура должна быть от 0 до 100 °C.');
    }
    this.#temperature = value;
  }

  getInfo() {
    return `${this.name}, ${this.size}, ${this.getTemperature()} °C, ${this.price} ₽`;
  }

  prepareRecipe() { throw new Error('Добавьте способ приготовления напитка.'); }

  serve() {
    const result = `${this.prepareRecipe()}. Напиток подан.`;
    console.log(result);
    return result;
  }
}

// Виды напитков задают свои свойства и рецепты.
class Coffee extends Drink {
  constructor(name, size, price, temperature, category, icon, beans, milk) {
    super(name, size, price, temperature, category, icon);
    this.beans = beans;
    this.milk = milk;
  }

  getInfo() { return `${super.getInfo()}, зёрна: ${this.beans}, молоко: ${this.milk}`; }
  prepareRecipe() { return `Готовим ${this.name} из зёрен ${this.beans} с молоком ${this.milk}`; }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, category, icon, teaType) {
    super(name, size, price, temperature, category, icon);
    this.teaType = teaType;
  }

  getInfo() { return `${super.getInfo()}, сорт чая: ${this.teaType}`; }
  prepareRecipe() { return `Завариваем ${this.name} (${this.teaType})`; }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, category, icon, fruit) {
    super(name, size, price, temperature, category, icon);
    this.fruit = fruit;
  }

  getInfo() { return `${super.getInfo()}, вкус: ${this.fruit}`; }
  prepareRecipe() { return `Готовим ${this.name} с фруктами: ${this.fruit}`; }
}

class Menu {
  #drinks;

  constructor(drinks) {
    this.#drinks = drinks;
  }

  get drinks() { return [...this.#drinks]; }
}

// Хранит выбранные напитки и считает стоимость заказа.
class Order {
  #drinks = [];

  get drinks() { return [...this.#drinks]; }
  get total() { return this.#drinks.reduce((sum, drink) => sum + drink.price, 0); }
  add(drink) { this.#drinks.push(drink); }
  remove(index) { this.#drinks.splice(index, 1); }

  checkout(orderDrink) {
    if (!this.#drinks.length) throw new Error('Добавьте напиток в заказ.');
    const receipt = {
      total: this.total,
      drinks: this.#drinks.map((drink) => `${drink.name}: ${orderDrink(drink)}`)
    };
    this.#drinks = [];
    return receipt;
  }
}

class Cafe {
  #name;
  #location;
  #order = new Order();

  constructor(name, location) {
    this.#name = name;
    this.#location = location;
  }

  get order() { return this.#order; }

  getInfo() {
    const info = `Кафе ${this.#name}, адрес: ${this.#location}`;
    console.log(info);
    return info;
  }

  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      throw new Error('Для заказа передайте напиток.');
    }

    console.log(`Заказ напитка: ${drink.name}`);
    const result = drink.serve();
    console.log(`Заказ в кафе ${this.#name} выполнен.`);
    return result;
  }
}

// Создаём меню и кафе.
const menu = new Menu([
  new Coffee('Капучино', '250 мл', 250, 65, 'coffee', '☕', 'арабика', 'коровье'),
  new Coffee('Латте', '300 мл', 290, 65, 'coffee', '☕', 'робуста', 'овсяное'),
  new Tea('Матча', '300 мл', 320, 80, 'tea', '🍵', 'зелёный'),
  new Tea('Облепиховый чай', '400 мл', 280, 80, 'tea', '🍵', 'травяной'),
  new Lemonade('Ягодный лимонад', '400 мл', 300, 5, 'lemonade', '🍓', 'ягоды'),
  new Lemonade('Лимонад с лаймом', '400 мл', 310, 5, 'lemonade', '🍋', 'лайм')
]);
const cafe = new Cafe('Cafe 24/7', 'ул. Центральная, 1');
document.querySelector('#cafe-info').textContent = cafe.getInfo();

// Находим элементы страницы и задаём начальную категорию.
const drinksElement = document.querySelector('#drinks');
const orderElement = document.querySelector('#order');
const messageElement = document.querySelector('#message');
const countElement = document.querySelector('#count');
const totalElement = document.querySelector('#total');
const checkoutButton = document.querySelector('#checkout');
const formatPrice = (price) => `${price.toLocaleString('ru-RU')} ₽`;
let category = 'all';

// Показываем напитки выбранной категории.
function showMenu() {
  drinksElement.replaceChildren();

  const drinks = menu.drinks.filter((drink) =>
    category === 'all' || drink.category === category
  );

  drinks.forEach((drink) => {
    const card = document.createElement('article');
    card.className = 'drink';
    const iconClass = drink.name === 'Облепиховый чай' ? 'icon orange-tea' : 'icon';
    card.innerHTML = `<span class="${iconClass}">${drink.icon}</span><h3></h3><p class="info"></p>`;
    card.querySelector('h3').textContent = drink.name;
    card.querySelector('.info').textContent = drink.getInfo();

    const button = document.createElement('button');
    button.textContent = 'Добавить +';
    button.addEventListener('click', () => {
      cafe.order.add(drink);
      messageElement.textContent = '';
      showOrder();
    });

    card.append(button);
    drinksElement.append(card);
  });
}

// Обновляем состав корзины и стоимость заказа.
function showOrder() {
  orderElement.replaceChildren();

  const drinks = cafe.order.drinks;
  drinks.forEach((drink, index) => {
    const row = document.createElement('p');
    row.textContent = `${drink.name} — ${formatPrice(drink.price)} `;

    const remove = document.createElement('button');
    remove.textContent = 'Убрать';
    remove.addEventListener('click', () => {
      cafe.order.remove(index);
      showOrder();
    });

    row.append(remove);
    orderElement.append(row);
  });

  countElement.textContent = drinks.length;
  totalElement.textContent = formatPrice(cafe.order.total);
  checkoutButton.disabled = drinks.length === 0;
}

// Переключаем категорию меню.
const categoryButtons = document.querySelectorAll('[data-category]');
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    category = button.dataset.category;
    categoryButtons.forEach((item) => {
      item.classList.toggle('active', item === button);
    });
    showMenu();
  });
});

// Оформляем заказ и показываем результат.
checkoutButton.addEventListener('click', () => {
  try {
    const receipt = cafe.order.checkout((drink) => cafe.orderDrink(drink));
    messageElement.textContent =
      `Заказ принят! ${receipt.drinks.join(', ')} Итого ${formatPrice(receipt.total)}.`;
    showOrder();
  } catch (error) {
    messageElement.textContent = error.message;
  }
});

showMenu();
showOrder();
