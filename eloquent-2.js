/* Looping a Triangle
======================*/
var hash = ""
for (var i = 1; i < 8; i ++) {
  hash = hash + "#";
  console.log(hash);
}

/* FizzBuzz
======================*/
for (var j = 1; j <= 100; j++) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (j % 5 === 0) {
    console.log("Buzz");
  }
  else if (j % 3 === 0) {
    console.log("Fizz");
  }
  else console.log(j);
};

/* Chessboard
======================*/
var size = 8;
var hashString="";

for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++){
    if((x + y) % 2 === 0){
    hashString += " ";
    }
    else {
    hashString += "#";
    }
  }
hashString += "\n";
}

console.log(hashString);