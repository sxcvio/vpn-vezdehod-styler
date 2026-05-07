// VPN Vezdehod Styler v3 — SPA-совместимый, CSS вшит внутрь
(function () {
  'use strict';
  const KEY = 'vpn_styler_theme';
  const STYLE_ID = 'vpn-styler-css';
  let currentTheme = 'none';

  const CSS = `
html[data-vpn="dark-midnight"]{--bg:#0d0d0f;--bg2:#141418;--bg3:#1c1c23;--surface:#1e1e28;--surface2:#252532;--border:#2e2e3e;--text:#e8e8f0;--text2:#9494aa;--text3:#5a5a70;--accent:#6c63ff;--accent-h:#7c74ff;--glow:rgba(108,99,255,0.3);--btn-text:#fff;--radius:10px;--font:'Inter',system-ui,sans-serif;--danger:#f87171;--success:#4ade80;}
html[data-vpn="cyberpunk"]{--bg:#060610;--bg2:#0a0a1a;--bg3:#0f0f22;--surface:#111128;--surface2:#16163a;--border:rgba(0,245,255,0.18);--text:#e0f7fa;--text2:#80deea;--text3:#4dd0e1;--accent:#00f5ff;--accent-h:#33f7ff;--glow:rgba(0,245,255,0.35);--btn-text:#000;--radius:3px;--font:'Courier New',monospace;--danger:#ff0044;--success:#39ff14;}
html[data-vpn="forest"]{--bg:#0a110d;--bg2:#0d1610;--bg3:#111d14;--surface:#152019;--surface2:#1a2a1e;--border:#2a4030;--text:#d4edd8;--text2:#8ab897;--text3:#527a5e;--accent:#4caf6e;--accent-h:#5ec97f;--glow:rgba(76,175,110,0.3);--btn-text:#fff;--radius:14px;--font:'Georgia',serif;--danger:#ff5252;--success:#69f0ae;}
html[data-vpn="light-minimal"]{--bg:#f4f5f7;--bg2:#eceef2;--bg3:#e2e5eb;--surface:#ffffff;--surface2:#f8f9fb;--border:#d8dce6;--text:#1a1d2e;--text2:#5a6070;--text3:#9aa0b2;--accent:#3b5bdb;--accent-h:#2f4abf;--glow:rgba(59,91,219,0.2);--btn-text:#fff;--radius:8px;--font:'Helvetica Neue',Arial,sans-serif;--danger:#c92a2a;--success:#2f9e44;}
html[data-vpn="sunset"]{--bg:#110805;--bg2:#1a0f07;--bg3:#22160a;--surface:#2a1a0d;--surface2:#342213;--border:rgba(90,46,10,0.5);--text:#ffe8d0;--text2:#d4956a;--text3:#8a5a3a;--accent:#ff6b35;--accent-h:#ff7d4d;--glow:rgba(255,107,53,0.35);--btn-text:#fff;--radius:8px;--font:'Trebuchet MS',sans-serif;--danger:#ff5252;--success:#69f0ae;}
html[data-vpn="arctic"]{--bg:#eef2fb;--bg2:#e4eaf8;--bg3:#d8e2f5;--surface:#ffffff;--surface2:#f0f4fc;--border:#bfceee;--text:#0d1b3e;--text2:#3a5494;--text3:#7a99cc;--accent:#1971c2;--accent-h:#145ea8;--glow:rgba(25,113,194,0.2);--btn-text:#fff;--radius:12px;--font:'Segoe UI',system-ui,sans-serif;--danger:#c92a2a;--success:#2f9e44;}
html[data-vpn="matrix"]{--bg:#000300;--bg2:#020602;--bg3:#040a04;--surface:#060e06;--surface2:#0a160a;--border:#0f3a0f;--text:#00cc44;--text2:#00aa33;--text3:#007722;--accent:#00ff44;--accent-h:#33ff66;--glow:rgba(0,255,68,0.25);--btn-text:#000;--radius:2px;--font:'Courier New',monospace;--danger:#ff2200;--success:#00ff44;}

html[data-vpn] body,html[data-vpn] html{background:var(--bg) !important;color:var(--text) !important;font-family:var(--font) !important;}
html[data-vpn] .paper-texture{background:var(--bg) !important;background-image:none !important;}
html[data-vpn] .cabinet-header,html[data-vpn] .cabinet-header-inner{background:var(--bg2) !important;border-bottom:1px solid var(--border) !important;}
html[data-vpn] .header-logo{color:var(--text) !important;}
html[data-vpn] .cabinet-nav,html[data-vpn] .cabinet-nav-inner{background:var(--bg2) !important;border-bottom:1px solid var(--border) !important;}
html[data-vpn] .nav-tab{color:var(--text2) !important;background:transparent !important;border:none !important;border-bottom:2px solid transparent !important;border-radius:0 !important;box-shadow:none !important;}
html[data-vpn] .nav-tab:hover{color:var(--text) !important;}
html[data-vpn] .nav-tab.active{color:var(--accent) !important;border-bottom-color:var(--accent) !important;}
html[data-vpn] .mobile-bottom-nav,html[data-vpn] .mobile-create-bar{background:var(--bg2) !important;border-top:1px solid var(--border) !important;}
html[data-vpn] .mobile-nav-btn{color:var(--text2) !important;background:transparent !important;border:none !important;box-shadow:none !important;}
html[data-vpn] .mobile-nav-btn.active{color:var(--accent) !important;}
html[data-vpn] .cabinet-body,html[data-vpn] .cabinet-content{background:var(--bg) !important;}
html[data-vpn] .cabinet-footer{background:var(--bg2) !important;border-top:1px solid var(--border) !important;color:var(--text3) !important;}
html[data-vpn] .connection-card{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;box-shadow:0 2px 8px rgba(0,0,0,0.15) !important;}
html[data-vpn] .connection-card:hover{border-color:var(--accent) !important;box-shadow:0 4px 20px var(--glow) !important;}
html[data-vpn] .connection-card-header{background:transparent !important;border-bottom:1px solid var(--border) !important;}
html[data-vpn] .connection-name{color:var(--text) !important;font-weight:600 !important;}
html[data-vpn] .connection-location,html[data-vpn] .connection-details{color:var(--text2) !important;background:transparent !important;}
html[data-vpn] .connection-detail-label,html[data-vpn] .connection-filename{color:var(--text3) !important;}
html[data-vpn] .connections-list,html[data-vpn] .connections-actions-row,html[data-vpn] .connection-badges{background:transparent !important;}
html[data-vpn] .connections-empty-icon{color:var(--text3) !important;}
html[data-vpn] .connections-empty-text{color:var(--text2) !important;}
html[data-vpn] .content-card{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] .section-title{color:var(--text) !important;}
html[data-vpn] .section-title-row{border-bottom:1px solid var(--border) !important;}
html[data-vpn] .connections-counter{color:var(--text2) !important;}
html[data-vpn] .filter-bar{background:var(--surface2) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;padding:3px !important;}
html[data-vpn] .filter-btn{background:transparent !important;border:none !important;box-shadow:none !important;color:var(--text2) !important;}
html[data-vpn] .filter-btn.active{background:var(--accent) !important;color:var(--btn-text) !important;border-radius:calc(var(--radius) - 2px) !important;}
html[data-vpn] .segments-box{background:var(--surface2) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;padding:3px !important;}
html[data-vpn] .segment{background:transparent !important;border:none !important;box-shadow:none !important;color:var(--text2) !important;}
html[data-vpn] .segment.active{background:var(--accent) !important;color:var(--btn-text) !important;}
html[data-vpn] .btn{border-radius:var(--radius) !important;font-family:var(--font) !important;}
html[data-vpn] .btn-primary{background:var(--accent) !important;border-color:var(--accent) !important;color:var(--btn-text) !important;box-shadow:0 3px 12px var(--glow) !important;}
html[data-vpn] .btn-primary:hover{background:var(--accent-h) !important;transform:translateY(-1px) !important;}
html[data-vpn] .btn-secondary{background:var(--surface2) !important;border:1px solid var(--border) !important;color:var(--text) !important;box-shadow:none !important;}
html[data-vpn] .btn-secondary:hover{border-color:var(--accent) !important;color:var(--accent) !important;}
html[data-vpn] .btn-action{background:var(--surface2) !important;border:1px solid var(--border) !important;color:var(--text2) !important;box-shadow:none !important;}
html[data-vpn] .btn-action:hover{border-color:var(--accent) !important;color:var(--accent) !important;}
html[data-vpn] .btn-action-danger{background:var(--surface2) !important;border:1px solid var(--border) !important;color:var(--text3) !important;box-shadow:none !important;}
html[data-vpn] .btn-action-danger:hover{border-color:var(--danger) !important;color:var(--danger) !important;}
html[data-vpn] .btn-lang,html[data-vpn] .btn-header-action,html[data-vpn] .btn-icon-refresh{background:var(--surface2) !important;border:1px solid var(--border) !important;color:var(--text2) !important;box-shadow:none !important;}
html[data-vpn] input[type=text],html[data-vpn] input[type=email],html[data-vpn] input[type=password],html[data-vpn] textarea,html[data-vpn] select{background:var(--bg3) !important;border:1px solid var(--border) !important;color:var(--text) !important;border-radius:8px !important;font-family:var(--font) !important;}
html[data-vpn] input:focus,html[data-vpn] textarea:focus{border-color:var(--accent) !important;box-shadow:0 0 0 3px var(--glow) !important;outline:none !important;}
html[data-vpn] input::placeholder{color:var(--text3) !important;}
html[data-vpn] .field-error,html[data-vpn] .error-msg{color:var(--danger) !important;}
html[data-vpn] .protocol-badge{background:var(--surface2) !important;color:var(--accent) !important;border:1px solid var(--border) !important;border-radius:999px !important;}
html[data-vpn] .login-card{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;box-shadow:0 8px 32px rgba(0,0,0,0.4) !important;}
html[data-vpn] .auth-tabs{background:var(--bg2) !important;border-bottom:1px solid var(--border) !important;}
html[data-vpn] .auth-tab{background:transparent !important;border:none !important;box-shadow:none !important;color:var(--text2) !important;border-bottom:2px solid transparent !important;border-radius:0 !important;}
html[data-vpn] .auth-tab.active{color:var(--accent) !important;border-bottom-color:var(--accent) !important;}
html[data-vpn] .subscription-plan{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] .subscription-plan.selected,html[data-vpn] .subscription-plan:hover{border-color:var(--accent) !important;box-shadow:0 0 0 2px var(--glow) !important;}
html[data-vpn] .subscription-history-card{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] .subscription-history-header{color:var(--text) !important;border-bottom:1px solid var(--border) !important;}
html[data-vpn] .profile-block{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] .profile-badge{background:var(--surface2) !important;color:var(--text2) !important;border:1px solid var(--border) !important;}
html[data-vpn] .profile-prompt-banner{background:var(--surface2) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] .create-step-title{color:var(--text) !important;}
html[data-vpn] .create-step-hint{color:var(--text2) !important;}
html[data-vpn] .name-suggestion{background:var(--surface2) !important;border:1px solid var(--border) !important;color:var(--text) !important;border-radius:8px !important;box-shadow:none !important;}
html[data-vpn] .name-suggestion:hover{border-color:var(--accent) !important;color:var(--accent) !important;}
html[data-vpn] .deeplink-box{background:var(--surface2) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] a{color:var(--accent) !important;}
html[data-vpn] a:hover{color:var(--accent-h) !important;}
html[data-vpn] h1,html[data-vpn] h2,html[data-vpn] h3,html[data-vpn] h4{color:var(--text) !important;}
html[data-vpn] .spinner{border-top-color:var(--accent) !important;}
html[data-vpn] ::-webkit-scrollbar{width:5px;height:5px;}
html[data-vpn] ::-webkit-scrollbar-track{background:var(--bg);}
html[data-vpn] ::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px;}
html[data-vpn] ::-webkit-scrollbar-thumb:hover{background:var(--accent);}

/* CYBERPUNK */
html[data-vpn="cyberpunk"] body::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:9999;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,245,255,0.012) 2px,rgba(0,245,255,0.012) 4px);}
html[data-vpn="cyberpunk"] .btn{clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px)) !important;border-radius:0 !important;letter-spacing:1.5px !important;text-transform:uppercase !important;}
html[data-vpn="cyberpunk"] .connection-card{box-shadow:0 0 15px var(--glow),inset 0 0 20px rgba(0,245,255,0.02) !important;}

/* MATRIX */
html[data-vpn="matrix"] *{font-family:'Courier New',monospace !important;}
html[data-vpn="matrix"] .section-title,html[data-vpn="matrix"] .connection-name{text-shadow:0 0 8px var(--accent) !important;}
html[data-vpn="matrix"] .btn-primary{background:transparent !important;border:1px solid var(--accent) !important;color:var(--accent) !important;box-shadow:0 0 10px var(--glow),inset 0 0 8px var(--glow) !important;text-transform:uppercase !important;letter-spacing:2px !important;}

/* SUNSET */
html[data-vpn="sunset"] .section-title{background:linear-gradient(90deg,#ff6b35,#ff9a5e);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

/* ARCTIC */
html[data-vpn="arctic"] .connection-card,html[data-vpn="arctic"] .login-card,html[data-vpn="arctic"] .content-card{backdrop-filter:blur(12px) !important;background:rgba(255,255,255,0.88) !important;}

/* ===== ПРОФИЛЬ — внутренние блоки ===== */
html[data-vpn] .profile-block-header{background:transparent !important;border-bottom:1px solid var(--border) !important;padding-bottom:8px !important;}
html[data-vpn] .profile-block-body{background:transparent !important;}
html[data-vpn] .profile-block-icon{color:var(--text2) !important;}
html[data-vpn] .profile-block-title{color:var(--text) !important;font-weight:600 !important;}
html[data-vpn] .profile-email-display{background:transparent !important;}
html[data-vpn] .profile-email-address{color:var(--text) !important;}
html[data-vpn] .profile-email-badge{background:var(--surface2) !important;border:1px solid var(--border) !important;color:var(--text2) !important;}
html[data-vpn] .profile-email-badge.verified{color:var(--success) !important;border-color:var(--success) !important;background:rgba(74,222,128,0.08) !important;}
html[data-vpn] .profile-hint-text{color:var(--text3) !important;}
html[data-vpn] .profile-actions{background:transparent !important;}
html[data-vpn] .profile-email-input{background:var(--bg3) !important;border:1px solid var(--border) !important;border-radius:8px !important;}
html[data-vpn] .profile-email-input input{background:transparent !important;border:none !important;}

/* ===== ПОДДЕРЖКА ===== */
html[data-vpn] .support-content{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] .support-help-block{background:var(--surface2) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;color:var(--text) !important;}
html[data-vpn] .support-help-block *{color:var(--text) !important;}
html[data-vpn] .support-help-block a{color:var(--accent) !important;}

/* Аккордеон инструкций в поддержке */
html[data-vpn] details{background:transparent !important;color:var(--text) !important;border-bottom:1px solid var(--border) !important;}
html[data-vpn] details[open]{background:var(--surface2) !important;}
html[data-vpn] details:last-child{border-bottom:none !important;}
html[data-vpn] summary{background:transparent !important;color:var(--text) !important;padding:10px 12px !important;cursor:pointer !important;list-style:none !important;border:none !important;}
html[data-vpn] summary::-webkit-details-marker{display:none !important;}
html[data-vpn] summary:hover{background:rgba(108,99,255,0.07) !important;border-radius:6px !important;}
html[data-vpn] li,html[data-vpn] ul,html[data-vpn] ol{background:transparent !important;color:var(--text) !important;}

/* Строки внутри поддержки (AmneziaWG, Роутеры...) */
html[data-vpn] .support-content > *{border-color:var(--border) !important;}
html[data-vpn] [class*="support-"]{background:transparent !important;color:var(--text) !important;border-color:var(--border) !important;}
html[data-vpn] [class*="support-"] a{color:var(--accent) !important;}

/* ===== TELEGRAM BANNER ===== */
html[data-vpn] .tg-origin-banner{background:var(--surface2) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;color:var(--text) !important;}

/* ===== ПОДПИСКА — доп блоки ===== */
html[data-vpn] .subscription-status-card,html[data-vpn] .subscription-limits-card{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] .payment-share-block{background:var(--surface2) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}

/* ===== ОПЛАТА — тарифные планы ===== */
html[data-vpn] .payment-plans-grid{background:transparent !important;}
html[data-vpn] .create-step{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;color:var(--text) !important;}
html[data-vpn] .create-step-title{color:var(--text) !important;}
html[data-vpn] .create-step-hint{color:var(--text2) !important;}
html[data-vpn] .payment-plan-card{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;color:var(--text) !important;}
html[data-vpn] .payment-plan-card:hover{border-color:var(--accent) !important;box-shadow:0 0 0 2px var(--glow) !important;}
html[data-vpn] .payment-plan-card.selected{border-color:var(--accent) !important;box-shadow:0 0 0 2px var(--glow) !important;background:rgba(108,99,255,0.07) !important;}
html[data-vpn] .payment-plan-name{color:var(--text2) !important;}
html[data-vpn] .payment-plan-price{color:var(--text) !important;font-weight:700 !important;}
html[data-vpn] .payment-methods-list{background:transparent !important;}
html[data-vpn] .payment-submit{background:transparent !important;}
html[data-vpn] .payment-error{color:var(--danger) !important;}
html[data-vpn] .payment-success-msg{color:var(--success) !important;}
html[data-vpn] .payment-checking-loader,.payment-checking-text{color:var(--text2) !important;}

/* ===== ГЛОБАЛЬНОЕ ПОКРЫТИЕ белых div без класса ===== */
html[data-vpn] div{color:inherit !important;}
html[data-vpn] div:not([class]){background:transparent !important;}

/* ===== QR МОДАЛКА ===== */
html[data-vpn] .qr-modal-overlay{background:rgba(0,0,0,0.7) !important;backdrop-filter:blur(4px) !important;}
html[data-vpn] .qr-modal-card{background:var(--surface) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;box-shadow:0 20px 60px rgba(0,0,0,0.5) !important;color:var(--text) !important;}
html[data-vpn] .qr-modal-title{color:var(--text) !important;}
html[data-vpn] .qr-modal-close{background:var(--surface2) !important;border:1px solid var(--border) !important;color:var(--text2) !important;box-shadow:none !important;}
html[data-vpn] .qr-modal-close:hover{border-color:var(--accent) !important;color:var(--accent) !important;}
html[data-vpn] .qr-modal-image{background:white !important;padding:8px !important;border-radius:8px !important;}
html[data-vpn] .qr-skeleton,.qr-modal-loading{background:var(--surface2) !important;}

/* ===== БЛОК ССЫЛКИ ===== */
html[data-vpn] .copy-link-panel{background:var(--surface2) !important;border:1px solid var(--border) !important;border-radius:var(--radius) !important;}
html[data-vpn] .copy-link-url{color:var(--accent) !important;background:transparent !important;}
html[data-vpn] .copy-link-hint{color:var(--text3) !important;background:transparent !important;}
html[data-vpn] .btn-copy{background:var(--surface) !important;border:1px solid var(--border) !important;color:var(--text) !important;box-shadow:none !important;border-radius:8px !important;}
html[data-vpn] .btn-copy:hover{border-color:var(--accent) !important;color:var(--accent) !important;}
`;

  function injectStyles() {
    if (!document.getElementById(STYLE_ID)) {
      const s = document.createElement('style');
      s.id = STYLE_ID;
      s.textContent = CSS;
      (document.head || document.documentElement).appendChild(s);
    }
  }

  function applyTheme(theme) {
    currentTheme = theme || 'none';
    injectStyles();
    if (!theme || theme === 'none') {
      document.documentElement.removeAttribute('data-vpn');
    } else {
      document.documentElement.setAttribute('data-vpn', theme);
    }
  }

  // MutationObserver — следим за SPA переходами
  new MutationObserver(() => {
    if (!document.getElementById(STYLE_ID)) injectStyles();
    if (currentTheme !== 'none') {
      if (document.documentElement.getAttribute('data-vpn') !== currentTheme) {
        document.documentElement.setAttribute('data-vpn', currentTheme);
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: false });

  // Инит
  injectStyles();
  chrome.storage.local.get([KEY], (r) => { if (r[KEY]) applyTheme(r[KEY]); });
  chrome.runtime.onMessage.addListener((msg) => { if (msg.type === 'SET_THEME') applyTheme(msg.theme); });

})();
// PATCH APPENDED — не удалять

// =============================================
// КНОПКА В ШАПКЕ С ВЫПАДАЮЩИМ МЕНЮ ТЕМ
// =============================================

(function() {
  const KEY2 = 'vpn_styler_theme';
  const BTN_ID = 'vpn-styler-btn';
  const MENU_ID = 'vpn-styler-menu';

  const THEMES = [
    { id: 'none',          emoji: '↺', name: 'Оригинал' },
    { id: 'dark-midnight', emoji: '🌑', name: 'Dark Midnight' },
    { id: 'cyberpunk',     emoji: '⚡', name: 'Cyberpunk Neon' },
    { id: 'forest',        emoji: '🌲', name: 'Forest Green' },
    { id: 'light-minimal', emoji: '☀️', name: 'Light Minimal' },
    { id: 'sunset',        emoji: '🌅', name: 'Sunset Orange' },
    { id: 'arctic',        emoji: '❄️', name: 'Arctic Ice' },
    { id: 'matrix',        emoji: '💻', name: 'Matrix' },
  ];

  let activeTheme = 'none';

  function setTheme(id) {
    activeTheme = id || 'none';
    chrome.storage.local.set({ [KEY2]: activeTheme });
    if (!activeTheme || activeTheme === 'none') {
      document.documentElement.removeAttribute('data-vpn');
    } else {
      document.documentElement.setAttribute('data-vpn', activeTheme);
    }
    updateMenuActive();
  }

  // Определяем светлая ли сейчас тема
  function isLightTheme() {
    return activeTheme === 'light-minimal' || activeTheme === 'arctic' || activeTheme === 'none';
  }

  // Цвета меню в зависимости от темы
  function menuColors() {
    if (isLightTheme()) {
      return {
        bg: 'rgba(255,255,255,0.95)',
        border: 'rgba(180,190,220,0.6)',
        titleColor: '#8892aa',
        titleBorder: 'rgba(180,190,220,0.5)',
        itemColor: '#1a1d2e',
        itemActiveBg: 'rgba(59,91,219,0.1)',
        itemActiveColor: '#3b5bdb',
        checkColor: '#3b5bdb',
        hoverBg: 'rgba(59,91,219,0.07)',
        shadow: '0 12px 40px rgba(0,20,80,0.15), 0 0 0 1px rgba(0,0,0,0.04)',
      };
    }
    return {
      bg: 'rgba(18,18,26,0.92)',
      border: 'rgba(80,80,120,0.35)',
      titleColor: '#55556a',
      titleBorder: 'rgba(60,60,80,0.6)',
      itemColor: '#d8d8ee',
      itemActiveBg: 'rgba(108,99,255,0.15)',
      itemActiveColor: '#a09aff',
      checkColor: '#6c63ff',
      hoverBg: 'rgba(108,99,255,0.1)',
      shadow: '0 12px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
    };
  }

  // Цвета кнопки в зависимости от темы
  function btnColors() {
    if (isLightTheme()) {
      return {
        border: 'rgba(100,120,200,0.35)',
        hoverBorder: 'rgba(59,91,219,0.7)',
        hoverBg: 'rgba(59,91,219,0.08)',
      };
    }
    return {
      border: 'rgba(128,128,160,0.3)',
      hoverBorder: 'rgba(108,99,255,0.6)',
      hoverBg: 'rgba(108,99,255,0.1)',
    };
  }

  function applyMenuColors() {
    const menu = document.getElementById(MENU_ID);
    if (!menu) return;
    const c = menuColors();
    menu.style.background = c.bg;
    menu.style.border = '1px solid ' + c.border;
    menu.style.boxShadow = c.shadow;
    const title = menu.querySelector('.styler-title');
    if (title) { title.style.color = c.titleColor; title.style.borderBottomColor = c.titleBorder; }
    menu.querySelectorAll('button[data-theme-id]').forEach(item => {
      const act = item.dataset.themeId === activeTheme;
      item.style.color = act ? c.itemActiveColor : c.itemColor;
      item.style.background = act ? c.itemActiveBg : 'transparent';
      item.style.fontWeight = act ? '600' : '400';
      const chk = item.querySelector('.theme-check');
      if (chk) { chk.style.opacity = act ? '1' : '0'; chk.style.color = c.checkColor; }
      // Перепривязываем hover с нужными цветами
      item._hoverBg = c.hoverBg;
      item._activeBg = c.itemActiveBg;
      item._activeColor = c.itemActiveColor;
      item._color = c.itemColor;
    });
  }

  function applyBtnColors() {
    const btn = document.getElementById(BTN_ID);
    if (!btn) return;
    const c = btnColors();
    btn.style.borderColor = c.border;
    btn._hoverBorder = c.hoverBorder;
    btn._hoverBg = c.hoverBg;
    btn._borderColor = c.border;
  }

  function buildMenu() {
    if (document.getElementById(MENU_ID)) return;
    const c = menuColors();

    const menu = document.createElement('div');
    menu.id = MENU_ID;
    menu.style.cssText = 'display:none;position:fixed;z-index:999999;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:13px;padding:6px;min-width:200px;font-family:system-ui,sans-serif;transition:opacity 0.15s;';
    menu.style.background = c.bg;
    menu.style.border = '1px solid ' + c.border;
    menu.style.boxShadow = c.shadow;

    const title = document.createElement('div');
    title.className = 'styler-title';
    title.style.cssText = 'padding:6px 10px 8px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.8px;border-bottom:1px solid;margin-bottom:4px;';
    title.style.color = c.titleColor;
    title.style.borderBottomColor = c.titleBorder;
    title.textContent = 'Выбор темы';
    menu.appendChild(title);

    THEMES.forEach(t => {
      const item = document.createElement('button');
      item.type = 'button';
      item.dataset.themeId = t.id;
      item.style.cssText = 'display:flex;align-items:center;gap:10px;width:100%;padding:7px 10px;background:transparent;border:none;border-radius:8px;font-size:13px;cursor:pointer;text-align:left;box-shadow:none;transition:background 0.1s,color 0.1s;';
      item.style.color = c.itemColor;
      item.innerHTML = '<span style="font-size:14px;width:20px;text-align:center;flex-shrink:0">' + t.emoji + '</span>'
        + '<span class="theme-name">' + t.name + '</span>'
        + '<span class="theme-check" style="margin-left:auto;font-size:11px;transition:opacity 0.1s;opacity:0">' + '✓' + '</span>';
      item.querySelector('.theme-check').style.color = c.checkColor;

      item.addEventListener('mouseenter', () => {
        if (item.dataset.themeId !== activeTheme) {
          item.style.background = item._hoverBg || c.hoverBg;
        }
      });
      item.addEventListener('mouseleave', () => {
        if (item.dataset.themeId !== activeTheme) item.style.background = 'transparent';
      });
      item.addEventListener('click', e => { e.stopPropagation(); setTheme(t.id); applyMenuColors(); applyBtnColors(); closeMenu(); });
      menu.appendChild(item);
    });

    document.body.appendChild(menu);
  }

  function buildButton() {
    if (document.getElementById(BTN_ID)) return;
    const headerRight = document.querySelector('.header-right');
    if (!headerRight) return;

    buildMenu();

    const c = btnColors();
    const btn = document.createElement('button');
    btn.id = BTN_ID;
    btn.type = 'button';
    btn.title = 'Сменить тему';
    // Текст кнопки: иконка + label
    btn.innerHTML = 'Тема';
    btn.style.cssText = 'background:transparent;border-radius:4px;color:inherit;cursor:pointer;padding:4px 10px;font-size:12.48px;font-weight:600;font-family:Poppins,Inter,sans-serif;line-height:17.472px;transition:border-color 0.15s,background 0.15s;flex-shrink:0;box-shadow:none;border:1px solid;';
    btn.style.borderColor = c.border;
    btn._hoverBorder = c.hoverBorder;
    btn._hoverBg = c.hoverBg;
    btn._borderColor = c.border;

    btn.addEventListener('mouseenter', () => {
      btn.style.borderColor = btn._hoverBorder || c.hoverBorder;
      btn.style.background = btn._hoverBg || c.hoverBg;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.borderColor = btn._borderColor || c.border;
      btn.style.background = 'transparent';
    });
    btn.addEventListener('click', e => { e.stopPropagation(); toggleMenu(btn); });

    document.addEventListener('click', closeMenu);
    headerRight.insertBefore(btn, headerRight.firstChild);
  }

  function toggleMenu(btn) {
    const menu = document.getElementById(MENU_ID);
    if (!menu) return;
    if (menu.style.display === 'none') {
      applyMenuColors();
      updateMenuActive();
      menu.style.display = 'block';
      const rect = btn.getBoundingClientRect();
      menu.style.top = (rect.bottom + 6) + 'px';
      menu.style.right = (window.innerWidth - rect.right) + 'px';
      menu.style.left = 'auto';
    } else {
      closeMenu();
    }
  }

  function closeMenu() {
    const m = document.getElementById(MENU_ID);
    if (m) m.style.display = 'none';
  }

  function updateMenuActive() {
    const menu = document.getElementById(MENU_ID);
    if (!menu) return;
    const c = menuColors();
    menu.querySelectorAll('button[data-theme-id]').forEach(item => {
      const active = item.dataset.themeId === activeTheme;
      item.style.background = active ? c.itemActiveBg : 'transparent';
      item.style.fontWeight = active ? '600' : '400';
      item.style.color = active ? c.itemActiveColor : c.itemColor;
      const check = item.querySelector('.theme-check');
      if (check) { check.style.opacity = active ? '1' : '0'; check.style.color = c.checkColor; }
    });
  }

  // Наблюдатель за DOM (SPA)
  new MutationObserver(() => {
    if (!document.getElementById(BTN_ID) && document.querySelector('.header-right')) buildButton();
  }).observe(document.documentElement, { childList: true, subtree: true });

  // Инит
  chrome.storage.local.get([KEY2], r => {
    activeTheme = r[KEY2] || 'none';
    setTimeout(buildButton, 400);
  });

  // Синхронизация с попапом
  chrome.runtime.onMessage.addListener(msg => {
    if (msg.type === 'SET_THEME') { activeTheme = msg.theme || 'none'; updateMenuActive(); }
  });
})();
