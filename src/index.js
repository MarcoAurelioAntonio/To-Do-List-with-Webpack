import './style.css';
import {
  addText, loadData,
} from './components/addData.js';

const addBtn = document.getElementById('addBtn');
const clearAll = document.getElementById('clearBtn');
const listArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

let id = 1;
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (addText.value !== '') {
    const task = {
      description: `${addText.value}`,
      completed: false,
      index: id,
    };
    listArray.push(task);
    /* loadData(); */ // call to create the task element.

    // Load from local sttorage
    const tasks = localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : [];
    tasks.push(task);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
    localStorage.setItem('data', JSON.stringify(tasks));
  }
  id += 1;
  loadData();
});

clearAll.addEventListener('click', (e) => {
  e.preventDefault();
  const notDeleted = listArray.filter((x) => x.completed === false);
  /* console.log(notDeleted); */
  for (let i = 0; i < notDeleted.length; i += 1) {
    notDeleted[i].index = i + 1;
  }
  localStorage.setItem('data', JSON.stringify(notDeleted));
  loadData();
});
