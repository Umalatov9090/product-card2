import { Modal } from "./Modal.js";

// Создаём модальное окно регистрации.
// Третий аргумент определяет, закрывать ли окно
// при нажатии на затемнённый фон.
const registrationModal = new Modal(
    "registration-modal",
    "registration-button",
    false
);

// Создаём модальное окно авторизации.
const authModal = new Modal(
    "auth-modal",
    "auth-button",
    true
);

// Переключение между окнами регистрации и входа.
document
    .querySelectorAll("[data-open-modal]")
    .forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.dataset.openModal;
            const targetModal =
                targetId === "auth-modal"
                    ? authModal
                    : registrationModal;

            registrationModal.close();
            authModal.close();

            targetModal.open();
        });
    });

// Обработка формы регистрации.
document
    .getElementById("registration-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const password = formData.get("password");
        const passwordConfirm = formData.get("passwordConfirm");

        // Проверяем совпадение паролей.
        if (password !== passwordConfirm) {
            alert("Пароли не совпадают.");
            return;
        }

        alert(
            "Форма регистрации заполнена. " +
            "Для реальной регистрации подключите сервер."
        );

        event.currentTarget.reset();
        registrationModal.close();
    });

// Обработка формы авторизации.
document
    .getElementById("auth-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();

        alert(
            "Форма входа заполнена. " +
            "Для настоящей авторизации нужен сервер."
        );

        event.currentTarget.reset();
        authModal.close();
    });
