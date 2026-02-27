const CACHE_NAME = 'kitty-ultra-v4';
const assets = [
  './',
  './index.html',
  './css/style.css',
  './img/logo.png',
  './img/Hello-Kitty.jpeg',
  './img/my-melody.png',
  './img/Keroppi.png',
  './img/Chococat.jpeg',
  './img/cinnamoroll.png',
  './img/mundohellokitty1.png',
  './img/mundohellokitty2.jpeg',
  './img/foto_alumno.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});