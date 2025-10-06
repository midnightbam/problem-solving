function reverseString(text) {
  // Start Coding Here
  let reversed = text.split('').reverse().join('');
  return reversed;
}

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"
