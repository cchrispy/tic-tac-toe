var prompt = require('prompt');

const print = console.log;

print('* * * * * * * * * * * * * *')
print('* * * * TIC TAC TOE * * * *');
print('* * * * * * * * * * * * * *')

print('New game?');
print('1: Yes');
print('2: Nah');

prompt.start();
prompt.get(['Select an option'], (err, result) => {
  console.log('Option selected: ', result['Select an option']);
})