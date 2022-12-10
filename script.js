// $(document).ready(function() {
  // document.getElementById("condensed-milk").checked = true;
  // document.getElementById("normal-strength").checked = true;

  // let milkiness = document.querySelector('input[name="milk"]:checked').value;
  // let caffeine = document.querySelector('input[name="strength"]:checked').value;


  // SETS UP DEFAULT VALUES WHEN PAGE IS LOADED
  let coffeeSelect = document.getElementById("normal-strength");
  coffeeSelect.checked = true;
  let milkSelect = document.getElementById("condensed-milk");
  milkSelect.checked = true;
  let sugarSelect = document.getElementById("normal-sugar");
  sugarSelect.checked = true;
  
const coffee = document.querySelector(".coffee");
const milk = document.querySelector(".milk");
const water = document.querySelector(".water");
const cup = document.querySelector(".cup");

coffeeHeight = coffee.offsetHeight;

waterHeight = water.offsetHeight;
cupHeight = cup.offsetHeight - 12;

let coffeeNewHeight = document.getElementById("coffee").style.height;
console.log(coffeeNewHeight);

// total height of the ingredients
ingredientHeight = cupHeight* 0.9;


let coffeeHeightPercent = Math.round((coffeeHeight / 144) * 100);
let waterHeightPercent = Math.round((waterHeight / 144) * 100);
let coffeeStrength;
// let milkTypes, strengthTypes;
// let newMilkiness, newCaffeine;

let milkTypes = document.getElementsByName('milk');;
let newMilkiness = document.querySelector('input[name="milk"]:checked').value;
let strengthTypes = document.getElementsByName('strength');
let newCaffeine = document.querySelector('input[name="strength"]:checked').value;
let sugarTypes = document.getElementsByName('sugar');
let newSugar = document.querySelector('input[name="sugar"]:checked').value;

function checkCoffee() {
  
  newMilkiness = document.querySelector('input[name="milk"]:checked').value;
  newCaffeine = document.querySelector('input[name="strength"]:checked').value;
  newSugar = document.querySelector('input[name="sugar"]:checked').value;

  if (newMilkiness=="condensed") {
    document.getElementById("milk").style.backgroundColor = "#ffefd5";
  } else if (newMilkiness=="evaporated") {
    document.getElementById("milk").style.backgroundColor = "#FFDCA6";
  }

}

let kopiMaker = document.getElementById("kopi-maker");
kopiMaker.addEventListener("change", function() {

  // console.log(newMilkiness);
  checkCoffee();
  // console.log(newMilkiness);

  // let target = e.target;


  switch(newMilkiness) {
    // console.log(newMilkiness);
    case "none":
      document.getElementById("milk").style.height = 0 + "%";
      switch(newCaffeine) {
        case "weak-strength":
          document.getElementById("coffee").style.height = 40 + "%";
          document.getElementById("water").style.height = 60 + "%";
           break;
        case "normal-strength":
          console.log("no milk normal strength");
          document.getElementById("coffee").style.height = 50 + "%";
          document.getElementById("water").style.height = 50 + "%";
          break;
        case "strong-strength":
          console.log("no milk strong strength");
          document.getElementById("coffee").style.height = 60 + "%";
          document.getElementById("water").style.height = 40 + "%";
          break;
        case "x-strong-strength":
          console.log("no milk x strong strength");
          document.getElementById("coffee").style.height = 100 + "%";
          document.getElementById("water").style.height = 0 + "%";
          break;
      }
      break;
    case "condensed": case "evaporated":
      document.getElementById("milk").style.height = 20 + "%";
      switch(newCaffeine) {
        case "weak-strength":
          console.log("condensed milk weak strength");
          document.getElementById("coffee").style.height = 30 + "%";
          document.getElementById("water").style.height = 50 + "%";
          break;
        case "normal-strength":
          console.log("condensed milk normal strength");
          document.getElementById("coffee").style.height = 40 + "%";
          document.getElementById("water").style.height = 40 + "%";
          break;
        case "strong-strength":
          console.log("condensed milk strong strength");
          document.getElementById("coffee").style.height = 50 + "%";
          document.getElementById("water").style.height = 30 + "%";
          break;
        case "x-strong-strength":
          console.log("condensed milk x strong strength");
          document.getElementById("coffee").style.height = 80 + "%";
          document.getElementById("water").style.height = 0 + "%";
          break;
      }
      break;
    // case "evaporated":
    //   switch(newCaffeine) {
    //     case "weak-strength":
    //       console.log("evaporated milk weak strength");
    //       break;
    //     case "normal-strength":
    //       console.log("evaporated milk normal strength");
    //       break;
    //     case "strong-strength":
    //       console.log("evaporated milk strong strength");
    //       break;
    //     case "x-strong-strength":
    //       console.log("evaporated milk x strong strength");
    //       break;
    //   }
    //   break;
  }



// THIS WORKS SO DON'T DELETE IT!!!!!!
  // switch(true) {
  //   case ((newMilkiness == "none") && (newCaffeine == "normal-strength")) :
  //     console.log("no milk normal strength");
  //     break;
  //   case ((newMilkiness == "none") && (newCaffeine == "weak-strength")) :
  //     console.log("no milk weak strength");
  //     break;
  //   case ((newMilkiness == "none") && (newCaffeine == "strong-strength")) :
  //     console.log("no milk strong strength");
  //     break;
  //   case ((newMilkiness == "none") && (newCaffeine == "x-strong-strength")) :
  //     console.log("no milk xstrong strength");
  //     break;
  //   case ((newMilkiness == "condensed") && (newCaffeine == "normal-strength")) :
  //     console.log("condensed milk normal strength");
  //     break;
  //   case ((newMilkiness == "condensed") && (newCaffeine == "weak-strength")) :
  //     console.log("condensed milk weak strength");
  //     break;
  //   case ((newMilkiness == "condensed") && (newCaffeine == "strong-strength")) :
  //     console.log("condensed milk strong strength");
  //     break;
  //   case ((newMilkiness == "condensed") && (newCaffeine == "x-strong-strength")) :
  //     console.log("condensed milk xstrong strength");
  //     break;
  // }

})



// var x = $('input[name="sugar"]');
// var x = document.querySelectorAll("input[type=radio]");
// console.log(x);

// function myFunction(val){
//   console.log("the value is " + val);
// };

// x.forEach(function(radio) {
//   radio.addEventListener('click',function(){
//     var val = this.defaultValue;
//     myFunction(val);
//   })
// })

// myFunction();