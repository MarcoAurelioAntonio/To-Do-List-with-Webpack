// Constants:
const addText = document.getElementById('add');
const list = document.getElementById('list');

function loadData() {
  list.innerHTML = '';
  const listArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
  for (let i = 0; i < listArray.length; i += 1) {
    // task div
    const div = document.createElement('div');
    div.classList.add('divTask');
    // check
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.id = i + 1;
    check.classList.add('check');
    if (listArray[i].completed) {
      check.checked = true;
    }
    // descrption
    const descript = document.createElement('input');
    descript.value = `${listArray[i].description}`;
    descript.setAttribute('type', 'text');
    if (listArray[i].completed) {
      descript.style.textDecorationLine = 'line-through';
    }
    // read only field, for change when edit.
    descript.setAttribute('readOnly', 'readOnly');
    descript.classList.add('descrption');
    // edit button
    const tooltipDiv = document.createElement('button');
    tooltipDiv.id = i + 1;
    tooltipDiv.textContent = '⁝';
    tooltipDiv.classList.add('tooltip');

    // div container
    const divCont = document.createElement('div');
    divCont.id = i + 1;
    divCont.classList.add('divCont');
    // appending p, check and tricolon
    divCont.appendChild(check);
    divCont.appendChild(descript);
    divCont.appendChild(tooltipDiv);
    list.appendChild(divCont);

    addText.value = '';

    // Checking completed task.
    check.addEventListener('input', (event) => {
      if (check.checked) {
        const idChecked = event.target.id;
        const data = JSON.parse(localStorage.getItem('data'));
        data[idChecked - 1].completed = true;
        descript.style.textDecorationLine = 'line-through';
        localStorage.setItem('data', JSON.stringify(data));
      } else if (!check.checked) {
        const idNoChecked = event.target.id;
        const data = JSON.parse(localStorage.getItem('data'));
        data[idNoChecked - 1].completed = false;
        descript.style.textDecorationLine = 'none';
        localStorage.setItem('data', JSON.stringify(data));
      }
      window.location.reload();
    });

    // Edit button
    tooltipDiv.addEventListener('click', (event) => {
      /* event.preventDefault(); */
      /* console.log('ok'); */
      if (tooltipDiv.textContent === '⁝') {
        descript.removeAttribute('readonly');
        descript.focus();
        tooltipDiv.innerHTML = 'Save';
        tooltipDiv.style.color = 'grey';
      } else {
        const edited = descript.value;
        const idNumber = event.target.id;
        descript.setAttribute('readonly', 'readonly');
        tooltipDiv.innerHTML = '⁝';
        tooltipDiv.style.color = 'black';

        const data = JSON.parse(localStorage.getItem('data'));
        data[idNumber].description = `${edited}`;
        localStorage.setItem('data', JSON.stringify(data));
      }
    });
  }
}

// Refreshing or loading page
window.addEventListener('load', () => {
  loadData();
});

export {
  addText, loadData,
};
