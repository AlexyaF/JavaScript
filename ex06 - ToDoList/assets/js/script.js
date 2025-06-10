const InputTask = document.querySelector('.input_new_task');
const addTaskButon = document.querySelector('.btn__add__task');
const tasks = document.querySelector('.task__list');

function creatNewTask(text) {
    const li = document.createElement('li');
    li.innerText = text;
    tasks.appendChild(li);
}

addTaskButon.addEventListener('click', function() {
    if (!InputTask.value) return;

    creatNewTask(InputTask.value);
});