/* Imports */

import { signUpUser } from './fetch-utils.js';

/* Get DOM Elements */
const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');
/* State */

/* Events */
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = await signUpUser(signUpEmail.value, signUpPassword.value);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
