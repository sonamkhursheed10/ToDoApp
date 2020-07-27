var list = document.getElementById("list");



function addtodo(){
    var todo_item = document.getElementById("todo_item");
    
    //LIST
    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    
    //DELETE BUTTON
    var delBtn = document.createElement("button");
    var detText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(detText)

     //Edit Button
     var editBtn = document.createElement("button");
     var editText = document.createTextNode("Edit")
     editBtn.setAttribute("class","btn")
     editBtn.setAttribute("onclick","editItem(this)")
     editBtn.appendChild(editText)

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    todo_item.value="";
    document.getElementById("list").style.listStyle = "none";
    document.getElementById("list").style.fontFamily = "Serif";
    document.getElementById("list").style.color = "#2A0869";
    document.getElementById("list").style.fontSize = "2em";  
    list.appendChild(li)
    console.log(li)

}

function deleteItem(e){
    e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
var val = prompt("Enter Your Value Here",e.parentNode.firstChild.nodeValue);
e.parentNode.firstChild.nodeValue = val;
}