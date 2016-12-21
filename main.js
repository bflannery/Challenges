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


// function findLongestWord(str) {
//   var longestWord = str.split(' ').reduce(function(longest, currentWord) {
//     return currentWord.length > longest.length ? currentWord : longest;
//   }, "");
//   return longestWord.length;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//
//
// function titleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for(var i=0; i < str.length; i++) {
//     str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
//
//   }
//   return str.join(' ');
// }
//
// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


// function largestOfFour(arr) {
//   let largestNumber = [0,0,0,0];
//   for(var i=0; i < arr.length; i++) {
//     for(var j=0; j < arr[i].length; j++) {
//       if(arr[i][j] > largestNumber[i]) {
//         largestNumber[i] = arr[i][j];
//       }
//     }
//   }
//   return largestNumber;
// }
//
//
//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

//
// function confirmEnding(str, target) {
//   return str.substr(-target.length) === target;
// }
//
// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

// function repeatStringNumTimes(str, num) {
//   let finalStr = "";
//   while(0 < num) {
//     finalStr += str;
//       num--;
//   }
//     return finalStr;
// }
//
// console.log(repeatStringNumTimes("abc", 3));
// console.log(repeatStringNumTimes("*", 8));
// console.log(repeatStringNumTimes("abc", -2));



// function truncateString(str, num) {
//
//   // if str.length > str.length num
//   // return ...
//   // if the str.length num <= 3
//   // the dots do Not add to str.length
//   // console.log(str.length);
//   // console.log(num);
//
//   if (str.length > num && num > 3) {
//     return str.slice(0, (num - 3)) + '...';
//   } else if (str.length > num && num <= 3) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }
//
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
// console.log(truncateString("A-", 1));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
// console.log(truncateString("Absolutely Longer", 2));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
