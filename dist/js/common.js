/* Briggstone.in — Shared utilities */
(function () {
  'use strict';

  const WHITELIST_KEY = 'briggstone_whitelist';
  const WHITELISTED_DOMAINS = [
    '@briggstone.in',
    '@enterprise.briggstone.in',
    'admin@briggstone.in',
    'demo@briggstone.in'
  ];

  const WHITELISTED_EMAILS = [
    'admin@briggstone.in',
    'demo@briggstone.in',
    'architect@briggstone.in',
    'enterprise@briggstone.in'
  ];

  function createToastContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    return container;
  }

  window.showToast = function (message, type) {
    type = type || 'info';
    const container = createToastContainer();
    const toast = document.createElement('div');
    const colors = {
      success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      error: 'bg-red-50 border-red-200 text-red-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      warning: 'bg-amber-50 border-amber-200 text-amber-800'
    };
    toast.className =
      'pointer-events-auto px-4 py-3 rounded-xl border shadow-lg text-sm font-medium transition-all duration-300 translate-x-0 opacity-100 ' +
      (colors[type] || colors.info);
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(1rem)';
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 3500);
  };

  window.copyToClipboard = function (text, successMsg) {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        showToast(successMsg || 'Copied to clipboard', 'success');
      })
      .catch(function () {
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
          showToast('Failed to copy', 'error');
        }
        document.body.removeChild(ta);
      });
  };

  window.isWhitelisted = function (email) {
    if (!email) return false;
    const normalized = email.trim().toLowerCase();
    if (WHITELISTED_EMAILS.indexOf(normalized) !== -1) return true;
    return WHITELISTED_DOMAINS.some(function (domain) {
      return normalized.endsWith(domain.toLowerCase());
    });
  };

  window.checkWhitelistAccess = function (email, callback) {
    setTimeout(function () {
      const allowed = isWhitelisted(email);
      if (allowed) {
        try {
          localStorage.setItem(WHITELIST_KEY, JSON.stringify({ email: email, ts: Date.now() }));
        } catch (e) { /* ignore */ }
      }
      callback(allowed);
    }, 800);
  };

  window.getWhitelistSession = function () {
    try {
      const raw = localStorage.getItem(WHITELIST_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  };

  window.initMobileNav = function () {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      const open = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!open));
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
  });
})();
