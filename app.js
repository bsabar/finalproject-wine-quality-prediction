const imageElement = document.getElementById('imageElement');
const changeImageButton = document.getElementById('changeImageButton');

// Add an event listener to the button
changeImageButton.addEventListener('click', function() {
    // Change the image source
    imageElement.src = '/feature_importance.png'; // Replace with your image path
});