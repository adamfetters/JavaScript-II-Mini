// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here

// when you code is ready, un-comment the next line and run the file
// console.log(countToTen());
/* ================ Next Problem ================= */
const countToTen = (num = 1) => {
    if (num === 11) return;
    return ('While Loop ' + num + '\n' + countToTen(num + 1)) ;
}

// Problem 2:

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));
console.log(countToTen())

// write the above functionin a recursive way.

// when you code is ready, un-comment the next line and run the file
// console.log(recursiveFactorial());
