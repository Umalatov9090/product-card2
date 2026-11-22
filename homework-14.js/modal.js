export class Modal {
    constructor(modalId, buttonId, shouldCloseOnOverlay = false) {
        this.modal = document.getElementById(modalId);
        this.overlay = document.getElementById('overlay');
        this.shouldCloseOnOverlay = shouldCloseOnOverlay;
        this.overlayClickHandler = () => this.close();

        const openButton = document.getElementById(buttonId);
        const closeButton = this.modal?.querySelector('.modal-close-button');

        if (!this.modal || !this.overlay || !openButton || !closeButton) {
            throw new Error(`Не удалось настроить модальное окно "${modalId}"`);
        }

        openButton.addEventListener('click', () => this.open());
        closeButton.addEventListener('click', () => this.close());
    }

    open() {
        if (Modal.activeModal && Modal.activeModal !== this) {
            Modal.activeModal.close();
        }

        this.modal.classList.add('modal-showed');
        this.modal.setAttribute('aria-hidden', 'false');
        this.overlay.classList.add('overlay-showed');

        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener('click', this.overlayClickHandler);
        }

        Modal.activeModal = this;
    }

    close() {
        this.modal.classList.remove('modal-showed');
        this.modal.setAttribute('aria-hidden', 'true');
        this.overlay.removeEventListener('click', this.overlayClickHandler);

        if (Modal.activeModal === this) {
            Modal.activeModal = null;
        }

        if (!document.querySelector('.modal.modal-showed')) {
            this.overlay.classList.remove('overlay-showed');
        }
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }
}

Modal.activeModal = null;
