(function () {
  // Inject caption overlays from each image's alt text
  document.querySelectorAll('.photo-mosaic__item').forEach(function (item) {
    var img = item.querySelector('img');
    if (img && img.alt) {
      var cap = document.createElement('span');
      cap.className = 'photo-caption';
      cap.textContent = img.alt;
      item.appendChild(cap);
    }
  });

  // Build lightbox overlay
  var overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML = '<img id="lightbox-img" src="" alt=""><button id="lightbox-close" aria-label="Close">&times;</button>';
  document.body.appendChild(overlay);

  var lbImg = document.getElementById('lightbox-img');

  document.querySelectorAll('.photo-mosaic__item img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      overlay.classList.add('open');
    });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target.id === 'lightbox-close') {
      overlay.classList.remove('open');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });
})();
