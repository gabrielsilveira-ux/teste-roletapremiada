const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const resolveLogoFallbacks = (img) => {
  const assetPath = img.dataset.assetPath;
  if (!assetPath) {
    return;
  }

  const candidates = [
    assetPath,
    `./${assetPath}`,
    `/${assetPath}`,
    `../${assetPath}`,
  ];

  let attemptIndex = 0;

  const tryNextSource = () => {
    if (attemptIndex >= candidates.length) {
      return;
    }

    const candidate = candidates[attemptIndex++];
    const resolvedCandidate = new URL(candidate, window.location.href).href;

    if (img.src === resolvedCandidate) {
      tryNextSource();
      return;
    }

    img.src = candidate;
  };

  img.addEventListener('error', tryNextSource);
};

document.querySelectorAll('img[data-asset-path]').forEach(resolveLogoFallbacks);
