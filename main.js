const changeColorAllCardBtn = document.querySelector('#change-color-all-card');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-card');
const openGoogleBtn = document.querySelector('#open-google');
const outputConsoleLogBtn = document.querySelector('#output-console-log');
const toggleColorBtn = document.querySelector('#toggle-color-button');
const title = document.querySelector('.title');

const allCardsColor = '#ff1500';
const firstCardColor = '#0000ff';
const yellowColorHash = '#ffd700';
const grayColorHash = '#c0c0c0';

if (changeColorAllCardBtn) {
  changeColorAllCardBtn.addEventListener('click', () => {
    document.querySelectorAll('.product-card').forEach((card) => {
      card.style.backgroundColor = allCardsColor;
    });
  });
}

if (changeColorFirstCardBtn) {
  changeColorFirstCardBtn.addEventListener('click', () => {
    const firstProductCard = document.querySelector('.product-card');
    if (firstProductCard) {
      firstProductCard.style.backgroundColor = firstCardColor;
    }
  });
}

if (openGoogleBtn) {
  openGoogleBtn.addEventListener('click', () => {
    window.open('https://www.google.com/', '_blank');
  });
}

if (outputConsoleLogBtn) {
  outputConsoleLogBtn.addEventListener('click', () => {
    alert('Кнопка была нажата');
    console.log('Кнопка была нажата');
  });
}

if (title) {
  title.addEventListener('mouseover', () => {
    console.log(title.textContent);
  });
}

 console.log("Click");

if (toggleColorBtn) {
  toggleColorBtn.addEventListener('click', () => {
    console.log( "Click");
    toggleColorBtn.classList.toggle('active');

  });
}