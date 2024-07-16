const gridContainer = document.getElementById('gridContainer');
const playButton = document.getElementById('playButton');
const popup = document.getElementById('popup');
const popupRegisterButton = document.getElementById('popupRegisterButton');
const closePopupButton = document.getElementById('closePopupButton');
const loadingSpinner = document.getElementById('loadingSpinner');

popupRegisterButton.addEventListener('click', () => {
  register();
  popup.style.display = 'none';
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

const createGrid = () => {
  gridContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const block = document.createElement('div');
      block.className = 'grid-block';
      gridContainer.appendChild(block);
    }
  }
};

const getRandomPositions = (seed, totalPositions, gridSize) => {
  let positions = [];
  let rng = new Math.seedrandom(seed + Date.now()); // Use current time to alter the seed
  while (positions.length < totalPositions) {
    let randomPosition = Math.floor(rng() * gridSize);
    if (!positions.includes(randomPosition)) {
      positions.push(randomPosition);
    }
  }
  return positions;
};

const play = () => {
  const clientSeed = document.getElementById('clientSeed').value;
  if (!clientSeed) {
    alert('Please enter a client seed');
    return;
  }

  playButton.disabled = true;

  // Show "connecting to server"
  const timerElement = document.getElementById('timer');
  timerElement.innerText = "Connecting to server...";
  loadingSpinner.style.display = 'block';

  setTimeout(() => {
    // After 3 seconds, show "connected"
    timerElement.innerText = "Connected!";
    timerElement.style.color = "#90EE90"; // Light green color
    loadingSpinner.style.display = 'none';
    setTimeout(() => {
      // Display image on the grid
      const positions = getRandomPositions(clientSeed, 4, 25);
      const blocks = document.getElementsByClassName('grid-block');
      for (let block of blocks) {
        block.innerHTML = ''; // Clear existing images
      }
      for (let pos of positions) {
        const img = document.createElement('img');
        img.src = './mine.png'; // Ensure this path is correct
        img.alt = 'image';
        img.className = 'grid-image';
        blocks[pos].appendChild(img);
      }

      // Enable the play button for the next round
      setTimeout(() => {
        playButton.disabled = false;
      }, 15000);

      // Refresh the grid and client seed after 15 seconds
      setTimeout(() => {
        for (let block of blocks) {
          block.innerHTML = ''; // Clear the grid
        }
        document.getElementById('clientSeed').value = ''; // Clear the client seed
        timerElement.innerText = ""; // Clear the connected message
      }, 15000);
    }, 1000); // Delay for "connected" message
  }, 3000); // Delay for "connecting to server"
};

const register = () => {
  window.open('https://stake.games/?c=b8UdTgzx', '_system');
};

// Initial call to set up the grid
createGrid();
