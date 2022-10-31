var drinks = [
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


var drinksIndexNum = getRandomIndex(drinks);
var mainsIndexNum = getRandomIndex(mains);
var dessertsIndexNum = getRandomIndex(desserts);

//query selectors
var recipeName = document.querySelector('#output-name');
var letsCookButton = document.getElementById('lets-eat-button');
var drinksRadioButton = document.querySelector('#drink-radio');
var mainsRadioButton = document.querySelector('#main-radio');
var dessertsRadioButton = document.querySelector('#dessert-radio');
var showHiddenContent = document.querySelector('.output-container');
var showPot = document.querySelector('.pot');
var loginSubmitButton = document.getElementById('form-submit');
var usernameField = document.getElementById('form-name');
var userPlaceholder = document.getElementById('welcome-name');
var urlExtract = location.search.slice(1).split("=")[1]


//event listeners
letsCookButton.addEventListener('click', getRecipe);
window.addEventListener('load', addName);


//functions
function addName() {
  userPlaceholder.innerText = urlExtract;
  console.log("anything")
  }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
 }

function getRecipe(){
if (mainsRadioButton.checked === true){
  showMain();
  } else if (drinksRadioButton.checked === true){
    showDrinks();
  }else if (dessertsRadioButton.checked === true){
    showDessert();
    }
  }

function showDrinks() {
  drinksIndexNum = getRandomIndex(drinks);
  showHiddenContent.classList.remove('hidden');
  showPot.classList.add('hidden');
  recipeName.innerText = drinks[drinksIndexNum];
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