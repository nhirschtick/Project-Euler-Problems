//projecteuler.net/problem=23

// problem:
/*
  A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

  A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

  As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

  Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/
// essentially:
/*
  find the sum of all numbers that cannot be written as the sum of 2 abundant numbers

  (any number greater than 28123 can be written as the sum of 2 abundant numbers)
*/

// Answer:  4179871

//  works
function sumOfDivisors(n){
  let sum = 0;
  let i = 1;

  while(i < n){
    sum += (n % i === 0)? i : 0;
    ++i;
  }

  return sum;
}

//  works
function isAbundant(n){
  //is the sum of n's divisors > n itself?
  return (sumOfDivisors(n) > n)? true : false;
}

const main = (lim) =>{
  //lim is a const = 28123
  // ^see: problem^

  const abundantNum = [];
  //create list of abundant numbers
  for (let i = 1; i <= lim; i++) {
    if (isAbundant(i)) {
      abundantNum.push(i);
    }
  }

  const allAbundantSums = [];
  //use list to create all abundant sums
  for (let i = 0; i < abundantNum.length; i++) {
    for (let j = i; j < abundantNum.length; j++) {
      const newSum = abundantNum[i] + abundantNum[j];

      if (newSum <= lim) {
        allAbundantSums.push(newSum);
      }
    }
  }

  let bigSum = 0;
  //cross refrence list with number and, if it isnt found in list, add it to bigSum (return bigSum at end)
  for (let n = 0; n <= lim; n++) {
    //using n because n in this case is not just an iterator
    let isAbundantSum = false;
    //for loop checks against every value in allAbundantSums and breaks at first instance
    let i = 0;

    while (!isAbundantSum && i < allAbundantSums.length) {
      if (n === allAbundantSums[i]) {
        isAbundantSum = true;
      }

      ++i;
    }

    if (!isAbundantSum) {
      bigSum += n;
    }
  }

  return bigSum
}

console.log(main(28123));
