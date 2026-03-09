# SKYBUD Forms

Система форм интервью клиентов компании SKYBUD. Деплоится на GitHub Pages.

## Структура

```
/
├── index.html                          — главная страница с каталогом форм
├── client-call-interview-form.html     — Форма интервью клиента
├── engineering-call-interview-form.html — Engineering Call Interview Form
├── css/
│   ├── styles.css                      — основные стили
│   └── print.css                       — стили для печати и PDF
├── js/
│   ├── main.js                         — логика главной страницы
│   ├── form-client.js                  — логика формы 1
│   └── form-engineering.js             — логика формы 2
└── README.md
```

## Деплой на GitHub Pages

1. Залить все файлы в репозиторий
2. Settings → Pages → Source: main branch / root
3. Сайт доступен по адресу: `https://[username].github.io/[repo-name]/`

## Генерация PDF

Используется нативный `window.print()`. В браузере выбрать "Сохранить как PDF".
Название файла задаётся автоматически через `document.title`:

- Форма 1: `SKYBUD_Call_Interview_Form_[ИмяКлиента]_[Дата].pdf`
- Форма 2: `SKYBUD_Engineering_Call_Interview_Form_[ИмяКлиента]_[Дата].pdf`

## Скачать пустой шаблон PDF

Нажать кнопку **«Скачать пустой PDF»** на главной странице — форма откроется в новой вкладке с пустыми полями и автоматически запустит диалог печати.

Также можно добавить параметр `?blank=true` к URL любой формы вручную.

## Автосохранение

Данные форм сохраняются в `localStorage` браузера автоматически при каждом изменении поля.
При повторном открытии формы — показывается уведомление с предложением восстановить данные или очистить форму.

- Форма 1: ключ `skybud_form1`
- Форма 2: ключ `skybud_form2`

## B2B-секция

Блок «Дополнительно для B2B» скрыт по умолчанию и показывается только при выборе типа клиента **B2B**.
При печати PDF с B2C-клиентом секция B2B автоматически скрывается из документа.

## Технологии

- Чистый HTML5, CSS3, Vanilla JavaScript
- Никаких фреймворков и сборщиков
- Шрифты: [Manrope](https://fonts.google.com/specimen/Manrope) + [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) через Google Fonts CDN
- Работает при открытии `index.html` напрямую из файловой системы (`file://`)
