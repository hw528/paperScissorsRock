const todoList = [];

function addBtn(){
    const inputEle = document.getElementById("mytodo");
    const name = inputEle.value;
    
    todoList.push(name);
   
    inputEle.value = '';
}

function addToWeb(){
    let todoListHTML='';
   
    for(let i=0;i<todoList.length;i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML +=html;
    }
    document.querySelector('.todolist').innerHTML = todoListHTML;
}