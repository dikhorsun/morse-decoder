const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****':  ' ',
};

function decode(expr) {
    let resultArr = [];
    for(let i=0; i<expr.length; i+=10){
        let letterTen = expr.substr(i, 10);
        let resultMini = '';
  
        for(let j=0; j<letterTen.length; j+=2){
            let letterTwo = letterTen.substr(j, 2);
            if(letterTwo === "10"){
              resultMini += '.'
            } else if(letterTwo === "11"){
              resultMini += '-'
            } else if(letterTwo === "**"){
              resultMini += '*'
            }
        }
        resultArr.push(resultMini)
    }
    return resultArr.map(v => MORSE_TABLE[v]).join('')
  }


module.exports = {
    decode
}