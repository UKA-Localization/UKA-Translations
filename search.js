const searchInput = document.querySelector('#project-search');
const rows = [...document.querySelectorAll('#project-rows tr')];
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLocaleLowerCase('uk');
  let visible = 0;

  for (const row of rows) {
    const matches = row.dataset.name.toLocaleLowerCase('uk').includes(query);
    row.hidden = !matches;
    if (matches) visible++;
  }

  resultCount.textContent = `${visible} із ${rows.length} проєктів`;
  emptyState.hidden = visible !== 0;
});
