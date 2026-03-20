let magicNo = 10;
console.log(magicNo);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// substring()
const str = "Mozilla";
console.log(str.substring(1, 3));
console.log(str.substring(2));

// indexOf()
const paragraph1 = "I think Ruth's dog is cuter than your dog!";
const searchTerm = "dog";
const indexOfFirst = paragraph1.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);

//replace()
const paragraph2 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph2.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

//repeat()
const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

//toUpperCase()
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

//toLowerCase()
const sentence1 = "The quick brown fox jumps over the lazy dog.";
console.log(sentence1.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

//trim()
const greeting = "   Hello world!   ";
console.log(greeting.trim());
// Expected output: "Hello world!";


