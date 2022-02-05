// define UI vars 
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load all event listners 

loadEventListeners();

function loadEventListeners(){

    document.addEventListener('DOMContentLoaded',getTasks); //DOM Event loaded
    form.addEventListener('submit',addTask);
    tasklist.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTasks);
    filter.addEventListener('keyup',filterTasks);
    

}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks =[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task)
    {
        //create li element
        const li = document.createElement('li');
        // Add class 
        li.className='collection-item';
        // create text node
        li.appendChild(document.createTextNode(task));

         // create new link element
        const link = document.createElement('a');
        // Add class 
        link.className= 'delete-item secondary-content';
        // icon html 
        link.innerHTML = '<i class="far fa-trash-alt"></i>'; 
        // append the link to li 
        li.appendChild(link);

        // append li to ul

        tasklist.appendChild(li);
    //console.log(li);
    });
 
}

function addTask(e){

if (taskInput.value === '') {
    alert('Add a task');
    return;
}

        //create li element
        const li = document.createElement('li');
        // Add class 
        li.className='collection-item';
        // create text node
        li.appendChild(document.createTextNode(taskInput.value ));

         // create new link element
        const link = document.createElement('a');
        // Add class 
        link.className= 'delete-item secondary-content';
        // icon html 
        link.innerHTML = '<i class="far fa-trash-alt"></i>'; 
        // append the link to li 
        li.appendChild(link);

        // append li to ul
        tasklist.appendChild(li);

//sttore in local storage 
//getTasks(taskInput.value);
storeTaskInLocalStorage(taskInput.value); //sending input


taskInput.value ='';

e.preventDefault();

}
function storeTaskInLocalStorage(task){   //passing input value

    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks =[];
    }
    else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
    }
 tasks.push(task);
 localStorage.setItem('tasks',JSON.stringify(tasks));
}


function removeTask(e){

  // console.log(e.target.parentElement.classList);
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('Are You Sure')){
            e.target.parentElement.parentElement.remove();
            //Remove from LS
            removeTaskFromStorage(e.target.parentElement.parentElement);
        }
       
    }

}
function removeTaskFromStorage(taskItem){

    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks =[];
    }
    else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index)
    {
        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}
function clearTasks(e){
    // tasklist.innerHTML ='';
    // faster
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

// clear tasks from LS
clearTasksFromLocalStorage();

}
function clearTasksFromLocalStorage(){
    localStorage.clear();
}
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    
const val = document.querySelectorAll('.collection-item');
val.forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
        task.style.display ='block';
        console.log(task.style.display);
    }
    else{
        task.style.display = 'none';
    }
});

}
