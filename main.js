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

// X goes first
var player = 'X';

// swap players at the end of each turn
var swap = () => {
  player = player === 'X' ? 'Y' : 'X';
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

// function to print out options and starter questions
var printOptions = (obj, ...questions) => {
  questions.forEach(question => print(question));
  for (let prop in obj) {
    print(`Choice ${ prop }: ${ obj[prop] }`);
  }
  print(' ');
}

// function to generate the selectable options based on the state
var genOptions = boardState => {
  let obj = {};
  boardState.forEach((val, i) => {
    if (!val) {
      obj[i] = `Select square ${ i }`;
    }
  })
  obj[99] = 'Exit/Quit';
  return obj;
}

// prompt the user to start a new game
var init = () => {

  print('* * * * * * * * * * * * * *');
  print('* * * * TIC TAC TOE * * * *');
  print('* * * * * * * * * * * * * *');

  let obj = {
    1: 'Yes',
    2: 'Nah'
  }

  printOptions(obj, 'New game?');

  prompt.start();
  prompt.get(['Select an option'], (err, result) => {
    var option = result['Select an option'];
    // print('Option selected: ', obj[option]);
    switch (option) {
      case '1': {
        print(render(state));
        cycle();
        break;
      }
      case '2': {
        print('Okay fine.');
        break;
      }
      default: break;
    }
  })
}

// A turn cycle
var cycle = () => {
  var options = genOptions(state);
  printOptions(options, `${ player }'s turn`);
  select(options);
}

// Prompts the player to make a move
var select = (options) => {
  prompt.get(['Select a choice'], (err, result) => {
    var option = result['Select a choice'];
    if (option === '99') {
      print('Goodbye!');
      return;
    }

    if (options[option]) {
      var b = Number(option);
      state[b] = player;
      print(`Player ${ player } selected square ${ option }`);
      print(render(state));
      swap();
      cycle();
    } else {
      print('Invalid choice. Try again.');
      select(options);
    }
  })
}


init();
