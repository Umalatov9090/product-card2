import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './Products.js';
import './homework-13.js';

import { Modal } from './Modal.js';

// Окно регистрации
const registrationModal = new Modal(
    'registration-modal',
    'registration-button',
    true
);

// Окно авторизации
const authModal = new Modal(
    'auth-modal',
    'auth-button',
    false
);
