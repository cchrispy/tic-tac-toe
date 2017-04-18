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