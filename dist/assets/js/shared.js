/* Vectoris.dev — Shared UI utilities */
(function () {
  'use strict';

  function ensureToastContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed top-4 right-4 z-[9999] flex flex-col gap-2 max-w-sm';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    return container;
  }

  window.showToast = function (message, type) {
    type = type || 'info';
    const container = ensureToastContainer();
    const toast = document.createElement('div');
    const colors = {
      success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      error: 'bg-red-50 border-red-200 text-red-800',
      info: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      warning: 'bg-amber-50 border-amber-200 text-amber-800'
    };
    toast.className =
      'px-4 py-3 rounded-xl border shadow-lg text-sm font-medium transition-all duration-300 translate-x-0 opacity-100 ' +
      (colors[type] || colors.info);
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(function () { toast.remove(); }, 300);
    }, 3200);
  };

  window.copyToClipboard = function (text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast(successMsg || 'Copied to clipboard', 'success');
      }).catch(function () {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  };

  function fallbackCopy(text, successMsg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMsg || 'Copied to clipboard', 'success');
    } catch (e) {
      showToast('Copy failed — please copy manually', 'error');
    }
    document.body.removeChild(ta);
  }

  window.handleWhitelistForm = function (form, eventName) {
    if (eventName) event.preventDefault();
    const email = (form.querySelector('[name="email"]') || {}).value || '';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address', 'warning');
      return;
    }
    showToast(
      'Vectoris.dev is currently in private beta. Your request has been queued for whitelist review. We will contact you at ' + email + '.',
      'info'
    );
    form.reset();
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-copy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        copyToClipboard(btn.getAttribute('data-copy'), btn.getAttribute('data-copy-msg'));
      });
    });
    document.querySelectorAll('[data-whitelist-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        handleWhitelistForm(form);
      });
    });
  });
})();
