// Massimo Chalini — site interactions: mobile nav, gallery filter, lightbox modal

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Gallery category filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  // Lightbox modal for gallery pieces
  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalOverlay) {
    const modalTitle = modalOverlay.querySelector('.modal-title');
    const modalMeta = modalOverlay.querySelector('.modal-meta');
    const modalClose = modalOverlay.querySelector('.modal-close');

    galleryCards.forEach(card => {
      card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalMeta.innerHTML = `
          <div>Medium: ${card.dataset.medium}</div>
          <div>Year: ${card.dataset.year}</div>
          <div>Size: ${card.dataset.size}</div>
          <div>${card.dataset.price}</div>
        `;
        modalOverlay.classList.add('open');
      });
    });

    const closeModal = () => modalOverlay.classList.remove('open');
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

});
