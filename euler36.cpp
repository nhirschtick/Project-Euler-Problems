//projecteuler.net/problem=36
#include <cmath>
#include <iostream>
#include <stack>
using namespace std;

// problem:
/*
  The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

  Find the sum of all numbers, less than one million, which are palindromic in
  base 10 and base 2.

  correct answer: 872187
*/

// Answer:  872187

// steps:
/*
  note: leading zeros in a binary number do not count towards palindrome.
        this means that any palindromic number must be odd
        (creating half as many cases)

  1. create a stack<int> (prolly not even necessary)
    a. create a function that calculates the binary version of a decimal number
        (sometimes these get way too big so i had to do a string instead of ints) (this took a lot of debugging to figure out)
    b. create a function that checks if a number is palindromic
        (this should work on binary and decimal numbers)
    c. check if the number is palindromic, if it is, convert to binary and
       check if that new number is palindromic (incrementing the decimal by 2)
    d. push the int onto the stack
        (should be wayy less than 500,000 entries)
  2. pop the stack getting the sum of all numbers
*/

// main
int getSum(int n);

// check for palindrome (n is decimal or binary)
bool isPalindromic(int n);

// return true iff n is palindromic in binary form
bool binaryChecker(int n);

bool stringPalindromeCheck(string s);

// notes:
/*
  i really enjoyed this problem because it is the kind of problem that on the surface looks complex but after some basic thoughts it becomes very approachable.

  i also really enjoyed getting to refresh my knowledge of data structures from my past class
*/

// driver
int main(){
  // limit = 1,000,000
  int lim = 1000000;

  cout<<getSum(lim);

return 0;
}

// works
int getSum(int lim){
  // lim should be 1,000,000 (find up to 999,999)

  int sum = 0;

  for (int i = 1; i < lim; i += 2) {
    if(isPalindromic(i)){
      // cout<<i<<endl; // for debugging
      // two seperate if statements saves time (but could use &&)

      if(binaryChecker(i)){
        // cout<<i<<", "<<getBinary(i)<<endl;
        sum += i;
      }
    }
  }

  return sum;
}

// works
bool isPalindromic(int n){

  int copy = n; // used for copying data (shocking)

  // create a dummy (this will be the inverse of n)
  int dummy = 0;

  while (copy) { // copy > 0
    int rightmostdig = copy % 10;
    dummy = (dummy * 10) + rightmostdig;
    copy = (copy - rightmostdig)/10; // shift copy over to the right
  }

  return dummy == n; // compare to n
}

// works
bool binaryChecker(int n){

  string binaryStr = "";

  while(n > 0){
    binaryStr += n % 2;
    n = floor(n/2);
  }

  return stringPalindromeCheck(binaryStr);

}

// works
bool stringPalindromeCheck(string s){
  // from my data structures and algorithms class
  stack<char> letters;

  // fill letters stack with the letters in s
  for (size_t i = 0; i < s.size(); i++)
    letters.push(s[i]);

  string dummy;

  while(!letters.empty()){
    // construct dummy backwards
    dummy += letters.top();
    letters.pop();
  }

  return dummy == s;
}
