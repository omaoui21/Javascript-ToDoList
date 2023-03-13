var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick=function(){

    if(inputField.value !=""){
        var paragraph=document.createElement('p')
    }
    paragraph.innerHTML=inputField.value ;

    toDoContainer.appendChild(paragraph);

    inputField.value = "";
}