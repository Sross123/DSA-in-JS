// Left rotate 1 element;
let arr = [1,2,3,4,5];

// copy 0th index's element
const copyElem = arr[0];
// console.log(arr.length)
for(let i = 0; i < arr.length-1; i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = copyElem;
console.log(arr)

