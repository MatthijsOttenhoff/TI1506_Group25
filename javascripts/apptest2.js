function addNewItem(list){
  document.createElement("tr");
  var listItem = document.createElement("td");

  listItem.innerText = "Hello";


  list.appendChild(listItem);
}

var btnNew = document.getElementById("addtodo");
btnNew.onclick = function(){
  addNewItem(document.getElementById("todolist"));
}
