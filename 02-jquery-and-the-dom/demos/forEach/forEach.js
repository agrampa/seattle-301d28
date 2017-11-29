let numArray = [1, 2, 3, 4, 5];

for(let i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}

for(let i in numArray) {
  console.log(numArray[i]);
}

numArray.forEach(function square(x) {
  console.log(x*x);
})

function square(x) {
  console.log(x*x);
}

numArray.forEach(square);

let dogsArray = ['Demi', 'Gary', 'Charlotte'];

dogsArray.forEach(printMessage);

function printMessage(dog) {
  console.log(`${dog} is a good dog!`);
}

printMessage('Daisy');
