const root = document.documentElement;
const topics = [...document.querySelectorAll('.topic')];
const search = document.querySelector('#globalSearch');
const empty = document.querySelector('#emptyState');
let activeCategory = 'all';

function applyFilters(){
  const q = (search?.value || '').trim().toLowerCase();
  let visible = 0;
  topics.forEach(topic => {
    const categoryOk = activeCategory === 'all' || topic.dataset.category === activeCategory;
    const haystack = (topic.dataset.search + ' ' + topic.innerText).toLowerCase();
    const queryOk = !q || haystack.includes(q);
    const show = categoryOk && queryOk;
    topic.hidden = !show;
    if(show) visible++;
  });
  if(empty) empty.hidden = visible !== 0;
}

document.querySelectorAll('[data-category]').forEach(btn => {
  if(!btn.classList.contains('category')) return;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.category').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    applyFilters();
    document.querySelector('#discussions')?.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

search?.addEventListener('input', applyFilters);
window.addEventListener('keydown', e => {
  if(e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA'){
    e.preventDefault(); search?.focus();
  }
});

const savedTheme = localStorage.getItem('gisforum-theme');
if(savedTheme === 'light') root.classList.add('light');
document.querySelector('#themeToggle')?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('gisforum-theme', root.classList.contains('light') ? 'light' : 'dark');
});

const modal = document.querySelector('#composerModal');
function setComposer(open){
  if(!modal) return;
  modal.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
}
document.querySelectorAll('[data-open-composer]').forEach(x => x.addEventListener('click', () => setComposer(true)));
document.querySelectorAll('[data-close-composer]').forEach(x => x.addEventListener('click', () => setComposer(false)));
window.addEventListener('keydown', e => { if(e.key === 'Escape') setComposer(false); });

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  tab.classList.add('active');
}));