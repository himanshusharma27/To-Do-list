import './index.css';
import { loadFromLocalStorage, renderToDoList } from './todo.js';
import {
  handleAddButtonClick,
  handleKeyPress,
  handleClearButtonClick,
} from './eventHandlers.js';

loadFromLocalStorage();
renderToDoList();
const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', handleAddButtonClick);
const valueInput = document.querySelector('.value');
valueInput.addEventListener('keypress', handleKeyPress);
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', handleClearButtonClick);


function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  
  var task = taskInput.value.trim();
  
  if (task !== "") {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(task));
    taskList.appendChild(listItem);
    
    taskInput.value = "";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskList = document.getElementById('taskList');
  
  tasks.forEach((task) => {
    createTaskElement(task);
  });
});

// Add a task to the list
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  
  if (task !== '') {
    createTaskElement(task);
    saveTasksToLocalStorage(task);
    taskInput.value = '';
  }
}


// Create a new task element and append it to the list
function createTaskElement(task) {
  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');
  const taskText = document.createTextNode(task);
  
  listItem.appendChild(taskText);
  taskList.appendChild(listItem);
  
  listItem.addEventListener('click', () => {
    listItem.classList.toggle('completed');
    saveTasksToLocalStorage();
  });
   // Add event listener to remove a task
   listItem.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    listItem.remove();
    saveTasksToLocalStorage();
  });
}

// Save tasks to local storage
function saveTasksToLocalStorage() {
  const tasks = Array.from(document.querySelectorAll('#taskList li')).map((task) => task.innerText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
