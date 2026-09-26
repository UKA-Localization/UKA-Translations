const preview = document.querySelector('#image-preview');
const previewImage = document.querySelector('#preview-image');
const previewTitle = document.querySelector('#preview-title');
const closeButton = document.querySelector('.preview-close');
const zoomButton = document.querySelector('.preview-zoom');
const previewViewport = document.querySelector('.preview-viewport');

for (const link of document.querySelectorAll('.project-image-link')) {
  link.addEventListener('click', event => {
    event.preventDefault();
    const thumbnail = link.querySelector('img');
    previewImage.src = link.href;
    previewImage.alt = thumbnail.alt;
    previewTitle.textContent = link.closest('.project-row').querySelector('h3').textContent;
    preview.classList.remove('is-zoomed');
    zoomButton.textContent = 'Збільшити';
    zoomButton.setAttribute('aria-pressed', 'false');
    preview.showModal();
  });
}

zoomButton.addEventListener('click', () => {
  const zoomed = preview.classList.toggle('is-zoomed');
  zoomButton.textContent = zoomed ? 'Умістити' : 'Збільшити';
  zoomButton.setAttribute('aria-pressed', String(zoomed));
  previewViewport.scrollLeft = zoomed ? (previewViewport.scrollWidth - previewViewport.clientWidth) / 2 : 0;
  previewViewport.scrollTop = zoomed ? (previewViewport.scrollHeight - previewViewport.clientHeight) / 2 : 0;
});
previewImage.addEventListener('click', () => zoomButton.click());
closeButton.addEventListener('click', () => preview.close());
preview.addEventListener('click', event => {
  if (event.target === preview) preview.close();
});
preview.addEventListener('close', () => previewImage.removeAttribute('src'));
