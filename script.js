// ── ハンバーガーメニュー ──
const hamburgerBtn = document.getElementById('hamburger-btn');
const menuOverlay  = document.getElementById('menu-overlay');
const menuCloseBtn = document.getElementById('menu-close-btn');

hamburgerBtn.addEventListener('click', () => menuOverlay.classList.add('open'));
menuCloseBtn.addEventListener('click', closeMenu);

function closeMenu() { menuOverlay.classList.remove('open'); }

// メニュー内スクロールナビ
document.querySelectorAll('[data-scroll]').forEach(el => {
  el.addEventListener('click', () => {
    const key = el.getAttribute('data-scroll');
    closeMenu();
    setTimeout(() => {
      const target = document.getElementById(key);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  });
});

// ── FAQアコーディオン ──
document.querySelectorAll('.faq-q-row').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const arrow  = item.querySelector('.faq-arrow');
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-arrow').forEach(a => a.classList.remove('open'));
    if (!isOpen) { answer.classList.add('open'); arrow.classList.add('open'); }
  });
});

// ── スクロールフェードイン ──
// イベントセクション内の要素はグループ単位で同時発火
const eventGroups = document.querySelectorAll('.event-group');

eventGroups.forEach(group => {
  const items = group.querySelectorAll('.fade-up');
  const groupObs = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      items.forEach(el => el.classList.add('visible'));
      groupObs.disconnect();
    }
  }, { threshold: 0.1 });
  items.forEach(el => groupObs.observe(el));
});

// その他の fade-up 要素（イベントグループ外）は個別発火
const soloObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      soloObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => {
  if (!el.closest('.event-group')) soloObs.observe(el);
});
