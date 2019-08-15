

var firstNumber = 4;

var secondNumber = 2;

firstNumber = 10;

var sum = firstNumber + secondNumber;

var thing;

var sentence = "you're";

var person = {
  name: "Robbie",
  age: 34,
  favoriteColor: "blue"
}

var car = "my broken car ";
var yesterday = "yesterday";
var carVerb = "broke down ";
//Way 1
var phrase1 = car + carVerb + yesterday;
console.log(phrase1);
//Way 2
console.log("Way 2");
console.log( car + carVerb + yesterday );
//way 1//
var dog = {};

dog.name = "Fido";
dog.age = 8;
dog.color = "Brown";

console.log(dog, dog.name);

//way 2//

var dog = {
  name: "Fido",
  age: 8,
  color: "brown",
}
console.log(dog)

//array//
var numbers = [1, 2, 3, 4];
console.log(numbers.length);
//length counts the items in the brackets//

var vegetables = ["kale", "cabbage", "radish", "onion"];
console.log(vegetables.length);

var primeNumbers = [2, 3, 5];
console.log(primeNumbers.length);

var students = ["Brian", "Jesse", "Jessica"];
console.log(students);

var students = ["Brian", "Jesse", "Jessica", "Justin", "Matt", "Christie"];
console.log(students[2] + "," + students[5]);


var trees = ["pine", "cypress", "hemlock"];
trees[1] = "maple";
trees[3] = "walnut";
trees[4] = "cherry";
trees[5] = "poplar";
console.log(trees[1], trees[3]);

//function//
function double(a) {
  return a * 2;
}

console.log(double(4));

// function call



//half


//using two strings
function sentence(a, b) {
  return a + b;
}


//multiple parameters//

function difference(a,b) {
  return a - b;
}

var result = difference(385, 142);
console.log(result);

//excercise 1
function add(numberA, numberB) {
  console.log(numberA + numberB);
}
//excecise from class
function yell(a) {
  var upperCase = a.toUpperCase();
  console.log(upperCase);
}
yell("Hello world");

//10 times

function yell10(a) {
  for ( var i = 0; i<a; i++) {
    yell("Hello world")
  }
}
yell10(10);

//funtion called longets//

function longest(a, b) {
  if ( a.lentgh < b.length ) {
    return b;
  }
}

//last

function isVowel(string) {
  var vowels = [
    'a',
    'e',
    'i',
    'o',
    'u'
  ];
  for ( var i = 0; i < vowels.length; i++ ) {
    if (string != vowels[i] ) {
      return false;
    } else {
        return true;
    }
  }
}
var runVowel = isVowel('a');
console.log(runVowel);

//button function, val takes html place bc i used an input tag instead of anchor tag
$('.button').click(function(){
  var  btn = $('.button');
  var buyClone = btn.val();
  btn.empty();
  btn.val('Added to Cart!');
  setTimeout(function() {
    btn.val(buyClone);
  }, 1000);
});
