document.addEventListener('DOMContentLoaded', (event) => {
    fetchTodos();
});

function fetchTodos() {
    fetch('/api/todos')
        .then(response => response.json())
        .then(data => {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = '';
            data.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.task;
                li.appendChild(createTodoStatus(todo.id));
                li.appendChild(createStatusChangeButton(todo.id));
                li.appendChild(createDeleteButton(todo.id));
                todoList.appendChild(li);
            });
        });
}


function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const newTodo = { task: newTodoInput.value };

    fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(data => {
        newTodoInput.value = '';
        fetchTodos();
    });
}

function createStatusChangeButton(todoId){
    const button = document.createElement('button');
    button.textContent = 'Update Status';
    button.onclick = () => changeStatus(todoId);
    return button;
}

function changeStatus(todoId){}

function createTodoStatus(todoId) {
    const selectCompleteStatus = document.createElement('select');
    const optOpen = document.createElement('option');
    const optDone = document.createElement('option');

    optDone.value = 'done';
    optOpen.value = 'open';
    optDone.innerHTML = 'Done';
    optOpen.innerHTML = 'Open';

    selectCompleteStatus.appendChild(optDone);
    selectCompleteStatus.appendChild(optOpen);

    return selectCompleteStatus;
}



function createDeleteButton(todoId) {
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.onclick = () => deleteTodo(todoId);
    return button;
}

function deleteTodo(todoId) {
    fetch(`/api/todos/${todoId}`, {
        method: 'DELETE'
    })
    .then(() => fetchTodos());
}
