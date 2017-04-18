var   prompt  = require('prompt');
const print   = console.log;

let board = `
 -   -   -   
 -   -   -   
 -   -   -   
`

// the state of the board
// all squares are initially blank
let state = [];
for (var i = 0; i < 9; i ++) {
  state.push(null);
}

// a function to render the state of the board
var render = boardState => {
  return `
    ${ boardState[0] || '-' }   ${ boardState[1] || '-' }   ${ boardState[2] || '-' }   
    ${ boardState[3] || '-' }   ${ boardState[4] || '-' }   ${ boardState[5] || '-' }   
    ${ boardState[6] || '-' }   ${ boardState[7] || '-' }   ${ boardState[8] || '-' }   
  `
}

// a function to check if someone won
var check = boardState => {
  var s = boardState;
  if ( (s[0] === 'X' && s[1] === 'X' && s[2] === 'X')
    || (s[3] === 'X' && s[4] === 'X' && s[5] === 'X')
    || (s[6] === 'X' && s[7] === 'X' && s[8] === 'X')
    || (s[0] === 'X' && s[3] === 'X' && s[6] === 'X')
    || (s[1] === 'X' && s[4] === 'X' && s[7] === 'X')
    || (s[2] === 'X' && s[5] === 'X' && s[8] === 'X')
    || (s[0] === 'X' && s[4] === 'X' && s[8] === 'X')
    || (s[2] === 'X' && s[4] === 'X' && s[6] === 'X')
    ) {
    return 'X';
  }
  if ( (s[0] === 'Y' && s[1] === 'Y' && s[2] === 'Y')
    || (s[3] === 'Y' && s[4] === 'Y' && s[5] === 'Y')
    || (s[6] === 'Y' && s[7] === 'Y' && s[8] === 'Y')
    || (s[0] === 'Y' && s[3] === 'Y' && s[6] === 'Y')
    || (s[1] === 'Y' && s[4] === 'Y' && s[7] === 'Y')
    || (s[2] === 'Y' && s[5] === 'Y' && s[8] === 'Y')
    || (s[0] === 'Y' && s[4] === 'Y' && s[8] === 'Y')
    || (s[2] === 'Y' && s[4] === 'Y' && s[6] === 'Y')
    ) {
    return 'Y';
  }
  return false;
}


print('* * * * * * * * * * * * * *');
print('* * * * TIC TAC TOE * * * *');
print('* * * * * * * * * * * * * *');

print('New game?');
print('1: Yes');
print('2: Nah');

prompt.start();

prompt.get(['Select an option'], (err, result) => {
  console.log('Option selected: ', result['Select an option']);
  prompt.get(['hi'], (err, result) => {
    console.log('RESULT: ', result.hi);
  })
})