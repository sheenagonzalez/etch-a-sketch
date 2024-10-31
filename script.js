let gridSize = 16;
const container = document.querySelector('.container');

const createNewGrid = function () {
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
      div.classList.add('pixel');
      // Change background color of square pixel when hovering over it
      div.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'black';
      });
      container.appendChild(div);
    }
  }
}

const restart = function () {
  // Delete old grid
  let divs = document.querySelectorAll('.pixel');
  divs.forEach((div) => {
    container.removeChild(div);
  });

  // Prompt user for grid size
  gridSize = 0;
  while (gridSize <= 0 || gridSize > 100 || !gridSize) {
    gridSize = +(prompt('Enter size of sketchpad (1-100)'));
  }

  createNewGrid();
}

createNewGrid();
const newBtn = document.querySelector('.new-btn');
newBtn.addEventListener('click', restart);