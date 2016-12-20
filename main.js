//
// function reverseString(str) {
//   var reverseStr = str.split('').reverse().join('');
//   return reverseStr;
// }
//
// console.log(reverseString("hello"));
//
//
//
// function factorialize(num) {
//   var factoredNumber = num;
//   if (num === 0 || num === 1)
//     return 1;
//   while (num > 1) {
//     num--;
//     factoredNumber *= num;
//   }
//   return factoredNumber;
// }
// console.log(factorialize(5));
//
//
//
// function palindrome(str) {
//   var x = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
//   if(x.split('').reverse().join('') === x) {
//     return true;
// } else {
//   return false;
// }
// }
//
//
// console.log(palindrome("eye"));
// console.log(palindrome("2A3*3a2"));
// console.log(palindrome("1 eye for of 1 eye."));
// console.log(palindrome("My age is 0, 0 si ega ym."));


function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
