/* ============================================================
   SKYBUD Forms — Form 2: Engineering Call Interview (form-engineering.js)
   ============================================================ */

var STORAGE_KEY = 'skybud_form2';

/* --- Toast --- */
function showToast(message, type, duration, actionLabel, actionCallback) {
  type = type || 'info';
  duration = duration || 3500;

  var existing = document.querySelector('.toast');
  if (existing) {
    clearTimeout(existing._timer);
    existing.remove();
  }

  var toast = document.createElement('div');
  toast.className = 'toast toast--' + type;

  var text = document.createElement('span');
  text.style.flex = '1';
  text.textContent = message;
  toast.appendChild(text);

  if (actionLabel && actionCallback) {
    var actionBtn = document.createElement('button');
    actionBtn.className = 'toast__action';
    actionBtn.textContent = actionLabel;
    actionBtn.onclick = function() {
      hideToast(toast);
      actionCallback();
    };
    toast.appendChild(actionBtn);
  }

  var closeBtn = document.createElement('button');
  closeBtn.className = 'toast__close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Закрыть');
  closeBtn.onclick = function() { hideToast(toast); };
  toast.appendChild(closeBtn);

  document.body.appendChild(toast);

  if (duration > 0) {
    toast._timer = setTimeout(function() { hideToast(toast); }, duration);
  }

  return toast;
}

function hideToast(toast) {
  if (!toast || !toast.parentNode) return;
  clearTimeout(toast._timer);
  toast.classList.add('hiding');
  setTimeout(function() {
    if (toast.parentNode) toast.remove();
  }, 280);
}

/* --- Инициализация --- */
document.addEventListener('DOMContentLoaded', function() {
  setDefaultDate();
  initB2BToggle();
  restoreFormData();
  initAutoSave();
  initFormClear();
  initPDFDownload();
  checkBlankMode();
  updatePrintDate();
});

/* --- Дата по умолчанию --- */
function setDefaultDate() {
  var dateField = document.getElementById('call-date');
  if (dateField && !dateField.value) {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    dateField.value = yyyy + '-' + mm + '-' + dd;
  }
}

/* --- B2B Toggle --- */
function initB2BToggle() {
  var radios = document.querySelectorAll('input[name="client-type"]');
  radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      toggleB2BSection(this.value === 'b2b');
    });
  });
}

function toggleB2BSection(show) {
  var b2bSection = document.getElementById('b2b-section');
  if (!b2bSection) return;
  if (show) {
    b2bSection.classList.add('b2b-visible');
  } else {
    b2bSection.classList.remove('b2b-visible');
  }
}

/* --- Генерация PDF через window.print() --- */
function downloadPDF() {
  var clientNameEl = document.getElementById('client-name');
  var callDateEl = document.getElementById('call-date');

  var clientName = (clientNameEl && clientNameEl.value.trim()) ? clientNameEl.value.trim() : 'NoName';
  var callDate = (callDateEl && callDateEl.value) ? callDateEl.value : new Date().toISOString().slice(0, 10);

  // Безопасное имя файла
  clientName = clientName.replace(/[^\wА-яёЁа-яЁ\s\-]/gi, '').replace(/\s+/g, '_').slice(0, 40);

  var originalTitle = document.title;

  // B2B управление в PDF
  var clientTypeChecked = document.querySelector('input[name="client-type"]:checked');
  var isB2B = clientTypeChecked && clientTypeChecked.value === 'b2b';
  var b2bSection = document.getElementById('b2b-section');

  if (!isB2B && b2bSection) {
    b2bSection.classList.add('b2b-hidden-for-print');
  }

  updatePrintDate();
  document.title = 'SKYBUD_Engineering_Call_Interview_Form_' + clientName + '_' + callDate;

  window.print();

  document.title = originalTitle;
  if (b2bSection) b2bSection.classList.remove('b2b-hidden-for-print');
}

function updatePrintDate() {
  var printDateEl = document.getElementById('print-date');
  if (printDateEl) {
    var callDateEl = document.getElementById('call-date');
    var dateStr = (callDateEl && callDateEl.value) ? callDateEl.value : new Date().toISOString().slice(0, 10);
    var parts = dateStr.split('-');
    if (parts.length === 3) {
      printDateEl.textContent = parts[2] + '.' + parts[1] + '.' + parts[0];
    } else {
      printDateEl.textContent = dateStr;
    }
  }
}

/* --- Очистка формы --- */
function initFormClear() {
  var clearBtn = document.getElementById('btn-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearForm);
  }
}

function clearForm() {
  if (!confirm('Очистить все поля формы? Данные будут удалены из памяти браузера.')) return;

  document.querySelectorAll('input[type="text"], input[type="tel"], input[type="date"], input[type="number"], input[type="email"], textarea').forEach(function(el) {
    el.value = '';
  });

  document.querySelectorAll('input[type="radio"]').forEach(function(el) {
    el.checked = false;
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(function(el) {
    el.checked = false;
  });

  toggleB2BSection(false);
  setDefaultDate();

  try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}

  showToast('Форма очищена', 'success', 3000);
}

/* --- Автосохранение --- */
function initAutoSave() {
  document.querySelectorAll('input, textarea, select').forEach(function(el) {
    el.addEventListener('change', saveFormData);
    el.addEventListener('input', saveFormData);
  });
}

function getFormData() {
  var data = {};

  document.querySelectorAll('input[type="text"], input[type="tel"], input[type="date"], input[type="number"], input[type="email"], textarea').forEach(function(el) {
    if (el.id) data[el.id] = el.value;
  });

  document.querySelectorAll('input[type="radio"]:checked').forEach(function(el) {
    data['radio_' + el.name] = el.value;
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(function(el) {
    if (el.id) data['cb_' + el.id] = el.checked;
  });

  return data;
}

function saveFormData() {
  try {
    var data = getFormData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch(e) {}
}

function restoreFormData() {
  var saved;
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    saved = JSON.parse(raw);
  } catch(e) { return; }

  if (!saved || Object.keys(saved).length === 0) return;

  Object.keys(saved).forEach(function(key) {
    if (key.indexOf('radio_') === 0 || key.indexOf('cb_') === 0) return;
    var el = document.getElementById(key);
    if (el) el.value = saved[key];
  });

  Object.keys(saved).forEach(function(key) {
    if (key.indexOf('radio_') !== 0) return;
    var name = key.slice(6);
    var val = saved[key];
    var radio = document.querySelector('input[type="radio"][name="' + name + '"][value="' + val + '"]');
    if (radio) {
      radio.checked = true;
      if (name === 'client-type') toggleB2BSection(val === 'b2b');
    }
  });

  Object.keys(saved).forEach(function(key) {
    if (key.indexOf('cb_') !== 0) return;
    var id = key.slice(3);
    var el = document.getElementById(id);
    if (el) el.checked = !!saved[key];
  });

  showToast(
    'Восстановлены данные предыдущего сеанса',
    'info',
    0,
    'Очистить',
    function() { clearForm(); }
  );
}

/* --- Blank Mode --- */
function checkBlankMode() {
  var params = new URLSearchParams(window.location.search);
  if (params.get('blank') === 'true') {
    try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
    setTimeout(function() { window.print(); }, 800);
  }
}

/* --- initPDFDownload --- */
function initPDFDownload() {
  var pdfBtn = document.getElementById('btn-pdf');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', downloadPDF);
  }
}
