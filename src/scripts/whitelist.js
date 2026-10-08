// Whitelist configuration — only these emails can register, login, or purchase
export const WHITELIST = [
  'admin@noderefine.help',
  'demo@noderefine.help',
  'enterprise@noderefine.help',
];

export function isWhitelisted(email) {
  if (!email) return false;
  return WHITELIST.includes(email.toLowerCase().trim());
}

export function showWhitelistModal(message) {
  const overlay = document.getElementById('whitelist-modal');
  const msgEl = document.getElementById('whitelist-modal-msg');
  if (overlay) {
    if (msgEl && message) msgEl.textContent = message;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
  }
}

export function hideWhitelistModal() {
  const overlay = document.getElementById('whitelist-modal');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }
}

export function initWhitelist() {
  document.querySelectorAll('[data-whitelist]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = el.dataset.whitelistMsg ||
        'Access is currently limited to approved waitlist members. Contact us to request access.';
      showWhitelistModal(msg);
    });
  });

  const closeBtn = document.getElementById('whitelist-modal-close');
  const overlay = document.getElementById('whitelist-modal');
  if (closeBtn) closeBtn.addEventListener('click', hideWhitelistModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) hideWhitelistModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideWhitelistModal();
  });
}

export function handleAuthSubmit(form, type) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('[name="email"]')?.value;
    if (isWhitelisted(email)) {
      const successMsg = type === 'login'
        ? 'Welcome back! Redirecting to dashboard...'
        : 'Account created successfully! Redirecting...';
      showWhitelistModal(successMsg);
    } else {
      showWhitelistModal(
        'This email is not on our approved waitlist. Please contact support@noderefine.help to request access.'
      );
    }
  });
}

export function handlePurchase(btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showWhitelistModal(
      'Purchasing is currently available to approved waitlist members only. Contact sales@noderefine.help for enterprise access.'
    );
  });
}
