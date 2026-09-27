const PAGE_SIZE = 5;
const searchInput = document.querySelector('#project-search');
const sortSelect = document.querySelector('#project-sort');
const projectList = document.querySelector('#project-rows');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const pagination = document.querySelector('#pagination');
const previousPage = document.querySelector('#previous-page');
const nextPage = document.querySelector('#next-page');
const pageIndicator = document.querySelector('#page-indicator');
const catalogTitle = document.querySelector('#catalog-title');
const nameCollator = new Intl.Collator('uk', { sensitivity: 'base', numeric: true });
const statusOrder = { released: 0, active: 1, draft: 2, paused: 3 };
const normalizeSearch = value => value.normalize('NFKC').toLocaleLowerCase('uk');

const projects = [...projectList.querySelectorAll('.project-row')].map((row, index) => {
  const platform = row.querySelector('.platform')?.textContent ?? '';
  return {
    row,
    index,
    name: row.dataset.name,
    added: Date.parse(row.dataset.added) || 0,
    updated: Date.parse(row.dataset.updated) || 0,
    status: statusOrder[row.dataset.status] ?? 99,
    searchText: normalizeSearch([
      row.dataset.name,
      row.querySelector('.project-genres')?.textContent ?? '',
      platform,
      platform.includes('ПК') ? 'PC' : '',
    ].join(' ')),
  };
});

let currentPage = 1;

function projectWord(count) {
  if (count % 100 >= 11 && count % 100 <= 14) return 'проєктів';
  if (count % 10 === 1) return 'проєкт';
  if (count % 10 >= 2 && count % 10 <= 4) return 'проєкти';
  return 'проєктів';
}

function compareProjects(a, b) {
  let difference;
  switch (sortSelect.value) {
    case 'updated':
      difference = b.updated - a.updated || b.added - a.added;
      break;
    case 'name':
      difference = nameCollator.compare(a.name, b.name);
      break;
    case 'status':
      difference = a.status - b.status || b.updated - a.updated;
      break;
    default:
      difference = b.added - a.added || b.updated - a.updated;
  }
  return difference || a.index - b.index;
}

function renderProjects() {
  const query = normalizeSearch(searchInput.value.trim());
  const terms = query.split(/\s+/).filter(Boolean);
  const sorted = [...projects].sort(compareProjects);
  const matching = sorted.filter(project => terms.every(term => project.searchText.includes(term)));
  const totalPages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));

  currentPage = Math.min(currentPage, totalPages);
  const first = (currentPage - 1) * PAGE_SIZE;
  const visible = new Set(matching.slice(first, first + PAGE_SIZE));

  projectList.replaceChildren(...sorted.map(project => project.row));
  for (const project of projects) project.row.hidden = !visible.has(project);

  projectList.hidden = matching.length === 0;
  emptyState.hidden = matching.length !== 0;
  pagination.hidden = totalPages <= 1;
  resultCount.textContent = query
    ? `${matching.length} із ${projects.length} записів`
    : `${projects.length} ${projectWord(projects.length)}`;
  pageIndicator.textContent = `Сторінка ${currentPage} із ${totalPages}`;
  previousPage.disabled = currentPage === 1;
  nextPage.disabled = currentPage === totalPages;
}

function changePage(offset) {
  currentPage += offset;
  renderProjects();
  catalogTitle.scrollIntoView({ behavior: 'smooth' });
}

searchInput.addEventListener('input', () => {
  currentPage = 1;
  renderProjects();
});
sortSelect.addEventListener('change', () => {
  currentPage = 1;
  renderProjects();
});
previousPage.addEventListener('click', () => changePage(-1));
nextPage.addEventListener('click', () => changePage(1));

renderProjects();
