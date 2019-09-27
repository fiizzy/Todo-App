function appui(){
//Grabing input
const task = document.querySelector('#task');
const submit = document.querySelector('.btn');
const main = document.querySelector('.main-box');
const form =  document.querySelector('.form');
const taskList = document.querySelector('.task-list');
const clearTask = document.querySelector('.clear-all')
const errorMessage = document.querySelector('#error-message');
const registeredMessage = document.querySelector('#registered-message');
//Load event listener
// loadEventlisntener()
console.log(main)
//adding submit event
submit.addEventListener('click', addTask);

//Funtion Error Display
function errorDisplay(){
  errorMessage.style.setProperty('display', 'none');
}
//Funtion regsitered Display
function registeredDisplay(){
  registeredMessage.style.setProperty('display', 'none');
}

//addtask
//Function addTask
function addTask(e){
  if(task.value !== '') {

    //create Element li
    let list = document.createElement('li');
    //Add a class name
    list.className = 'task-value';

    //create div
    let div = document.createElement('div');
    //Add a class name
    div.className = 'main-box task animated heartBeat';
    
    //task
    let taskInput = document.createTextNode(`${task.value}`);

    //append text node
    div.appendChild(taskInput);
    //Anchor tag
    let anch = document.createElement('a');
    //Add a class name
    anch.className = 'deleteIcon';

    //Delete mark 'X'
    anch.innerHTML = `<b class="delete-icon">Delete</b>`
    //Append Anchor tag to div
    div.appendChild(anch);

    // main.appendChild(div);
    // form.parentNode.insertBefore(div, form.nextSibling);
    console.log(div)

    // Inserting Element after
    // main.parentNode.insertBefore(div, main.nextSibling);
    document.querySelector('.task-list').appendChild(div); 

    
    registeredMessage.style.setProperty('display', 'block');
    setTimeout(registeredDisplay, 3000);
    task.value ='';
         
    } else{
      errorMessage.style.setProperty('display', 'block');
      setTimeout(errorDisplay, 3000);  
  }
e.preventDefault();
}

  //Deleting task
  taskList.addEventListener('click', removeTask);
  
  // Remove Task
  function removeTask(e) {
  if(e.target.parentElement.classList.contains('deleteIcon')) {
  e.target.parentElement.parentElement.remove();
  }
}

//Clear all tasks
clearTask.addEventListener('click', ()=>{
  if(taskList.innerHTML === ''){
    errorMessage.style.setProperty('display', 'block');
      setTimeout(errorDisplay, 3000);  
  }else if(confirm('Are you sure ?')){
    taskList.innerHTML = '';
    task.value ='';
  }
})
}
