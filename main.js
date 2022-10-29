var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
];

var mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
];

var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
];


var sidesIndexNum = getRandomIndex(sides);
var mainsIndexNum = getRandomIndex(mains);
var dessertsIndexNum = getRandomIndex(desserts);

//query selectors
var recipeName = document.querySelector('#output-name');
var letsCookButton = document.querySelector('#lets-cook-button')
var sidesRadioButton = document.querySelector('#side-radio')
var mainsRadioButton = document.querySelector('#main-radio')
var dessertsRadioButton = document.querySelector('#dessert-radio')
var showHiddenContent = document.querySelector('.output-container')
var showPot = document.querySelector('.pot')

//event listeners 
letsCookButton.addEventListener('click', getRecipe);

//functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
 }

function getRecipe(){
if (mainsRadioButton.checked === true){
  showMain();
  } else if (sidesRadioButton.checked === true){
    showSide();
  }else if (dessertsRadioButton.checked === true){
    showDessert();
    }
  }

function showSide() {
  sidesIndexNum = getRandomIndex(sides);
  showHiddenContent.classList.remove('hidden');
  showPot.classList.add('hidden');
  recipeName.innerText = sides[sidesIndexNum];
}

function showMain() {
  mainsIndexNum = getRandomIndex(mains);
  showHiddenContent.classList.remove('hidden');
  showPot.classList.add('hidden');
  recipeName.innerText = mains[mainsIndexNum];
}

function showDessert() {
  dessertsIndexNum = getRandomIndex(desserts);
  showHiddenContent.classList.remove('hidden');
  showPot.classList.add('hidden');
  recipeName.innerText = desserts[dessertsIndexNum];
}







    