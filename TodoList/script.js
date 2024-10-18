let todoList = [];
let editIndex = null;

function renderTodoList() {
  const todoListElement = document.getElementById('todo-list');
  todoListElement.innerHTML = '';

  todoList.forEach((task, index) => {
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.onclick = function() {
      editTask(index);
    };
 
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      deleteTask(index);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    todoListElement.appendChild(listItem);
  });
}

function addTask() {
  const todoInput = document.getElementById('todo-input');
  const task = todoInput.value.trim();

  if (task === '') {
    alert('Please enter a task.');
    return;
  }

  if (editIndex !== null) {
    todoList[editIndex] = task;
    editIndex = null;
  } else {
    todoList.push(task);
  }

  todoInput.value = '';
  renderTodoList();
}

function deleteTask(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function editTask(index) {
  const todoInput = document.getElementById('todo-input');
  todoInput.value = todoList[index];
  editIndex = index;
}

renderTodoList();
