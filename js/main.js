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
    const modalImg = modalOverlay.querySelector('.modal-img');
    const modalImgFallback = modalOverlay.querySelector('.modal-img-fallback');
    const modalVariants = modalOverlay.querySelector('.modal-variants');

    const setModalImage = (src, alt) => {
      if (src) {
        modalImg.src = src;
        modalImg.alt = alt || '';
        modalImg.style.display = '';
        modalImgFallback.style.display = 'none';
      } else {
        modalImg.removeAttribute('src');
        modalImg.style.display = 'none';
        modalImgFallback.style.display = '';
      }
    };

    galleryCards.forEach(card => {
      card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalMeta.textContent = `${card.dataset.medium} · ${card.dataset.year} · ${card.dataset.size} · ${card.dataset.price}`;

        const cardImg = card.querySelector('.art-tile img');
        setModalImage(cardImg ? cardImg.getAttribute('src') : null, cardImg ? cardImg.alt : '');

        modalVariants.innerHTML = '';
        const variants = card.dataset.variants;
        if (variants) {
          variants.split(',').forEach((src, i) => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = `${card.dataset.title} — version ${i + 1}`;
            if (cardImg && src === cardImg.getAttribute('src')) thumb.classList.add('active');
            thumb.addEventListener('click', () => {
              setModalImage(src, thumb.alt);
              modalVariants.querySelectorAll('img').forEach(t => t.classList.remove('active'));
              thumb.classList.add('active');
            });
            modalVariants.appendChild(thumb);
          });
          modalVariants.style.display = '';
        } else {
          modalVariants.style.display = 'none';
        }

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
