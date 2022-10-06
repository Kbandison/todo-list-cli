'use strict';

const prompt = require('prompt-sync')();

////////// Functions to be called later //////////
function constOption() {
  console.log('\n$$ Select an Action! $$\n');
  console.log('(A) Create a Task To be Done');
  console.log('(B) View Tasks');
  console.log('(C) Mark Tasks Completed');
  console.log('(D) Re-mark Tasks Incomplete');
  console.log('(E) Delete a Task');
  console.log('(F) Exit the Program\n');
  option = String(prompt('> ').toUpperCase());
}

function displayList() {

  if (list.length === 0) {
    console.log('List is currently empty!');
  } else {
    console.log(`\nYou have ${list.length} task(s).`)
  }

  for (let i = 0; i < list.length; i++) {
    let status = "";
    if (statusArray[i] === false) {
      status = '[incomplete]';
    } else if (statusArray[i] === true) {
      status = '[complete]';
    }
    console.log(`${i + 1}. ${status} ${list[i]}`);
  }

}

////////// Beginning of Code //////////
console.log('\nWelcome to your Personal To Do List!');
console.log('___________________________________________\n');

////////// Main Menu //////////
console.log('$$ Select an Action! $$\n');
console.log('(A) Create a Task To be Done');
console.log('(B) View Tasks');
console.log('(C) Mark Tasks Completed');
console.log('(D) Re-mark Tasks Incomplete');
console.log('(E) Delete a Task');
console.log('(F) Exit the Program\n');

let option = String(prompt('> ').toUpperCase());
let list = [];
let statusArray = []; //Array for Booleans

