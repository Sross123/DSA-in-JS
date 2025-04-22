// Array

// Find first max natural number
const arr = [10, 30, 40, 40, 40];

// let suppose this is my max number
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// Find first max and second max natural number
// if (arr.length < 2) {
//   console.error("Second number is not valid!");
// } else {
//   let fmax = Math.max(arr[0], arr[1]);
//   let smax = Math.min(arr[0], arr[1]);
//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > fmax) {
//       smax = fmax;
//       fmax = arr[i];
//     } else if (arr[i] < fmax && arr[i] > smax) {
//       smax = arr[i];
//     }
//   }
//   if (fmax === smax) {
//     console.error("Second max number is not valid!");
//   } else {
//     console.log(fmax);
//     console.log(smax);
//   }
// }

// Reverse the array elements
let j = 0;

// filter all 0 at left side and 1 at right side.
// const arr1 = [1, 1, 0, 1, 0, 1, 1, 0, 0];
// let i = 0,
//   j = 0;

// while (i < arr1.length) {
//   if (arr1[i] == 0) {
//     let temp = arr1[i];
//     arr1[i] = arr1[j];
//     arr1[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr1);

// filter all negative value at left and and positive number at right side

