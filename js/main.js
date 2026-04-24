document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('img[data-fallback-src]').forEach((img) => {
  img.addEventListener('error', () => {
    if (img.dataset.fallbackSrc && img.src !== new URL(img.dataset.fallbackSrc, window.location.href).href) {
      img.src = img.dataset.fallbackSrc;
    }
  });
});
