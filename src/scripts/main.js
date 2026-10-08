import '../styles/main.css';
import { initNav, initScrollAnimations, initCounters, initChartBars, initFaq, initCopyCode } from './animations.js';
import { initWhitelist, handleAuthSubmit, handlePurchase } from './whitelist.js';
import { initNodeCanvas } from './node-canvas.js';

function injectModal() {
  if (document.getElementById('whitelist-modal')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div id="whitelist-modal" class="modal-overlay" aria-hidden="true" role="dialog" aria-labelledby="whitelist-modal-title">
      <div class="modal">
        <div class="modal-icon" aria-hidden="true">🔒</div>
        <h3 id="whitelist-modal-title">Waitlist Access Required</h3>
        <p id="whitelist-modal-msg">Access is currently limited to approved waitlist members. Contact us to request access.</p>
        <button id="whitelist-modal-close" class="btn btn-primary">Got it</button>
      </div>
    </div>
  `);
}

document.addEventListener('DOMContentLoaded', () => {
  injectModal();
  initNav();
  initScrollAnimations();
  initCounters();
  initChartBars();
  initFaq();
  initCopyCode();
  initWhitelist();
  initNodeCanvas('hero-canvas');

  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  if (loginForm) handleAuthSubmit(loginForm, 'login');
  if (registerForm) handleAuthSubmit(registerForm, 'register');

  document.querySelectorAll('[data-purchase]').forEach(handlePurchase);
});
