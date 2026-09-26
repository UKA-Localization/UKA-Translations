# UKA Translations

Публічний каталог українських локалізацій ігор від [UKA Localization](https://github.com/UKA-Localization). Сторінка розміщена на GitHub Pages.

## Як додати проєкт

1. Переконайтеся, що репозиторій локалізації публічний і його `README.md` пояснює поточний стан перекладу та спосіб встановлення.
2. Додайте до `<div id="project-rows">` в `index.html` новий блок `<article class="project-row" data-name="Назва гри">` за зразком наявних. Змініть скріншот, назву, платформу, стан, короткий опис та посилання. Атрибут `data-name` використовується для пошуку. Скріншот покладіть у `assets/`.
3. Оновіть початковий лічильник проєктів у `#result-count` і, якщо потрібно, примітку `.catalog-note`.
4. Створіть pull request або надішліть зміни в `main`. Після злиття GitHub Pages оновить сторінку.

Це статичний сайт: для перегляду локально достатньо відкрити `index.html` у браузері. Залежностей і збірки немає.

Скріншоти для поточних записів взято з папок `publish/screenshots/` відповідних репозиторіїв [Barony](https://github.com/UKA-Localization/Barony-localization-uk-UA) і [Starship Troopers: Terran Command](https://github.com/UKA-Localization/Starship-Troopers-Terran-Command-localization-uk-UA).
