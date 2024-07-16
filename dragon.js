function playGame() {
    const gridRows = 9;
    const gridCols = 3;
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = ''); // Clear previous eggs

    // Get client seed
    const clientSeedInput = document.getElementById('client-seed');
    const clientSeed = clientSeedInput.value.trim();

    // Check if client seed is provided
    if (!clientSeed) {
        alert('Please enter a client seed.');
        return;
    }

    // Calculate seed based on client seed
    let seed = 0;
    for (let i = 0; i < clientSeed.length; i++) {
        seed += clientSeed.charCodeAt(i);
    }

    // Pseudo-random number generator using seed
    function seededRandom(seed) {
        let x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    // Define the range of rows to be the bottom three rows
    const startRow = gridRows - 3;

    // Arrays to store the possible rows and columns for egg placement
    const rows = [startRow, startRow + 1, startRow + 2];
    const cols = [0, 1, 2];

    // Shuffle function using the seeded random generator
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(seed++) * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the rows and columns to get random order
    shuffle(rows);
    shuffle(cols);

    // Place eggs in unique row and column
    for (let i = 0; i < 3; i++) {
        const row = rows[i];
        const col = cols[i];
        const pos = row * gridCols + col;
        cells[pos].textContent = '🥚';
    }
}

// Add event listener to ensure playGame is called on button click
document.querySelector('button').addEventListener('click', playGame);
