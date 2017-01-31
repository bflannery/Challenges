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

// function chunkArrayInGroups(arr, size) {
//   let tempArr = [];
//   let newArr = [];
//
//   for(i=0; i <arr.length; i++) {
//     if( i % size !== size-1)
//     tempArr.push(arr[i]);
//
//    else {
//     tempArr.push(arr[i]);
//     newArr.push(tempArr);
//     tempArr=[];
//   }
// }
//
//   if(tempArr.length !==0)
//     newArr.push(tempArr);
//       return newArr;
// }
//
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

// function slasher(arr, howMany) {
// return arr.slice(howMany);
// }
//
// console.log(slasher([1, 2, 3], 2));
// console.log(slasher([1, 2, 3], 0));
// console.log(slasher(["burgers", "fries", "shake"], 1));
// console.log(slasher([1, 2, 3], 4));
// console.log(slasher([1, 2, 3], 9));

// function mutation(arr) {
//   // console.log(arr[1].toLowerCase().split(''))
//   return arr[1].toLowerCase()
//                .split('')
//                .every((letter) => {
//                   // console.log(arr[0].toLowerCase().indexOf(letter));
//                   return arr[0].toLowerCase()
//                     .indexOf(letter) != -1;
//                   });
// }
//
//
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "neo"]));
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));


// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
//
// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer([1, null, NaN, 2, undefined]));
// console.log(bouncer(["a", "b", "c"]));
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));


// function destroyer(arr) {
//   let argArr = arr.slice.call(arguments);
//   argArr.splice(0,1);
//   return arr.filter((element) => {
//     return argArr.indexOf(element) === -1;
//   });
//
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53));


// function getIndexToIns(arr, num) {
//     arr.sort((a,b)=>{
//       return a - b;
//     });
//   for(var i in arr) {
//     if(arr[i] >= num)
//       return parseInt(i);
//     }
//     return arr.length;
// }
//
// console.log(getIndexToIns([5, 3, 20, 3], 5));
// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([2, 5, 10], 15));
//
// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz

// function fizzBuzz(num) {
//   console.log(num);
//     for (var i = 0; i <= 100; i++) {
//       if (i % 5 === 0 && i % 3 === 0 ) {
//         console.log('fizzbuzz');
//       } else if (i % 5 === 0) {
//         console.log('buzz');
//       } else if (i % 3 === 0) {
//         console.log('fizz');
//       } else {
//         console.log(i);
//       }
//     }
//   }
//
// console.log(fizzBuzz(100));

//
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first.


//Given an array of X integers, can you find the sum of its elements?
// function sumArr(arr) {
//   let sum = arr.reduce((a,b) => {
//     return a+b;
//   }, 0);
//   return sum;
// }
//
// console.log(sumArr([1,2,3,4,10,11]));
// console.log(sumArr([2,6,9,15,25,42]));
// console.log(sumArr([19,42,98,15,10,3]));

// //Compare the values of 2 arrays.
// //If  Alice[i] > Bob[i], then Alice is awarded 1 point.
// //If Alice[i] < Bob[i] , then Bob is awarded 1 point.
// //If Alice[i] =  Bob[i], then neither person receives a point.
//
// function compArr(alice , bob){
//   alicePoints = 0;
//   bobPoints= 0;
//
//   for(i=0; i < 3; i++){
//     console.log(alice[i]);
//     console.log(bob[i]);
//       if(alice[i] < bob[i]) {
//         bobPoints += 1;
//       } else if (alice[i] > bob[i]) {
//         alicePoints += 1;
//       }
//     }
//     return 'AlicePoints = ' + alicePoints + ' ' + 'BobPoints = ' + bobPoints;
//   }
//
//
// console.log(compArr([5,6,7],[3,6,10]));
// console.log(compArr([32,0,19],[10,7,100]));
// console.log(compArr([8,510,32],[9,12,98]));


// function fizzBuzz(){
// 	var output;
// 	for(var i=1;i<=100;i++){
// 		output = '';
// 		if(i%3 === 0){
// 			output+='Fizz';
// 		}
// 		if(i%5 === 0){
// 			output+='Buzz';
// 		}
// 		if(output === '') {
// 			output+=i;
// 		}
// 		console.log(output);
// 	}
// }
// fizzBuzz();

// Rotate the array (first arg) left n (second arg) amount of times

// function arrRot(arr, n) {
//   let i = 0;
//
//   let result = arr.map(function() {
//
//     return arr[(i++ + n) % arr.length];
//   });
//
//   console.log(result.join(" "));
//
//   }
//
// arrRot([1,2,3,4,5],4);
//

