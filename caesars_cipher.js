// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function CaesarCipher(str) {
  const code = {
    A: 'N', N: 'A',
    B: 'O', O: 'B',
    C: 'P', P: 'C',
    D: 'Q', Q: 'D',
    E: 'R', R: 'E',
    F: 'S', S: 'F',
    G: 'T', T: 'G',
    H: 'U', U: 'H',
    I: 'V', V: 'I',
    J: 'W', W: 'J',
    K: 'X', X: 'K',
    L: 'Y', Y: 'L',
    M: 'Z', Z: 'M'
  };
  
  const decodeStr = [];
  
  for(let i = 0; i < str.length; i++){
    if(!code.hasOwnProperty(str[i])) {
      decodeStr.push(str[i])
    }
    decodeStr.push(code[str[i]]);
  }

  return decodeStr.join('');
}

console.log(CaesarCipher('SERR PBQR PNZC')) // FREE CODE CAMP
console.log(CaesarCipher('SERR CVMMN!')) // FREE PIZZA!
console.log(CaesarCipher('SERR YBIR?')) // FREE LOVE?
console.log(CaesarCipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')) // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
