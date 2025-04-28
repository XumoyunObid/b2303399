document.addEventListener("DOMContentLoaded", () => {
    fetch('../json/carousel.json')
      .then(response => response.json())
      .then(carouselData => {
        let currentIndex = 0;
  
        const carousel = document.getElementById('carousel');
  
        function loadCarouselImages() {
          carousel.innerHTML = '';
          carouselData.forEach((item, index) => {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.info;
            img.classList.add('carousel-img');
            img.dataset.index = index;
            carousel.appendChild(img);
          });
          updateCarouselPosition();
        }
  

        function updateCarouselPosition() {
          const carouselWidth = carousel.offsetWidth;
          const offset = -(currentIndex * (carouselWidth + 20));
          carousel.style.transform = `translateX(${offset}px)`;
        }
  
        function showNext() {
          currentIndex = (currentIndex + 1) % carouselData.length;
          updateCarouselPosition();
        }
  
        function showPrev() {
          currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
          updateCarouselPosition();
        }
  
        document.getElementById('nextBtn').addEventListener('click', showNext);
        document.getElementById('prevBtn').addEventListener('click', showPrev);

        loadCarouselImages();
      })
      .catch(error => {
        console.error('Error loading the JSON data:', error);
      });
  });
  