// Remove vowels from the string

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }
//
// console.log(disemvowel("This website is for losers LOL!"));


// Give 3 integers, will they make a triangle

// function isTriangle(a,b,c){
//   if(a+b > c && a+c > b && b+c > a) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// console.log(isTriangle(1,2,2));
// console.log(isTriangle(7,2,2));


// function sumTwoSmallestNumbers(numbers) {
//   let sorting = numbers.sort((a,b) => {
//     if(a > b) {
//       return a;
//     }
//   });
// return sorting[0] + sorting[1];
//
// }
//
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

// function alphabetPosition(text) {
//   var str = '';
//   text.replace(/[^a-zA-Z]+/g,'').toLowerCase().split('').map(x=> str += (x.charCodeAt()-96 + ' '));
//   return str.slice(0,-1);
// }

//
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// S = string
// N = string.length
// firstStr = even characters of string
// secondStr = odd characters of string
// result = " {firstStr} + {secondStr} "



// Split N strings into an even and odd string
// function evenOdd(arr) {
//
//   strArr = arr.splice(1,arr.length);
//
//   for(i=0; i < strArr.length; i++) {
//     even = [];
//     odd = [];
//     splitStr = strArr[i].toLowerCase().split('');
//       for(j=0; j < splitStr.length; j++) {
//         if(j % 2 === 0) {
//           even.push(splitStr[j]);
//         } else {
//           odd.push(splitStr[j]);
//       }
//     }
//   return odd.join('') + "  " + even.join('');
// }
//
// }
//
// console.log(evenOdd([ 2, "Hacker" , "Rank", "Steve"]));

//
// function list(names) {
// let nameStr = "";
//
// if(names.length === 0) return nameStr;
//
// if(names.length === 1) return nameStr+=names[0].name;
//
// for(i=0; i < names.length -2; i++) {
//   nameStr += names[i].name + " ,";
// }
//
// nameStr += names[names.length -2].name + " & " + names[names.length - 1].name;
//
// return nameStr;
// }
//
// console.log(list([
//   {name: 'Bart'},
//   {name: 'Lisa'},
//   {name: 'Maggie'},
//   {name: 'Homer'},
//   {name: 'Marge'}
// ])
// );
//
// console.log(list([]));
// console.log(list([ {name:'Bart'}]));
  //'Bart, Lisa, Maggie, Homer & Marge',"Must work with many names"));

  //
  // function getMiddle(s){
  //   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
  //
  //
  // console.log(getMiddle("test"));

//
//   function iqTest(numbers) {
//     var arrayNum = numbers.split(" ").map(Number);
//     if (arrayNum[0] % 2 !== arrayNum[1] % 2 && arrayNum[0] % 2 !== arrayNum[2] % 2) {
//       return 1;
//     }
//     else {
//     for(i=0; i < numbers.length; i++) {
//       if(arrayNum[i] % 2 !== arrayNum[0] %2) {
//         return (i + 1);
//       }
//     }
//   }
// }
//
//
// // console.log(iqTest("2 4 7 8 10"));
//
// function duplicateEncode(word){
//     let dic = {}, res = '';
//     word = word.toLowerCase();
//     for (let i in word){
//       if (!(word[i] in dic))
//           dic[word[i]] = 0;
//       dic[word[i]] ++;
//     }
//     for (let i in word)
//       res += dic[word[i]] == 1 ? '(' : ')';
//     return res;
// }
//
// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("recede"));

// function rgb(r, g, b) {
// 	function toHex(rgb) {
// 		if (rgb < 0) {
// 			return "00";
// 		}
//
// 		if (rgb > 255) {
// 			return "FF";
// 		}
//
// 		var hex = rgb.toString(16);
//     console.log(hex);
// 		return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
// 	}
// 	return toHex(r) + toHex(g) + toHex(b);
// }
//
//
// console.log(rgb(255, 255, 255));
// console.log(rgb(255, 0, 300));
// console.log(rgb(148, 0, 211));
// 
// function anagrams(word, words) {
//   return words.filter(function(item){
//     return item.split('').sort().join('') === word.split('').sort().join('');
//   });
// }
//
//
//
//
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

// function titleCase(title, minorWords) {
//   let result = [];
//   let splitWords = minorWords.toLowerCase().split(' ');
//   let splitStr = title.toLowerCase().split(' ');
//   let wordMap = splitStr.map((word, i ,arr) =>{
//     if(word === splitWords[i]) {
//       result += word[i];
//     } else {
//       result += word.charAt(0).toUpperCase();
//     }
//
//   });
//   console.log(result);
//   }
// console.log(titleCase('a clash of KINGS', 'a an the of'));
// //
// // splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
