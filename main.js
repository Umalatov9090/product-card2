const changeColorAllCardBtn = document.querySelector('#change-color-all-card');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-card');
const openGoogleBtn = document.querySelector('#open-google');
const outputConsoleLogBtn = document.querySelector('#output-console-log');
const toggleColorBtn = document.querySelector('#toggle-color-button');
const title = document.querySelector('.title');
const registrationButton = document.querySelector('#open-registration-modal');
const registrationModal = document.querySelector('#registration-modal');
const registrationForm = document.querySelector('#register-form');
let user;

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

registrationButton.addEventListener('click', () => {
  registrationModal.classList.add('modal-showed');
  registrationModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
});

function closeModal() {
  registrationModal.classList.remove('modal-showed');
  registrationModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

registrationModal.querySelector('.modal__close').addEventListener('click', closeModal);
registrationModal.querySelector('.overlay').addEventListener('click', closeModal);

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = registrationForm.elements.password.value;
  const passwordRepeat = registrationForm.elements.passwordRepeat;

  passwordRepeat.setCustomValidity(
    password === passwordRepeat.value ? '' : 'Пароли не совпадают'
  );

  if (!registrationForm.checkValidity()) {
    alert('Регистрация отклонена. Проверьте правильность заполнения формы.');
    registrationForm.reportValidity();
    return;
  }

  user = {
    firstName: registrationForm.elements.firstName.value,
    lastName: registrationForm.elements.lastName.value,
    birthDate: registrationForm.elements.birthDate.value,
    login: registrationForm.elements.login.value,
    password: password,
    passwordRepeat: passwordRepeat.value,
    createdOn: new Date()
  };

  console.log(user);
  closeModal();
});

registrationForm.elements.passwordRepeat.addEventListener('input', () => {
  registrationForm.elements.passwordRepeat.setCustomValidity('');
});