// JavaScript code
const imageElement3 = document.getElementById('imageElement3');
const description3 = document.getElementById('description3');
const imageElement4 = document.getElementById('imageElement4');
const description4 = document.getElementById('description4');
const imageElement5 = document.getElementById('imageElement5');
const description5 = document.getElementById('description5');
const imageElement6 = document.getElementById('imageElement6');
const description6 = document.getElementById('description6');

// Image sources and descriptions
imageElement3.src = '/Resources/feature_importance.png';
description3.textContent = 'The ranking of the importance of each chemical attribute in determining the color of the wine in the logistic regression model.';

imageElement4.src = '/Resources/red_wine_quality.png';
description4.textContent = 'The ranking of the importance of each chemical attribute in determining the quality of the red wine in the random forest model.';

imageElement5.src = '/Resources/white_wine_quality.png';
description5.textContent = 'The ranking of the importance of each chemical attribute in determining the quality of the white wine in the random forest model.';

imageElement6.src = '/Resources/quality_by_attribute.png';
description6.textContent = 'The comparison of the quality of each wine versus each chemical attribute. Red wines marked in red, white wines marked in yellow.';