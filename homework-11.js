document.addEventListener('DOMContentLoaded', () => {

  // 1. Форма подписки на рассылку
	
  const subscriptionForm = document.querySelector('#subscribe-form');
  const subscriptionEmail = document.querySelector('#subscribe-email');

  if (subscriptionForm && subscriptionEmail) {
    subscriptionForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!subscriptionEmail.value.trim() || !subscriptionEmail.validity.valid) {
        subscriptionEmail.setCustomValidity('Введите корректный адрес электронной почты');
        subscriptionEmail.reportValidity();
        return;
      }

      subscriptionEmail.setCustomValidity('');
      console.log({ email: subscriptionEmail.value.trim() });
      subscriptionForm.reset();
    });

    subscriptionEmail.addEventListener('input', () => {
      subscriptionEmail.setCustomValidity('');
    });
  }

  // 2. Модальное окно и форма регистрации
  let user = null;

  const openModalButton = document.querySelector('#open-registration-modal');
  const modal = document.querySelector('#registration-modal');
  const regForm = document.querySelector('#register-form');
  const passwordInput = document.querySelector('#reg-password');
  const confirmPasswordInput = document.querySelector('#reg-confirm-password');

  // Убеждаемся, что все ключевые элементы модалки присутствуют на странице
  if (openModalButton && modal && regForm && passwordInput && confirmPasswordInput) {
    const closeModal = () => {
      modal.classList.remove('modal-showed');
      modal.setAttribute('aria-hidden', 'true');
    };

    openModalButton.addEventListener('click', () => {
      modal.classList.add('modal-showed');
      modal.setAttribute('aria-hidden', 'false');
    });

    modal.addEventListener('click', (event) => {
      if (event.target.closest('[data-close-modal]')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('modal-showed')) {
        closeModal();
      }
    });

    regForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!regForm.checkValidity()) {
        regForm.reportValidity();
        alert('Регистрация отклонена: проверьте заполнение полей.');
        return;
      }

      if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Регистрация отклонена: пароли не совпадают.');
        confirmPasswordInput.focus();
        return;
      }

      const formData = new FormData(regForm);

      user = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        birthDate: formData.get('birthDate'),
        login: formData.get('login'),
        password: formData.get('password'),
        passwordRepeat: formData.get('passwordRepeat'),
        createdOn: new Date(),
      };

      console.log('Регистрация успешна:', user);
      regForm.reset();
      closeModal();
    });
  }
});