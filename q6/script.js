let list = [];

//this function just prints the list, it's used when we remove or add an item to the list
function printList() {
  document.getElementById("theList").innerHTML = "";
  for (i = 0; i < list.length; i++) {
    document.getElementById("theList").innerHTML += "<li>" + list[i] + "</li>";
  }
}
//this is the function to add an item
function addItem() {
  let newItem = prompt("What item would you like to add?");
  if (newItem == "" || newItem == " ") {
    alert("enter in a an item!");
  } else {
    list.push(newItem);
    printList();
  }
}

//this is the function to remove an item
function removeItem() {
  /*If an item appears more than once on the list
I wanted to make sure all instances got deleted, so i have used the old array to create
a new array with only the elements that are not equal to what the user
wants to remove
*/
  let badItem = prompt("What item would you like to remove?");
  badItem = badItem.toLowerCase();
  badItem = badItem.trim();
  let newArray = [];
  for (i = 0; i < list.length; i++) {
    list[i] = list[i].toLowerCase();
    list[i] = list[i].trim();
    if (badItem != list[i]) {
      newArray.push(list[i]);
    }
  }
  list = newArray;
  printList();
}
