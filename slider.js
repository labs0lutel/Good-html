// ===== HERO SLIDER =====
(function () {
  const slides = document.querySelectorAll('.hero__slide');
  const dots   = document.querySelectorAll('.hero__dot');

  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('hero__slide--active');
    dots[current].classList.remove('hero__dot--active');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('hero__slide--active');
    dots[current].classList.add('hero__dot--active');
  }

  function next() { goTo(current + 1); }

  function start() { timer = setInterval(next, 5000); }
  function stop()  { clearInterval(timer); }

  // Dot clicks
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      stop();
      goTo(parseInt(dot.dataset.slide, 10));
      start();
    });
  });

  // Pause on hover
  const hero = document.getElementById('heroSlider');
  if (hero) {
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
  }

  start();
})();
