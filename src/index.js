/* import _ from 'lodash'; */
/* import './style.css'; */

const listArray = [
  {
    description: 'Help to mi Son to do hes homework',
    completed: false,
    index: 0,
  },
  {
    description: 'Go to the grocery store',
    completed: false,
    index: 1,
  },
  {
    description: 'Go for a run',
    completed: false,
    index: 2,
  },
];

const list = document.getElementById('list');
window.addEventListener('load', () => {
  for (let i = 0; i < listArray.length; i += 1) {
    // task div
    const div = document.createElement('div');
    div.classList.add('divTask');
    // check
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('check');
    // descrption
    const p = document.createElement('p');
    p.textContent = `${listArray[i].description}`;
    p.classList.add('p');
    // edit button TRICOLON
    const edit = document.createElement('button');
    edit.classList.add('edit');
    edit.textContent = '⁝';
    // appending p, check and tricolon
    div.appendChild(check);
    div.appendChild(p);
    // div container
    const divCont = document.createElement('div');
    divCont.classList.add('divCont');
    divCont.appendChild(div);
    divCont.appendChild(edit);
    list.appendChild(divCont);
  }
});