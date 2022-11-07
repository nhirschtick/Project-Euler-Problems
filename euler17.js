//projecteuler.net/problem=17
// this project is one that i used to enhance my js skills
// i wrote this when i was just learning js to get an idea of the basic syntax and other differences from c++ (my main language)

// problem:
/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
*/

// Answer:  21124

//input: 1-9 (and 0)
function oneDigitLength(num){
  switch (num) {
    case 0:
      return 0;
      break;
    case 1:
      return 3;
      break;
    case 2:
      return 3;
      break;
    case 3:
      return 5;
      break;
    case 4:
      return 4;
      break;
    case 5:
      return 4;
      break;
    case 6:
      return 3;
      break;
    case 7:
      return 5;
      break;
    case 8:
      return 5;
      break;
    case 9:
      return 4;
      break;
    default:
      console.log(`invalid input (oneDigitLength) num = ${num}`);
      return 0;
  }
}

//input: 10-99 (and 0)
function tenDigitLength(num){

  let count = 0;

  if(num < 20){
    //10-19 (and 0)
    count += teensLength(num);
  } else {
    //20 - 99
    count += oneDigitLength(num % 10);

    num -= num % 10;

    switch (num) {
      case 20:
        count += 6;
        break;
      case 30:
        count += 6;
        break;
      case 40:
        count += 5;
        break;
      case 50:
        count += 5;
        break;
      case 60:
        count += 5;
        break;
      case 70:
        count += 7;
        break;
      case 80:
        count += 6;
        break;
      case 90:
        count += 6;
        break;
      default:
        console.log(`invalid input (tenDigitLength) num = ${num}`);
        return 0;
      }
    }

  return count;
}

//input: 10-19 (and 0)
function teensLength(num){
  switch (num) {
    case 0:
      return 0;
      break;
    case 10:
      return 3;
      break;
    case 11:
      return 6;
      break;
    case 12:
      return 6;
      break;
    case 13:
      return 8;
      break;
    case 14:
      return 8;
      break;
    case 15:
      return 7;
      break;
    case 16:
      return 7;
      break;
    case 17:
      return 9;
      break;
    case 18:
      return 8;
      break;
    case 19:
      return 8;
      break;
    default:
      console.log(`invalid input (teensLength) num = ${num}`);
      return 0;
  }
}

//input: 100-999
function hundredDigitLength(num){
  let count = 0;
  let tens = num % 100;
  //seven to account for the word 'hundred'
  count += 7;

  //add three to account for the word 'and' ('and' is not used in numbers like 100, 200, etc.)

  if(num % 100 === 0){
    count += oneDigitLength((num - tens)/100);
  } else if(tens < 10){
    //0 - 9
    count += 3;
    count += oneDigitLength(tens);
    count += oneDigitLength((num - tens)/100);
  } else {
    //10 - 99
    count += 3;
    count += tenDigitLength(num % 100);
    count += oneDigitLength((num - tens)/100);
  }

  return count;
}

const main = (lim) =>{
  // essentially, my approach is to brute-force it
  // there aren't really many better ways
  let count = 0;

  //'run from 1 - 1000 inclusive'
  for(let i = 1; i <= lim; ++i){
    //console.log(num);

    if(i === 1000){
      //+11 to account for 'one thousand'
      //console.log(`1000 num = ${1000}`);
      count += 11;
    } else if(i < 10){
      //1 <= i < 10
      //console.log(`1 - 9 num = ${i}`);
      count += oneDigitLength(i);
    } else if(i < 100){
      //10 <= i < 100
      //console.log(`10 - 99 num = ${i}`);
      count += tenDigitLength(i);
    } else if(i >= 100 && i < 1000){
      //100 <= i < 1000
      //console.log(`100 - 999 num = ${i}`);
      count += hundredDigitLength(i);
    }
  }

  return count;
}

console.log(main(1000));
