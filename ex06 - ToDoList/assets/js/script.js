const InputTask = document.querySelector('.input_new_task');
const addTaskButon = document.querySelector('.btn__add__task');
const tasks = document.querySelector('.task__list');

function creatNewTask(text) {
    const li = document.createElement('li');
    li.innerText = text;
    tasks.appendChild(li);
    clearInput();
    addButonDelete(li);
    saveTask();
}

function clearInput() {
    InputTask.value = '';
    InputTask.focus();
}

function addButonDelete(li){
    li.innerText += " ";
    const deleteButon = document.createElement('button');
    deleteButon.innerText = 'Delete';
    li.appendChild(deleteButon);
    deleteButon.setAttribute('class', 'btn__delete__task');
}


function saveTask(){
    const liTasks = tasks.querySelectorAll('li');
    const listTasks = [];

    for (let task of liTasks){
        let taskText = (task.innerText);
        taskText = taskText.replace('Delete', '').trim();
        listTasks.push(taskText);
    };
    const jsonTasks = JSON.stringify(listTasks);
    localStorage.setItem('Tasks', jsonTasks);
}

function addSaveTasks(){
    const saveTasks = localStorage.getItem('Tasks');
    const taskList = JSON.parse(saveTasks);
    for (let tasks of taskList){
        creatNewTask(tasks);
    }
}

addSaveTasks();

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('btn__delete__task')) {
        el.parentElement.remove();
        saveTask();
    };
})

InputTask.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!InputTask.value) return;
        creatNewTask(InputTask.value);
    }
    
})

addTaskButon.addEventListener('click', function() {
    if (!InputTask.value) return;

    creatNewTask(InputTask.value);

});