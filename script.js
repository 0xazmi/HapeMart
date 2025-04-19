document.addEventListener('DOMContentLoaded', function () {
    console.log('Halaman HapeMart siap!');
  
    // Contoh jika ingin menambahkan auto-slide lebih cepat:
    const heroSlider = document.querySelector('#heroSlider');
    if (heroSlider) {
      const carousel = new bootstrap.Carousel(heroSlider, {
        interval: 4000,
        ride: 'carousel'
      });
    }
  });
  