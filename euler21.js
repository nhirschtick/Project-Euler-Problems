//projecteuler.net/problem=21

// problem:
/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// Answer:  31626

// our "d(x)" function
function sumOfDivisors(n){
  let sum = 0;
  let i = 1;

  while(i < n){
    sum += (n % i === 0)? i : 0;
    ++i;
  }

  return sum;
}

function isPartOfAmicablePair(origin){

  const sumOfOrigin = sumOfDivisors(origin); // d(a)
  const sumOfNew = sumOfDivisors(sumOfOrigin); // d(b)
  let bool = (sumOfNew === origin); // d(b) = a

  if(origin === sumOfOrigin) // d(a) = a
    bool = false;

/*
  // for debugging:
  if(bool)
    console.log(`${origin} and ${sumOfOrigin} are a pair`);
*/

  return (bool);
}

const main = limit =>{
  // my plan here is to essentially work backwards, instead of taking two numbers and seeing if they're amicable, i take a number and find out if it has an amicable pair (as it is easy to find the expected number givin the origin)
  const pairs = [];
  let sum = 0;

  for (let i = 2; i < limit; i++) {
    // all i need to do now is check if each int is part of an amicable pair
    if(isPartOfAmicablePair(i)){
      sum += i;
      pairs.push(i);
    }
  }

  console.log(sum);

  return pairs;
}

console.log(main(10000).join(' '));
