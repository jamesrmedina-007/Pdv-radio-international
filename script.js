// Replace this with the station's direct MP3/AAC streaming URL.
// Example: const STREAM_URL = 'https://example.com/live.mp3';
const STREAM_URL = '';

const player = document.querySelector('#radio-player');
const status = document.querySelector('#player-status');

if (STREAM_URL) {
  player.src = STREAM_URL;
  status.textContent = 'Presiona play para escuchar la transmisión en vivo.';
}

document.querySelector('#year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
