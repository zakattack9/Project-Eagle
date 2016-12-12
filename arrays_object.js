/*

  Zak Sakata
  Arrays and Objects
  Dec. 5, 2016

*/

//Variables


//Arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var names = ["Senior Tan", "Zakattack", "YoloMcFoloHolo", "Ohai", "Jeff"];
var colors = ["booger green", "dark black", "doodoo brown"];
var adjective = ["smart", "colorful", "nasty", "stink", "dumb"];
var slang = ["scrap", "beef", "da kine", "la dat", "broke da mout", "shoots braddah"];

//Objects
var donut = {
  toppings:["rainbow sprinkles", "blue chocolate", "thick air"],
  fillings:["jelly", "chocolate"],
  shape:["octagon", "dodecagon", "parabola", "unit circle", "square"],
  count:9
}

function numbaMan(x){
  console.log(x[3] + x[4]);
}
numbaMan(numbers);


function donutDoIt(a){
  for(var i = 0; i <= a.legnth; i++){
    console.log("Donuts are " + a[i] + " shaped")
  }
}
donutDoIt(slang);


function anotherOne(param){
  if(param == "thick air"){
    console.log("My favorite topping on donuts is " + param + ".");
  }
  else{
    console.log(param[1] + " and " + param[0] + " are the worst toppings.")
  }
}
anotherOne(donut.toppings[2]);