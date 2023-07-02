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
