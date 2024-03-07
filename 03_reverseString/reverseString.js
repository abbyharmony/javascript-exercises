const reverseString = function(str) {
   let splitStr = str.split("");
   let reversedStr = splitStr.reverse();
   let joinedStr = reversedStr.join("");
   return joinedStr;
};

// Do not edit below this line
module.exports = reverseString;
