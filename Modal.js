export class Modal {
  constructor(modalId) {
    this.element = document.getElementById(modalId);

    if (!this.element) {
      throw new Error(`Модальное окно с id "${modalId}" не найдено`);
    }

    this.listenCloseButton();
  }

  open() {
    this.element.classList.add('modal-showed');
    this.element.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  close() {
    this.element.classList.remove('modal-showed');
    this.element.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  isOpen() {
    return this.element.classList.contains('modal-showed');
  }

  listenCloseButton() {
    const closeButton = this.element.querySelector('.modal__close');
    const overlay = this.element.querySelector('.overlay');

    if (!closeButton) {
      throw new Error('В модальном окне не найдена кнопка закрытия');
    }

    closeButton.addEventListener('click', () => this.close());
    overlay?.addEventListener('click', () => this.close());
  }
}
