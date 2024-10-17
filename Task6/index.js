// Write the code as shown in the video below:

// Write answer to the questions asked below:
const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color="brown"

const fruitItems = document.querySelectorAll('.fruit');
fruitItems.forEach((fruit, index) => {
  if (index % 2 === 1) { 
    fruit.style.backgroundColor = 'brown';
    fruit.style.color = 'white';
  }
});




