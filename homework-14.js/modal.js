export class Modal {
    constructor(modalId, buttonId, shouldCloseOnOverlay) {
        this.modal = document.getElementById(modalId);
        this.overlay = document.getElementById('overlay');

        this.shouldCloseOnOverlay = shouldCloseOnOverlay;

        // Обработчик оверлея
        this.overlayClickHandler = () => {
            this.close();
        };

        this.#initOpen(buttonId);
        this.#initClose();
    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');

        // Закрытие по клику на оверлей
        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener(
                'click',
                this.overlayClickHandler
            );Collapse commentComment on lines R23 to R26freecree commented on Nov 14, 2026 freecreeon Nov 14, 2026More actionsв одну строку было бы удобнее, т.к строка не сильно длиннаяReactWrite a replyResolve comment
        }
    }

    close() {
        this.modal.classList.remove('modal-showed');

        // Удаляем обработчик оверлея
        this.overlay.removeEventListener('click', this.overlayClickHandler);

        // Проверяем открытые окна
        const openedModals = document.querySelectorAll(
            '.modal.modal-showed'
        );

        // Скрываем оверлей, если окон нет
        if (openedModals.length === 0) {
            this.overlay.classList.remove('overlay-showed');
        }
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    #initOpen(buttonId) {
        const button = document.getElementById(buttonId);

        button.addEventListener('click', () => {
            this.open();
        });
    }

    #initClose() {
        const closeButton = this.modal.querySelector(
            '.modal-close-button'
        );

        closeButton.addEventListener('click', () => {
            this.close();
        });
    }
}
