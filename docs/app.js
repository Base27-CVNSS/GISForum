const data = window.GISVN_FORUM_DATA || [];
const forumsEl = document.querySelector('#forums');
const searchEl = document.querySelector('#forumSearch');
const statusEl = document.querySelector('#filterStatus');

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function render(q=''){
  const needle=q.trim().toLowerCase();
  let shownForums=0, shownCats=0;
  const html=data.map((cat,ci)=>{
    const [name,desc,forums]=cat;
    const matches=forums.filter(f=>!needle || (name+' '+f.slice(1).join(' ')).toLowerCase().includes(needle));
    if(!matches.length) return '';
    shownCats++; shownForums+=matches.length;
    return '<section class="category" data-cat="'+ci+'"><div class="category-head"><div><span class="cat-title">'+esc(name)+'</span>'+(desc?'<span class="cat-desc">- '+esc(desc)+'</span>':'')+'</div><button class="collapse-btn" data-cat-collapse="'+ci+'">−</button></div><div class="category-body" id="cat-'+ci+'">'+matches.map(f=>'<article class="forum-row"><div class="forum-info"><div class="forum-icon"></div><div><a class="forum-title" href="./archive/?f='+esc(f[0])+'">'+esc(f[1])+'</a><div class="forum-stats">Chủ đề: '+esc(f[2])+', &nbsp; Bài gửi: '+esc(f[3])+'</div></div></div><div class="lastpost"><span class="lastpost-label">Bài cuối:</span><a class="lastpost-title" href="#">'+esc(f[4])+'</a><span class="lastpost-by">gửi bởi <b>'+esc(f[5])+'</b></span></div></article>').join('')+'</div></section>';
  }).join('');
  forumsEl.innerHTML=html || '<div class="notice">Không tìm thấy diễn đàn phù hợp.</div>';
  if(needle){statusEl.hidden=false;statusEl.textContent='Lọc: “'+q+'” — '+shownForums+' diễn đàn trong '+shownCats+' nhóm.';} else statusEl.hidden=true;
}
render();
searchEl?.addEventListener('input',e=>render(e.target.value));
document.addEventListener('click',e=>{
  const collapse=e.target.closest('[data-collapse]');
  if(collapse){const body=document.getElementById(collapse.dataset.collapse); if(body){body.hidden=!body.hidden;collapse.textContent=body.hidden?'+':'−';}}
  const catBtn=e.target.closest('[data-cat-collapse]');
  if(catBtn){const body=document.getElementById('cat-'+catBtn.dataset.catCollapse);if(body){body.hidden=!body.hidden;catBtn.textContent=body.hidden?'+':'−';}}
  const tab=e.target.closest('.latest-tabs button');
  if(tab){document.querySelectorAll('.latest-tabs button').forEach(x=>x.classList.remove('active'));tab.classList.add('active');}
});
