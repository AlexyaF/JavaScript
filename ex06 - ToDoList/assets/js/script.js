const InputTask = document.querySelector('.input_new_task');
const addTaskButon = document.querySelector('.btn__add__task');
const tasks = document.querySelector('.task__list');

function creatNewTask(text) {
    const li = document.createElement('li');
    li.innerText = text;
    tasks.appendChild(li);
    clearInput()
}

function clearInput() {
    InputTask.value = '';
    InputTask.focus();
}

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