////////// Beginning of functionality //////////
while (option !== 'Y') {

  ////////// Code for Option A: Adding a Task //////////
  if (option == 'A') {
    console.log('___________________________________________\n');
    console.log('$$ Create Task selected $$');
    console.log('Name your Task (type "a" to return to main menu): \n');
    let item = String(prompt('> ').toUpperCase());//--------------------------------- //Prompt for either a task, or letter A to go back to main menu
    while (item != '/') { // ---------------------------------------------------------//Code will add a task if the letter A by itself is not the only input, and will loop till user inputs a
      while (item === "") { //--------------------------------------------------------//Empty string will alert the user to enter an input
        console.log('Input cannot be empty!');
        item = prompt('> ').toUpperCase();
      }
      list.push(item); //-------------------------------------------------------------//pushes task into the list array
      statusArray.push(false); //-----------------------------------------------------//this makes the status of each task as false, and is reassigned to incomplete per the function above
      console.log('___________________________________________\n');
      console.log(`${item} has been successfully Added!`);
      console.log('___________________________________________\n');
      displayList(); //---------------------------------------------------------------//displays the current list of tasks (or displays an empty list message) per the fuction above
      item = String(prompt('> ').toUpperCase());
      if (item === '/') {
        console.log('___________________________________________\n');
        constOption(); //-------------------------------------------------------------//displays/sends the user to the main menu
      }
    }
  }

  ////////// Code for Option B: View Tasks //////////
  else if (option === 'B') {
    console.log('___________________________________________\n');
    console.log('List of tasks: ');
    displayList();
    console.log('___________________________________________\n');
    constOption();
  }

  ////////// Code for Option C: Marking a Task Complete //////////
  else if (option === 'C') {
    if (list.length != 0) { //---------------------------------------------------------//Code will run as intended if the array is not empty
      console.log('___________________________________________\n');
      console.log('$$ Mark Tasks as Completed $$');
      console.log('Which Task is Complete? (type "c" to go back to the main menu)');
      displayList();
      let newStatus = String(prompt('> ').toUpperCase());
      while (newStatus != '/') { //----------------------------------------------------//same as above, but with an input of B
        while (isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1) {  //This will trigger if input is not a number, greater than the length of statusArray, or less than 1
          console.log('___________________________________________\n');
          console.log('Please enter a number corresponding to a Task!');
          console.log('___________________________________________\n');
          newStatus = String(prompt('> ').toUpperCase());
        }
        if (statusArray[newStatus - 1] === false) {
          statusArray[newStatus - 1] = true; //------------------------------------------//This will change the status of the task from true(completed) to false (incomplete)
          console.log('___________________________________________\n');
          console.log(`${list[newStatus - 1]} Has Been Successfully Marked Complete!`);
          console.log('___________________________________________\n');
          displayList();
        } else if (statusArray[newStatus - 1] === true) {
          console.log('___________________________________________\n');
          console.log(`${list[newStatus - 1]} is Already Marked Complete!`);
          console.log('___________________________________________');
          displayList();
        }
        newStatus = String(prompt('> ').toUpperCase());
      }
      if (newStatus === '/') {
        console.log('___________________________________________\n');
        constOption();
      }
    } else {
      console.log('___________________________________________\n');
      console.log('Try Adding a Task, Because Your List is Empty!');
      console.log('___________________________________________\n');
      constOption();
    }
  }

  ////////// Code for Option D: Remarking Task as Incomplete //////////
  else if (option === 'D') {
    if (list.length != 0) {
      console.log('___________________________________________\n');
      console.log('$$ Re-mark Tasks as Incompleted $$');
      console.log('Which Task is Incomplete? (type "d" to go back to the main menu)');
      displayList();
      let newStatus = String(prompt('> ').toUpperCase());
      while (newStatus != '/') {
        while (isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1) {
          console.log('___________________________________________\n');
          console.log('Please enter a number corresponding to a Task!');
          console.log('___________________________________________\n');
          newStatus = String(prompt('> ').toUpperCase());
        }
        if (statusArray[newStatus - 1] === true) {
          statusArray[newStatus - 1] = false; //------------------------------------------//This will change the status of the task from true(completed) to false (incomplete)
          console.log('___________________________________________\n');
          console.log(`${list[newStatus - 1]} Has Been Successfully Re-marked Incomplete!`);
          console.log('___________________________________________\n');
          displayList();
        } else if (statusArray[newStatus - 1] === false) {
          console.log('___________________________________________\n');
          console.log(`${list[newStatus - 1]} is Already Marked Incomplete!`);
          console.log('___________________________________________\n');
          displayList();
        }
        newStatus = String(prompt('> ').toUpperCase());
      }
      if (newStatus === '/') {
        console.log('___________________________________________\n');
        constOption();
      }
    } else {
      console.log('___________________________________________\n');
      console.log('Try Adding a Task, Because Your List is Empty!');
      console.log('___________________________________________\n');
      constOption();
    }
  }

  ////////// Code for Option E: Deleting a Task //////////
  else if (option === 'E') {
    if (list.length >= 1) { //---------------------------------------------------------//If there are items in the list, code will run as intended
      console.log('___________________________________________\n');
      console.log('$$ Delete a Task $$');
      console.log('Which Task would you like to Remove? (type "e" to go back to the main menu)');
      displayList();
      let selected = prompt('> ').toUpperCase();
      // console.log('___________________________________________\n');
      while (selected != '/') {
        while (isNaN(selected) || selected > list.length || selected < 1) { //--------//This code from option B applies here too, with some tweaking
          console.log('___________________________________________\n');
          console.log('Please enter a number corresponding to a Task!');
          console.log('___________________________________________\n');
          selected = String(prompt('> ').toUpperCase());
        }
        console.log('___________________________________________\n');
        console.log(`${list[selected - 1]} Has Been Successfully Removed!`);
        console.log('___________________________________________\n');
        list.splice(selected - 1, 1); //---------------------------------------------//This targets the index (subtracted by 1), and deletes it
        displayList(); //------------------------------------------------------------//this list will be displayed with the selected item removed, and everything reordered
        selected = prompt('> ').toUpperCase();
      }

      if (selected === '/') {
        console.log('___________________________________________\n');
        constOption();
      }
    } else if (list.length < 1) { //------------------------------------------------//If the list is or empty, it will just go back to the main menu
      console.log('___________________________________________\n');
      displayList();
      console.log('___________________________________________\n');
      constOption();
    }
  }

  ////////// Code for Option F: Exit Code //////////
  else if (option === 'F') {
    console.log('___________________________________________\n');

    console.log('$$ Exiting the To-Do List! $$');
    console.log('Are You Sure You Want To Exit The List?\n Enter Y or N.\n');

    option = String(prompt('> ').toUpperCase());

    if (option == 'Y') {
      console.log('___________________________________________\n');
      console.log('See You Next Time!');
      console.log('___________________________________________\n');
    } else if (option == 'N') { //------------------------------------------------//an input of N sends the user back to the main menu
      console.log('___________________________________________\n');
      constOption();
    }
  }

  else {
    console.log('___________________________________________\n');
    console.log('Invalid Operation!!');
    console.log('___________________________________________\n');
    constOption();
  }
}


/* 
Added: 
-exit code, giving the user a chance to go back
-the ability to go back to the main menu from wherever they are
-ability to delete a task
-ability to enter multiple inputs before going back to the main menu
-ability to mark things incomplete again
-let them know what they have added, and what is completed and incomplete
-ability to view tasks
 
What I want to add:
-ability to change the order of tasks
*/