const KEY = 'vpn_styler_theme';
const NAMES = {
  'dark-midnight': 'Dark Midnight',
  'cyberpunk': 'Cyberpunk Neon',
  'forest': 'Forest Green',
  'light-minimal': 'Light Minimal',
  'sunset': 'Sunset Orange',
  'arctic': 'Arctic Ice',
  'matrix': 'Matrix Terminal',
  'none': 'Оригинал'
};

function updateUI(theme) {
  document.getElementById('lbl').textContent = NAMES[theme] || 'Оригинал';
  document.querySelectorAll('.theme-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.t === theme);
  });
}

function setTheme(theme) {
  chrome.storage.local.set({ [KEY]: theme });
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (!tabs[0]) return;
    chrome.tabs.sendMessage(tabs[0].id, { type: 'SET_THEME', theme });
  });
  updateUI(theme);
}

chrome.storage.local.get([KEY], r => updateUI(r[KEY] || 'none'));

document.querySelectorAll('.theme-btn').forEach(b => {
  b.addEventListener('click', () => setTheme(b.dataset.t));
});

document.getElementById('reset').addEventListener('click', () => {
  chrome.storage.local.remove(KEY);
  setTheme('none');
});
