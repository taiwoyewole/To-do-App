loadEvents();

function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}


//submit data function
function submit(e) {
    e.preventDefault();
    let taskList;
    let input = document.querySelector('input');
    if (input.value !== '')
        addTask(input.value);
    input.value = '';
}

//function to add task
function addTask(task) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">X</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.taskBoard').style.display = 'block';
}

//clear function 
function clearList(e) {
    let ul = document.querySelector('ul').innerHTML = '';
}

//deleteTick
function deleteOrTick(e) {
    if (e.target.className === 'delete')
        deleteTask(e);
    else {
        tickTask(e);
    }
}

//tick a task
function tickTask(e) {
    const tickTask = e.target.nextSibling;
    if (e.target.checked) {
        tickTask.style.textDecoration = "line-through";
        tickTask.style.color = "#ff000";
    } else {
        tickTask.style.textDecoration = 'none';
        tickTask.style.color = '#2f4f4f';
    }
}

//delete a task
function deleteTask(e) {
    let deleteTask = e.target.parentNode;
    let parentNode = deleteTask.parentNode;
    parentNode.removeChild(deleteTask);
}