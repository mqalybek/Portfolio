// Plays a card's short preview loop on hover (desktop) or when it scrolls into view (touch).
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const canHover = matchMedia('(hover: hover)');

function play(card: HTMLElement) {
  if (reduceMotion.matches) return;
  const video = card.querySelector('video');
  if (!video) return;
  if (!video.getAttribute('src') && video.dataset.src) video.src = video.dataset.src;
  video.play().then(() => card.classList.add('is-playing')).catch(() => {});
}

function stop(card: HTMLElement) {
  const video = card.querySelector('video');
  if (!video) return;
  video.pause();
  card.classList.remove('is-playing');
}

const cards = document.querySelectorAll<HTMLElement>('[data-work-card]');

if (canHover.matches) {
  for (const card of cards) {
    card.addEventListener('pointerenter', () => play(card));
    card.addEventListener('pointerleave', () => stop(card));
    card.addEventListener('focus', () => play(card));
    card.addEventListener('blur', () => stop(card));
  }
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const card = entry.target as HTMLElement;
        if (entry.isIntersecting) play(card);
        else stop(card);
      }
    },
    { threshold: 0.6 },
  );
  cards.forEach((card) => observer.observe(card));
}
