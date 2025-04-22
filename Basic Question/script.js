// Electricity calculation.

let unit = Number(prompt("Please enter your consumed units ?")) // 500

let amount = 0;

if(unit > 400){
  amount = (unit - 400) * 13; //total unit is 700. kitne unit hai jo ki 400 se jyada hai toh 700 - 400 = 300. 300 * 13 = 3900
  console.log(amount, "400 unit") //100*13 = 1300
  unit = 400; // bache units ko hm reassign kr de rha hai 400.
}
if(unit > 201 && unit <= 400){
    amount = (unit - 200) * 8; //total unit is 400. kitne unit hai jo ki 200 se jyada hai toh 400 - 200 = 200. 200 * 8 = 1600
    console.log(amount, "200 unit") // 200*8 = 1600
    unit = 200;
}
if(unit > 101 && unit <= 200){
    amount = (unit - 100) * 5; //total unit is 200. kitne unit hai jo ki 100 se jyada hai toh 200 - 100 = 100. 100 * 5 = 500
    console.log(amount, "100 unit") // 100*5 = 500
    unit = 100;
}
amount = unit * 4.2; // total unit is 100. kitne unit hai jo ki 100 se jyada hai toh 700 - 100 = 600. 600 * 5 = 3000
//100*4.2 = 420

console.log(amount);