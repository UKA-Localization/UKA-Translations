const PAGE_SIZE = 2;
const searchInput = document.querySelector('#project-search');
const projectList = document.querySelector('#project-rows');
const rows = [...projectList.querySelectorAll('.project-row')];
const demoCount = rows.filter(row => row.dataset.demo === 'true').length;
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const pagination = document.querySelector('#pagination');
const previousPage = document.querySelector('#previous-page');
const nextPage = document.querySelector('#next-page');
const pageIndicator = document.querySelector('#page-indicator');
let currentPage = 1;

function projectWord(count) {
  if (count % 100 >= 11 && count % 100 <= 14) return 'проєктів';
  if (count % 10 === 1) return 'проєкт';
  if (count % 10 >= 2 && count % 10 <= 4) return 'проєкти';
  return 'проєктів';
}

function renderProjects() {
  const query = searchInput.value.trim().toLocaleLowerCase('uk');
  const matching = rows.filter(row => row.dataset.name.toLocaleLowerCase('uk').includes(query));
  const totalPages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const first = (currentPage - 1) * PAGE_SIZE;
  const visibleRows = new Set(matching.slice(first, first + PAGE_SIZE));

  for (const row of rows) row.hidden = !visibleRows.has(row);
  projectList.hidden = matching.length === 0;
  emptyState.hidden = matching.length !== 0;
  pagination.hidden = matching.length === 0;
  resultCount.textContent = query
    ? `${matching.length} із ${rows.length} записів`
    : demoCount
      ? `${rows.length - demoCount} ${projectWord(rows.length - demoCount)} · ${demoCount} тестові`
      : `${rows.length} ${projectWord(rows.length)}`;
  pageIndicator.textContent = `Сторінка ${currentPage} із ${totalPages}`;
  previousPage.disabled = currentPage === 1;
  nextPage.disabled = currentPage === totalPages;
}

searchInput.addEventListener('input', () => {
  currentPage = 1;
  renderProjects();
});
previousPage.addEventListener('click', () => {
  currentPage--;
  renderProjects();
  document.querySelector('#catalog-title').scrollIntoView({ behavior: 'smooth' });
});
nextPage.addEventListener('click', () => {
  currentPage++;
  renderProjects();
  document.querySelector('#catalog-title').scrollIntoView({ behavior: 'smooth' });
});

renderProjects();
