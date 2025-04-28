document.addEventListener('DOMContentLoaded', () => {

  fetch('../json/carousel.json')
    .then(response => response.json())
    .then(images => {
      const gallery = document.getElementById('gallery');
      const modal = document.getElementById('modal');
      const modalImg = document.getElementById('modalImage');
      const captionText = document.getElementById('caption');
      const closeBtn = document.getElementById('closeBtn');

      images.forEach((image, imgIndex) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.info;
        imgElement.classList.add('gallery-img', 'fade-in');

        imgElement.style.animationDelay = `${imgIndex * 0.2}s`;

        imgElement.addEventListener('click', () => {
          modal.style.display = "flex";
          modalImg.src = image.src;
          captionText.innerText = image.info;
        });

        gallery.appendChild(imgElement);
      });

      closeBtn.onclick = function() {
        modal.style.display = "none";
      };

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    })
    .catch(error => console.error('Error loading images:', error));
});
