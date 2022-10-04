'use strict';

const prompt = require('prompt-sync')();

console.log('Welcome to your Personal To Do List!');

console.log('___________________________________________________________________________________\n');

console.log('$$ Select an Action! $$\n');
console.log('(A) Create a Task To be Done');
console.log('(B) Mark Tasks Completed');
console.log('(C) Exit the Program');

let option = String((prompt('> ').toUpperCase()));
let list = [];

while (option !== 'C') {

  if (option == 'A') {

    console.log('$$ Create Task selected $$');
    console.log('Name your Task: \n');

    let item = String(prompt('> ').toUpperCase());

    if (item === "") {
      console.log('Input cannot be empty!');
      item = prompt('> ').toUpperCase();
    }

    list.push(item);

    displayList();
    constOption();
  }

  else if (option === 'B') {

    console.log('$$ Mark Tasks as Completed $$');
    console.log('Which Task is Complete?');

    displayList();
    constOption();

  }

  else {
    console.log('Invalid Operation!!');
    constOption();
  }
}

console.log('Would you like to Exit the program?');

function constOption() {
  console.log('\n$$ Select an Action! $$\n');
  console.log('(A) Create a Task To be Done');
  console.log('(B) Mark Tasks Completed');
  console.log('(C) Exit the Program');
  option = String(prompt('> ').toUpperCase());
}

function displayList() {

  if(list.length === 0) {
    console.log('List is currently empty');
  } else {
    console.log(`You have ${list.length} tasks.`)
  }

  for (let i = 0; i < list.length; i++) {
    console.log(`${i + 1}. ${list[i]}`);
  }
}

