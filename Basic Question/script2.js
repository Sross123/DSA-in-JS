// basics of Array 

// sum of natural number

// const num = Number(prompt("Enter natural number"));
// if (isNaN(num)) {
//     alert("Please enter natural number");
// } else {
//     if (num > 0) {
//         let sum = 0
//         for (let i = 1; i <= num; i++) {
//             sum += i; // sum = sum + i
//         }
//         console.log("sum of first " + num + " natural number is", sum);
//     } else {
//         alert("Please enter positive number and more than 0");
//     }
// }

// factorial

// const promp = prompt("Enter your number of natural number for factorial");

// if(prompt === null){
//     alert("Cancelled");
// }else{
//     if(isNaN(promp)){
//         alert("Invalid number");
//     }else{
//         if(promp > 0){
//             let fact = 1;
//             for(let i = 1; i<=promp; i++){
//                 fact = fact * i;
//             }
//             console.log("Factorial of " + promp + " is " + fact);
//         }else{
//             alert("Please enter positive number and more than 0");
//         }
//     }
// }

// const promp = prompt("Enter your number of natural number for factorial");

// if(promp < 1 || isNaN(promp)) console.log("Invalid number or should be more than 1");
// else{
//     let fact = 1;
//     while(promp > 1) fact *= promp--;
//     console.log("Factorial of " + promp + " is " + fact);
// }

// prime number

const promp = prompt("Enter your number of natural number for factorial");
if (promp < 1 || isNaN(promp)) console.log("Invalid number or should be more than 1");
else {
    console.log(isPrime(promp))
}

// agar number 1 se choti ya same hai to wo prime number nhi hai #False
// agar number 2 hai to sirf yhi prime number hai #true
// n%2 === 0 to wo number even hai prime number nahi hai #false
// 

function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i == 0) return false
    };
    return true;
}