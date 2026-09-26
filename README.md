# UKA Translations

Публічний каталог українських локалізацій ігор від [UKA Localization](https://github.com/UKA-Localization). Сторінка розміщена на GitHub Pages.

## Як додати проєкт

1. Переконайтеся, що репозиторій локалізації публічний і його `README.md` пояснює поточний стан перекладу та спосіб встановлення.
2. Додайте до `<div id="project-rows">` в `index.html` новий блок `<article class="project-row">` за зразком наявних. Змініть скріншот, назву, жанри, платформу, стан, опис, статистику, посилання на переклад і сторінку гри. Скріншот покладіть у `assets/`.
3. Заповніть атрибути `data-name` (назва для пошуку), `data-added` (дата внесення до каталогу), `data-updated` (дата останнього оновлення репозиторію локалізації) та `data-status` (`released`, `active`, `draft` або `paused`). Пошук також бере жанри з `.project-genres` і платформу з `.platform`. Дати вкажіть у форматі ISO 8601. Якщо зміниться `data-updated`, оновіть також видиму дату в `<time>`.
4. Пошук, сортування, лічильник і пагінація оновляться автоматично. За замовчуванням нові записи показуються першими; за однакової дати додавання порядок визначає дата оновлення. Сортування за статусом іде в порядку: `released`, `active`, `draft`, `paused`. На сторінці міститься до п’яти ігор (`PAGE_SIZE` у `search.js`).
5. Створіть pull request або надішліть зміни в `main`. Після злиття GitHub Pages оновить сторінку.

Чотири блоки з `data-demo="true"` — тимчасові тестові ігри для перевірки пагінації при п’яти записах на сторінку. Вони завжди стоять після справжніх проєктів. Після перегляду видаліть їх з `index.html`; пагінація знову з’явиться, коли справжніх записів стане більше п’яти.

Patreon, Монобанка й Donatello у розділі «Підтримати проєкт» зараз вимкнені: адрес для них ще немає. Коли адреси будуть готові, замініть відповідні кнопки на посилання.

Це статичний сайт: для перегляду локально достатньо відкрити `index.html` у браузері. Залежностей і збірки немає.

Після зміни `styles.css`, `search.js` або `preview.js` збільшіть параметр `v` у відповідному посиланні в `index.html`, щоб GitHub Pages не віддавав відвідувачам попередню кешовану версію файлу.

Скріншоти для поточних записів взято з папок `publish/screenshots/` відповідних репозиторіїв [Barony](https://github.com/UKA-Localization/Barony-localization-uk-UA) і [Starship Troopers: Terran Command](https://github.com/UKA-Localization/Starship-Troopers-Terran-Command-localization-uk-UA).

Статистику рядків і вичитки взято з `README.md` цих двох проєктів. Вона оновлюється вручну, коли змінюється стан перекладу. Коли з’явиться запрошення до Discord, замініть вимкнену кнопку в секції «Ми у мережах» на посилання.

Обидва справжні проєкти додано до каталогу одним комітом 27.09.2026. Їхні початкові дати оновлення відповідають останньому `pushed_at` відповідних репозиторіїв на час створення сортування. Жанри звірено зі сторінками ігор у Steam: [Barony](https://store.steampowered.com/app/371970/Barony/) і [Starship Troopers: Terran Command](https://store.steampowered.com/app/1202130/Starship_Troopers_Terran_Command/).

Знаки сервісів у `assets/icons/` отримані з офіційних джерел: [GitHub Brand Toolkit](https://brand.github.com/foundations/logo), [Steam](https://store.steampowered.com/), [Discord Brand Guidelines](https://discord.com/branding), [Patreon](https://www.patreon.com/brand), [monobank](https://monobank.ua/) і [Donatello](https://donatello.to/). Це лише позначки сервісів у відповідних кнопках.
