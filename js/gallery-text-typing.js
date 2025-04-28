const main = document.getElementById('main');
const galleryContainer = document.createElement('div');
galleryContainer.classList.add('gallery-container');
galleryContainer.id = 'gallery';
const galleryText = document.createElement('span');
galleryText.classList.add('gallery-text');
galleryContainer.appendChild(galleryText);
main.appendChild(galleryContainer);

const text = "Welcome to my hobbies page! Here I share what inspires me every day — creative projects, passions, and ideas that make life brighter.";
let index = 0;

function type() {
  if (index < text.length) {
    galleryText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50); 
  }
}

type();
