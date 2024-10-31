const container = document.querySelector('.container');
let gridSize = 16;

// Get width and height of each square pixel
let rect = container.getBoundingClientRect();
let width = Math.floor(rect.width / gridSize);
let height = width;

// Create each square pixel according to grid size
let div;
for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    // Change background color of square pixel when hovering over it
    div.addEventListener('mouseenter', (e) => {
      e.target.style.background = 'black';
    });
    container.appendChild(div);
  }
}