/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 1 || n === 0) {
    return 1
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0
  }

  if (array.length === 1) {
    return array[0];
  } else {
    return array[array.length - 1] + sum(array.slice(0, array.length - 1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var total = 0;
  // for (var i = 0; i < array.length; i++) {
  //   var val = array[i];

  //   if(Array.isArray(val) === false) {
  //     total += val;
  //   } else {
  //     total += arraySum(val);
  //   }
  // }

  array.forEach(function(val) {
    if(Array.isArray(val)) {
      total += arraySum(val);
    } else {
      total += val;
    }
  })

  return total;

};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  } else if (n === 1){
    return false;
  }

  n  = Math.abs(n);
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n >= 0) {
    if (n === 0) {
      return 0;
    } else {
      return n  - 1 + sumBelow(n - 1);
    }
  } else {
    if (n === 0) {
      return 0;
    } else {
      return n + 1 + sumBelow(n + 1);
    }
  }

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === y || y - x === 1) {
    return [];
  }

  if (x > y) {
    if (x - y === 2) {
      return [x - 1]
    } else {
      var list = range(x, y + 1);
      list.push(y + 1);
      return list;
    }
  } else {
    if (y - x === 2) {
      return [x + 1];
    } else {
      var list = range(x, y - 1);
      list.push(y - 1);
      return list;
    }
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1
  } else if (exp < 0) {
    exp *= -1
    base *= exponent(base, exp - 1)
    return 1 / base;
  } else {
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  } else if (n - Math.floor(n) !== 0 || n === 0) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }

};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var newStr = string[string.length - 1];
  if (string.length === 1) {
    return newStr;
  } else {
    return newStr += reverse(string.slice(0, string.length - 1))
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();

  if (string.length % 2 === 0 && string.length === 2) {
    return string[0] === string[1];
  } else if (string.length === 1 ) {
    return true;
  } else {
    var match = palindrome(string.slice(1, string.length - 1));
    if (string[0] !== string[string.length - 1]) {
      match = false
    }

    return match;
  }
  // if (string.length % 2 === 0) {
  //   if (string.length === 2) {
  //     return string[0] === string[1]
  //   } else {
  //     var match = palindrome(string.slice(1, string.length - 1));
  //     if (string[0] !== string[string.length - 1]) {
  //       match = false
  //     }

  //     return match;
  //   }
  // } else {
  //   if (string.length === 1) {
  //     return true
  //   } else {
  //     var match = palindrome(string.slice(1, string.length - 1));
  //     if (string[0] !== string[string.length - 1]) {
  //       match = false
  //     }

  //     return match;
  //   }
  // }


};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x < 0) {
    return -modulo(-x, y);
  }

  if(y < 0) {
    return modulo(x, -y)
  }

  if (x < y) {
    return x;
  }
  return modulo(x - y, y);

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if(y === 0) {
    return 0;
  }
  if(y < 0) {
    return -multiply(x, -y)
  }
  return x + (multiply(x, y - 1))
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  var count = 0;

  if(x - y < 0) {
    return 0
  } else {
    return 1
  }

  count += divide(x - y, y)

  return count
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  var small = x;
  var big = y;
  if (x > y) {
    small = y;
    big = x;
  }

  if(x < 0 || y < 0) {
    return null
  }

  if(big % small === 0) {
    return small;
  } else {
    var remainder = big % small
    return gcd(small, remainder)
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // var count = 0
  // if (str1.length !== str2.length) {
  //   return false
  // }

  if (str1.length === 0 && str2.length === 0) {
    return true
  }

  if (str1.length === 1) {
    return str1[0] === str2[0]
  } else {

    var match = compareStr(str1.slice(0, str1.length - 1), str2.slice(0, str2.length - 1));

    if (str1[str1.length - 1] !== str2[str2.length - 1]) {
      match = false;
    }

    console.log(match)
    return match;

  }



};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {


  if(str.length === 1) {
    return [str[str.length - 1]]
  } else {
    var newArr = createArray(str.slice(0, str.length - 1))
    newArr.push(str[str.length - 1])
    return newArr
  }



};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if(array.length === 1) {
    return [array[0]]
  } else {
    var revArr = reverseArr(array.slice(1))
    revArr.push(array[0])
    return revArr;
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1) {
    return [value];
  } else {
    var newArr = buildList(value, length - 1)
    newArr.push(value);
    return newArr
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return [n.toString()]
  } else {
    var arr = fizzBuzz(n - 1)
    if (n % 15 === 0) {
      arr.push('FizzBuzz')
    } else if (n % 5 === 0) {
      arr.push('Buzz')
    } else if (n % 3 === 0) {
      arr.push('Fizz')
    } else {
      arr.push(n.toString())
    }

    return arr
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(array.length === 1) {
    if (array[0] === value) {
      return 1
    } else {
      return 0
    }
  } else {
    var count = countOccurrence(array.slice(1), value)
    if (array[0] === value) {
      count++
    }

    return count
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 1) {
    return [callback(array[0])]
  } else {
    var newArr = rMap(array.slice(0, array.length - 1), callback)
    newArr.push(callback(array[array.length - 1]))
    return newArr
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var total = 0;
  // console.log(obj)
  Object.keys(obj).forEach(function(val) {

    if(val === key) {
      total++
    }
    if (typeof obj[val] == 'object'){
      total += countKeysInObj(obj[val], key)

    }
  })

  return total;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var total = 0;
  Object.values(obj).forEach(function(val) {

    if (typeof val === 'object') {
      total += countValuesInObj(val, value);

    } else {
      if(val === value) {
        total++
      }

    }
  })

  return total;

};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  Object.keys(obj).forEach(function(key) {
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey]
    }

    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey)
    }
  })

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null
  }
  if(n === 1) {
    return [0, 1]
  } else {
    var newNum = fibonacci(n - 1)
    newNum.push(newNum[newNum.length - 2] + newNum[newNum.length - 1])
    return newNum
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null
  }
  if (n === 0) {
    return 0
  } else if(n === 1) {
    return 1
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2)
  }

};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[array.length - 1].toUpperCase()]
  } else {
    var capArr = capitalizeWords(array.slice(0,array.length - 1))
    capArr.push(array[array.length - 1].toUpperCase())
    return capArr
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 1) {
    var word = array[array.length - 1]

    return [word[0].toUpperCase() + word.slice(1)]

  } else {
    var firstCapArr = capitalizeFirst(array.slice(0,array.length - 1))

    var word = array[array.length - 1]

    firstCapArr.push(word[0].toUpperCase() + word.slice(1))

    return firstCapArr
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var total = 0;

  Object.values(obj).forEach(function(val) {
    if (typeof val === 'object') {
      total += nestedEvenSum(val);
    } else {
      if (val % 2 === 0) {
        total += val
      }
    }
  })

  return total;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var newArr = [];

  array.forEach(function(item) {
    if (!Array.isArray(item)) {
      newArr.push(item);
    } else {
      var subArr = flatten(item);

      newArr = newArr.concat(subArr);
    }
  })

  return newArr;
  // if (array.length === 1) {
  //   if (Array.isArray(array[0])) {
  //     flatten(array[0]);
  //   } else {
  //     return [array[0]]
  //   }
  // } else {
  //   var newArr = flatten(array.slice(0, array.length - 1))

  //   var newVal = array[array.length - 1]
  //   if (Array.isArray(newVal)) {
  //     flatten(newVal);
  //   } else {
  //     newArr.push(newVal)
  //   }

  //   return newArr;
  // }
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

  if (str.length === 1) {
    var object = {}
    object[str[0]] = 1
    // console.log()
    return object;
  } else {
    var newObj = letterTally(str.slice(1))

    var letter = str[0];

    if(newObj[letter]) {
      newObj[letter]++
    } else {
      newObj[letter] = 1
    }

    return newObj;
  }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if(list.length === 1) {
    return [list[0]]
  } else {
    var newList = compress(list.slice(0, list.length - 1))
    var nextLetter = list[list.length - 1];
    if (newList[newList.length - 1] !== nextLetter) {
      newList.push(nextLetter)
    }

    return newList
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  // console.log(array)
  if (array.length === 1) {
    array[0].push(aug)
    console.log(array[0])
    return [array[0]];
  } else {
    var newArr = augmentElements(array.slice(0,array.length - 1), aug)
    var currentArr = array[array.length - 1]
    currentArr.push(aug)
    newArr.push(currentArr)

    return newArr
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if(array.length === 1) {
    return [array[0]]
  } else {
    var newArr = minimizeZeroes(array.slice(0, array.length - 1))
    var currentVal = array[array.length - 1]
    if (newArr[newArr.length - 1] !== currentVal) {
      newArr.push(currentVal)
    }

    return newArr;

  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 1) {
    return [Math.abs(array[0])]
  } else {
    var newArr = alternateSign(array.slice(0, array.length - 1));
    var last = array[array.length - 1];
    if(newArr.length % 2 !== 0) {
      newArr.push(-Math.abs(last))
    } else {
      newArr.push(Math.abs(last))
    }

    return newArr
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numList = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    0 : 'zero'
  }

  if(str.length === 1) {
    if (numList[str[0]]) {
      return numList[str[0]]
    } else {
      return str[0]
    }
  } else {
    var newStr = numToText(str.slice(0, str.length - 1))
    var nextVal = str[str.length - 1]
    if (numList[nextVal]) {
      newStr += numList[nextVal]
    } else {
      newStr += nextVal
    }

    return newStr;
  }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {

  var mainTag = tag
  var nodeArr = Array.from(node.children)
  var count = 0;

  console.log(nodeArr)
  nodeArr.forEach(function(item) {
    console.log(item.tagName.toLowerCase())
    if (item.tagName.toLowerCase() === mainTag) {
      count++
    }

    console.log(item)
    if(item.children.length) {
      count += tagCount(mainTag, item)
    }
  })

  return count;
};


// if (element.classList) {
//   if (element.classList.contains(tempClass)) {
//     classElements.push(element);
//   }
// }

// checkCildren (Array.from(element.childNodes), tempClass);

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {

};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {

};
