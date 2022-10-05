'use strict';

const prompt = require('prompt-sync')();

function constOption() {
  console.log('\n$$ Select an Action! $$\n');
  console.log('(A) Create a Task To be Done');
  console.log('(B) Mark Tasks Completed');
  console.log('(C) Exit the Program\n');
  option = String(prompt('> ').toUpperCase());
}

function displayList() {

  if(list.length === 0) {
    console.log('List is currently empty!');
  } else {
    console.log(`\nYou have ${list.length} task(s).`)
  }

  for (let i = 0; i < list.length; i++) {
    let status = "";
    if(statusArray[i] === false){
      status = '[incomplete]';
    } else if(statusArray[i] === true){
      status = '[complete]';
    }
    console.log(`${i + 1}. ${status} ${list[i]}`);
  }

}

console.log('\nWelcome to your Personal To Do List!');

console.log('___________________________________________\n');

console.log('$$ Select an Action! $$\n');
console.log('(A) Create a Task To be Done');
console.log('(B) Mark Tasks Completed');
console.log('(C) Exit the Program\n');

let option = String((prompt('> ').toUpperCase()));
let list = [];
let statusArray = [];


while (option !== 'C') {
  if (option == 'A') {
    console.log('___________________________________________\n');
    console.log('$$ Create Task selected $$');
    console.log('Name your Task: \n');
    let item = String(prompt('> ').toUpperCase());
    while (item === "") {
      console.log('Input cannot be empty!');
      item = prompt('> ').toUpperCase();
    }
    list.push(item);
    statusArray.push(false);
    displayList();
    console.log('___________________________________________\n');
    constOption();
  } 
  
  else if (option === 'B') {
    if(list.length != 0) {
      console.log('___________________________________________\n');
          console.log('$$ Mark Tasks as Completed $$');
          console.log('Which Task is Complete?');    
          displayList();
          // console.log('\n');
          let newStatus = String(prompt('> ').toUpperCase());
          while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1) {
            console.log('Please enter a number corresponding to a Task!');
            newStatus = String(prompt('> ').toUpperCase());
          }
          statusArray[newStatus - 1] = true;
    } else {
      console.log('List is Empty. Try Adding a Task!'); 
    }
   
    displayList();
    console.log('___________________________________________\n');
    constOption();
  }

  else {
    console.log('___________________________________________\n');
    console.log('Invalid Operation!!');
    console.log('___________________________________________\n');
    constOption();
  }
}

console.log('___________________________________________\n');
console.log('See You Next Time!');
console.log('___________________________________________\n');



