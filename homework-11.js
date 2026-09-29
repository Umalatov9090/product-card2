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
