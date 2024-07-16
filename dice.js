function playGame() {
    const clientSeed = document.getElementById('clientSeed').value;
    const slider = document.getElementById('predictionSlider');
    const resultElement = document.getElementById('result');

    if (clientSeed.trim() === "") {
        resultElement.textContent = "Please enter a client seed.";
        return;
    }

    // Randomly change the slider value
    const randomValue = Math.floor(Math.random() * 101); // random number between 0 and 100
    slider.value = randomValue;

    // Display the result
    resultElement.textContent = `Slider shifted to ${randomValue}.`;
}
