export class Form {
  constructor(formId) {
    this.element = document.getElementById(formId);

    if (!(this.element instanceof HTMLFormElement)) {
      throw new Error(`Форма с id "${formId}" не найдена`);
    }
  }

  getValues() {
    return Object.fromEntries(new FormData(this.element));
  }

  isValid() {
    const isValid = this.element.checkValidity();

    if (!isValid) {
      this.element.reportValidity();
    }

    return isValid;
  }

  reset() {
    this.element.reset();
  }
}
