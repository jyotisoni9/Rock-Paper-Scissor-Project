const todoList=[];

   displayTodoList();
function displayTodoList(){
   
  let todoListHTML='';
  
  for (let i=0; i<todoList.length;i++){
    const todoObject=todoList[i];
    //const name=todoObject.name;
    const {name,dueDate}=todoObject;
    //const dueDate=todoObject.dueDate;
    const html=`
      <div>${name}</div>
      <div> ${dueDate}</div>

      <button onclick=" 
      todoList.splice(${i},1);
      displayTodoList(); 
      " class=" delete-button">Delete</button>
    `;
    todoListHTML += html;
  }
  
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;

  const dateInputElement=document.querySelector('.js-due-Date-input');
  const dueDate=dateInputElement.value;
 
  todoList.push({
    name: name, //name
  dueDate:dueDate, //dueDate
});
  

inputElement.value='';

displayTodoList();
}