document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    document.querySelectorAll('.char-item').forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('d-none');
      } else {
        item.classList.add('d-none');
      }
    });
  });
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Mensaje enviado con amor 💕");
    contactForm.reset();
  });
}