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
  
const coffee = document.getElementById("coffee");
const milk = document.getElementById("milk");
const water = document.getElementById("water");
const cup = document.querySelector(".cup");
const errorBean = document.getElementById("error-bean");

// let coffeeHeight = coffee.offsetHeight;
// let waterHeight = water.offsetHeight;
// let cupHeight = cup.offsetHeight - 12;

// let coffeeNewHeight = document.getElementById("coffee").style.height;
// console.log(coffeeNewHeight);

// total height of the ingredients
// ingredientHeight = cupHeight* 0.9;


// let coffeeHeightPercent = Math.round((coffeeHeight / 144) * 100);
// let waterHeightPercent = Math.round((waterHeight / 144) * 100);
let coffeeStrength;
// let milkTypes, strengthTypes;
// let newMilkiness, newCaffeine;

let milkTypes = document.getElementsByName('milk');;
let newMilkiness = document.querySelector('input[name="milk"]:checked').value;
let strengthTypes = document.getElementsByName('strength');
let newCaffeine = document.querySelector('input[name="strength"]:checked').value;
let sugarTypes = document.getElementsByName('sugar');
let newSugar = document.querySelector('input[name="sugar"]:checked').value;
let sugarCubes = document.getElementById('sugar');

function checkCoffee() {
  
  newMilkiness = document.querySelector('input[name="milk"]:checked').value;
  newCaffeine = document.querySelector('input[name="strength"]:checked').value;
  newSugar = document.querySelector('input[name="sugar"]:checked').value;

}

let kopiMaker = document.getElementById("kopi-maker");
let kopiName = document.getElementById("kopi-name");

kopiMaker.addEventListener("change", function() {

  checkCoffee();

  switch(newMilkiness) {
    // console.log(newMilkiness);
    case "none":
      document.getElementById("milk").style.height = 0 + "%";
      switch(newCaffeine) {
        case "weak-strength":
          coffee.style.height = 40 + "%";
          water.style.height = 60 + "%";
          kopiName.textContent = "Kopi O Po";
           break;
        case "normal-strength":
          console.log("no milk normal strength");
          coffee.style.height = 50 + "%";
          water.style.height = 50 + "%";
          kopiName.textContent = "Kopi O";
          break;
        case "strong-strength":
          console.log("no milk strong strength");
          coffee.style.height = 60 + "%";
          water.style.height = 40 + "%";
          kopiName.textContent = "Kopi O Gao";
          break;
        case "x-strong-strength":
          console.log("no milk x strong strength");
          coffee.style.height = 100 + "%";
          water.style.height = 0 + "%";
          kopiName.textContent = "Kopi O Di Lo";
          break;
      }
      break;
    case "condensed":
      document.getElementById("milk").style.backgroundColor = "#ffefd5";
      document.getElementById("milk").style.height = 20 + "%";
      switch(newCaffeine) {
        case "weak-strength":
          coffee.style.height = 30 + "%";
          water.style.height = 50 + "%";
          kopiName.textContent = "Kopi Po";
          break;
        case "normal-strength":
          coffee.style.height = 40 + "%";
          water.style.height = 40 + "%";
          kopiName.textContent = "Kopi";
          break;
        case "strong-strength":
          coffee.style.height = 50 + "%";
          water.style.height = 30 + "%";
          kopiName.textContent = "Kopi Gao";
          break;
        case "x-strong-strength":
          coffee.style.height = 80 + "%";
          water.style.height = 0 + "%";
          kopiName.textContent = "Kopi Di Lo";
          break;
      }
      break;
    case "evaporated":
      milk.style.backgroundColor = "#FFDCA6";
      milk.style.height = 20 + "%";
      switch(newCaffeine) {
        case "weak-strength":
          coffee.style.height = 30 + "%";
          water.style.height = 50 + "%";
          kopiName.textContent = "Kopi C Po";
          break;
        case "normal-strength":
          coffee.style.height = 40 + "%";
          water.style.height = 40 + "%";
          kopiName.textContent = "Kopi C";
          break;
        case "strong-strength":
          coffee.style.height = 50 + "%";
          water.style.height = 30 + "%";
          kopiName.textContent = "Kopi C Gao";
          break;
        case "x-strong-strength":
          coffee.style.height = 80 + "%";
          water.style.height = 0 + "%";
          kopiName.textContent = "Kopi C Di Lo";
          break;
      }
      break;
  }

  switch(newSugar) {
    // errorBean.classList.add("invisibility");
    case "no-sugar":
      console.log("no sugar");
      switch(newMilkiness) {
        case "condensed":
          console.log("invalid! condensed milk has sugar");
          console.log(errorBean);
          errorBean.classList.remove("invisibility");
          break;
        default:
          kopiName.textContent += " Kosong";
          sugarCubes.style.opacity = "0";
          break;
      }
      break;
    case "less-sugar":
      console.log("less sugar");
      kopiName.textContent += " Siu Dai";
      console.log(sugarCubes);
      sugarCubes.style.opacity = "1";
      sugarCubes.style.boxShadow = "none";
      break;
    case "normal-sugar":
      kopiName.textContent += "";
      sugarCubes.style.opacity = "1";
      sugarCubes.style.boxShadow = "40px -20px 0 #d9dbde";
      break;
    case "extra-sugar":
      kopiName.textContent += " Gah Dai";
      sugarCubes.style.opacity = "1";
      sugarCubes.style.boxShadow = "40px -20px 0 #d9dbde, 40px 20px 0 #d9dbde";
      break;
    
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