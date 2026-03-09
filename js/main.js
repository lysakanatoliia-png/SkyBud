/* ============================================================
   SKYBUD Forms — Main Page Logic (main.js)
   ============================================================ */

/**
 * Открыть форму по ссылке
 */
function openForm(url) {
  window.location.href = url;
}

/**
 * Открыть пустую форму в новой вкладке и запустить print
 */
function downloadBlankPDF(url) {
  window.open(url + '?blank=true', '_blank');
}

/**
 * Показать глобальное уведомление (toast)
 * @param {string} message - Текст уведомления
 * @param {'success'|'error'|'info'} type - Тип уведомления
 * @param {number} duration - Время показа в мс
 */
function showToast(message, type, duration) {
  type = type || 'info';
  duration = duration || 3500;

  // Удалить предыдущий toast если есть
  var existing = document.querySelector('.toast');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.className = 'toast toast--' + type;

  var text = document.createElement('span');
  text.textContent = message;
  toast.appendChild(text);

  var closeBtn = document.createElement('button');
  closeBtn.className = 'toast__close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Закрыть');
  closeBtn.onclick = function() { hideToast(toast); };
  toast.appendChild(closeBtn);

  document.body.appendChild(toast);

  var timer = setTimeout(function() { hideToast(toast); }, duration);
  toast._timer = timer;

  return toast;
}

/**
 * Скрыть toast с анимацией
 */
function hideToast(toast) {
  if (!toast || !toast.parentNode) return;
  clearTimeout(toast._timer);
  toast.classList.add('hiding');
  setTimeout(function() {
    if (toast.parentNode) toast.remove();
  }, 280);
}
