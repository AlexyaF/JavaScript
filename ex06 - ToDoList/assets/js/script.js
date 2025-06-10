const InputTask = document.querySelector('.input_new_task');
const addTaskButon = document.querySelector('.btn__add__task');
const tasks = document.querySelector('.tasks');

addTaskButon.addEventListener('click', function() {
    if (!InputTask.value) return;

    console.log(InputTask.value);
});