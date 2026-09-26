const PAGE_SIZE = 5;
const searchInput = document.querySelector('#project-search');
const sortSelect = document.querySelector('#project-sort');
const projectList = document.querySelector('#project-rows');
const rows = [...projectList.querySelectorAll('.project-row')];
const originalOrder = new Map(rows.map((row, index) => [row, index]));
const demoCount = rows.filter(row => row.dataset.demo === 'true').length;
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const pagination = document.querySelector('#pagination');
const previousPage = document.querySelector('#previous-page');
const nextPage = document.querySelector('#next-page');
const pageIndicator = document.querySelector('#page-indicator');
const nameCollator = new Intl.Collator('uk', { sensitivity: 'base', numeric: true });
const statusOrder = { released: 0, active: 1, draft: 2, paused: 3, demo: 4 };
let currentPage = 1;

function projectWord(count) {
  if (count % 100 >= 11 && count % 100 <= 14) return 'проєктів';
  if (count % 10 === 1) return 'проєкт';
  if (count % 10 >= 2 && count % 10 <= 4) return 'проєкти';
  return 'проєктів';
}

function compareDates(a, b, field) {
  return Date.parse(b.dataset[field] || 0) - Date.parse(a.dataset[field] || 0);
}

function compareProjects(a, b) {
  // Demo rows stay after real projects in every mode.
  const demoDifference = Number(a.dataset.demo === 'true') - Number(b.dataset.demo === 'true');
  if (demoDifference) return demoDifference;

  let difference = 0;
  switch (sortSelect.value) {
    case 'updated':
      difference = compareDates(a, b, 'updated') || compareDates(a, b, 'added');
      break;
    case 'name':
      difference = nameCollator.compare(a.dataset.name, b.dataset.name);
      break;
    case 'status':
      difference = (statusOrder[a.dataset.status] ?? 99) - (statusOrder[b.dataset.status] ?? 99)
        || compareDates(a, b, 'updated');
      break;
    default:
      difference = compareDates(a, b, 'added') || compareDates(a, b, 'updated');
  }
  return difference || originalOrder.get(a) - originalOrder.get(b);
}

function renderProjects() {
  const query = searchInput.value.trim().toLocaleLowerCase('uk');
  const sortedRows = [...rows].sort(compareProjects);
  projectList.replaceChildren(...sortedRows);
  const matching = sortedRows.filter(row => row.dataset.name.toLocaleLowerCase('uk').includes(query));
  const totalPages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const first = (currentPage - 1) * PAGE_SIZE;
  const visibleRows = new Set(matching.slice(first, first + PAGE_SIZE));

  for (const row of rows) row.hidden = !visibleRows.has(row);
  projectList.hidden = matching.length === 0;
  emptyState.hidden = matching.length !== 0;
  pagination.hidden = totalPages <= 1;
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
sortSelect.addEventListener('change', () => {
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
