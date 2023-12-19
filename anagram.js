// Return true if the two given strings are anagrams. Otherwise, return false.

// A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.

// For example:

// friend and Finder are anagrams.
// The Morse Code and Here come dots are anagrams as well.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case
// (lower or upper case) in order to check for anagrams.

function Anagram(string1, string2){
  let s1 = string1.replace(/[^a-z0-9]/gi,'').toLowerCase();
  let s2 = string2.replace(/[^a-z0-9]/gi,'').toLowerCase();
  let s1Array = s1.split("");
  let s2Array = s2.split("");
  let s1Sorted = s1Array.sort();
  let s2Sorted = s2Array.sort();
    if(s1Sorted.join("") === s2Sorted.join("")){
        return true;
    } else{
        return false;
    }
}

console.log(Anagram('friend', 'finder')) // true
console.log(Anagram('FRIEND', 'finder')) // true
console.log(Anagram('friend', 'find')) // false
console.log(Anagram('friend', 'smile')) // false
console.log(Anagram('friend', 'finDer')) // true
