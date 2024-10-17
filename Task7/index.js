// Write your code below:


const headerDiv = document.querySelector('#header');
const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';
subHeading.style.fontStyle = 'italic'; 
headerDiv.appendChild(subHeading); 

const secondDiv = document.querySelector('div:nth-of-type(2)');
const totalFruitsParagraph = document.createElement('p');
totalFruitsParagraph.textContent = 'Total fruits: 4';
totalFruitsParagraph.id = 'fruits-total'; 
secondDiv.insertBefore(totalFruitsParagraph, secondDiv.querySelector('ul')); 
