// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const section = document.querySelector(targetId);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade-in animations for sections, links, and videos
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;

    // Links
    if(entry.target.classList.contains('links-grid')) {
      entry.target.querySelectorAll('.link-card').forEach((card, index) => {
        setTimeout(() => card.classList.add('show'), index * 150);
      });
    }

    // Videos
    if(entry.target.classList.contains('videos')) {
      entry.target.querySelectorAll('.video-wrapper').forEach((vid, index) => {
        setTimeout(() => vid.classList.add('show'), index * 200);
      });
    }

    // Sections
    if(entry.target.classList.contains('fade-in')) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in, .links-grid, .videos').forEach(el => observer.observe(el));
