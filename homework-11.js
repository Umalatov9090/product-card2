import { Form } from './Form.js';
import { Modal } from './Modal.js';

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
  const openModalButton = document.querySelector('#open-registration-modal');
  const modalElement = document.querySelector('#registration-modal');
  const formElement = document.querySelector('#register-form');
  const passwordInput = document.querySelector('#reg-password');
  const confirmPasswordInput = document.querySelector('#reg-confirm-password');

  if (openModalButton && modalElement && formElement && passwordInput && confirmPasswordInput) {
    const modal = new Modal('registration-modal');
    const form = new Form('register-form');

    openModalButton.addEventListener('click', () => {
      modal.open();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.isOpen()) {
        modal.close();
      }
    });

    formElement.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.isValid()) {
        alert('Регистрация отклонена: проверьте заполнение полей.');
        return;
      }

      if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Регистрация отклонена: пароли не совпадают.');
        confirmPasswordInput.focus();
        return;
      }

      const user = {
        ...form.getValues(),
        createdOn: new Date(),
      };

      console.log('Регистрация успешна:', user);
      form.reset();
      modal.close();
    });
  }
});