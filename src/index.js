import './src/styles/style.css';

import {
  project, addItem, createTodo, saveForm, edit, todoForm,
} from './todo-controls';

let mylist = [];
const addProject = document.getElementById('add-project');
const projectList = document.querySelector('#projects');
const newProj = document.querySelector('#project-form');
const create = document.querySelector('#create');
const input = document.querySelector('#form-input');
const cancel = document.querySelector('#cancel');
const todoShow = document.querySelector('.todo-item');
const todoControls = document.querySelector('#todo-controls');
const projectTitle = document.querySelector('#project-title');
const removeForm = document.querySelector('.remove-form');
const addForm = document.querySelector('.todo-form');
const check = document.querySelector('.check');

const store = () => {
  localStorage.setItem('savedData', JSON.stringify(mylist));
};

const checkForm = () => {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const dueDate = todoForm.date.value;
  const priority = todoForm.priority.value;
  if (title === '' || description === '' || dueDate === '' || priority === '') {
    document.querySelector('.form').classList.remove('d-none');
  } else {
    return true;
  }
  return false;
};

const classList = (btn) => {
  btn.classList.add('todo-btn');
};

const showDetails = (a, p5) => {
  a.addEventListener('click', () => {
    p5.classList.remove('d-none');
  });
};

const clearItems = () => {
  document.querySelectorAll('.to-remove').forEach((grid) => grid.parentNode.removeChild(grid));
};

const editForm = (btn, listed) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.del-btn').forEach((grid) => grid.parentNode.removeChild(grid));
    addForm.classList.remove('d-none');
    edit(listed);
    const editTodo = document.createElement('button');
    editTodo.textContent = 'Save';
    editTodo.classList.add('del-btn');
    classList(editTodo);
    addForm.appendChild(editTodo);
    editTodo.addEventListener('click', () => {
      document.querySelector('.del-btn').classList.add('d-none');
      saveForm(listed);
      store();
      addForm.classList.add('d-none');
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  });
};

const viewDetails = (p, item, list, index) => {
  const div1 = document.createElement('p');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  classList(btn1);
  classList(btn2);
  editForm(btn1, list);
  btn1.textContent = 'Edit Todo';
  btn2.textContent = 'Delete Todo';
  div1.classList.add('priority');
  div1.innerHTML = 'Description: ';
  div1.innerHTML += list.description;
  btn2.addEventListener('click', () => {
    item.list.splice(index, 1);
    store();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
  p.appendChild(div1);
  p.appendChild(btn1);
  p.appendChild(btn2);
};

const appendLists = (item) => {
  const p4 = document.createElement('p');
  p4.textContent = item.name;
  p4.classList.add('to-remove');
  p4.classList.add('bolden');
  projectTitle.appendChild(p4);
  item.list.forEach((listed, index) => {
    const pTitle = document.createElement('p');
    const pDueDate = document.createElement('p');
    const pPriority = document.createElement('p');
    const p5 = document.createElement('div');
    const taskCtn = document.createElement('div');
    taskCtn.classList.add('task');
    showDetails(pTitle, p5);
    pTitle.href = '#';
    p5.classList.add(index);
    pTitle.classList.add('to-remove');
    pDueDate.classList.add('to-remove');
    pPriority.classList.add('to-remove');
    pTitle.classList.add('title');
    pDueDate.classList.add('due-date');
    pPriority.classList.add('priority');
    pTitle.textContent = listed.title;
    const realDate = new Date(listed.dueDate);
    pDueDate.textContent = `Due by: ${realDate}`;
    pPriority.textContent = `Priority: ${listed.priority}`;
    p5.classList.add('to-remove');
    viewDetails(p5, item, listed, index);
    p5.classList.add('d-none');
    check.appendChild(pTitle);
    check.appendChild(pDueDate);
    check.appendChild(pPriority);
    check.appendChild(p5);
  });
};

const clearForm = () => {
  todoForm.title.value = '';
  todoForm.description.value = '';
  todoForm.date.value = '';
};

const clearList = () => {
  document.querySelectorAll('.clear').forEach((grid) => grid.parentNode.removeChild(grid));
};

const appendTodo = (item) => {
  document.querySelectorAll('.del-btn').forEach((grid) => grid.parentNode.removeChild(grid));
  const addTodo = document.createElement('button');
  classList(addTodo);
  addTodo.classList.add('del-btn');
  addTodo.textContent = 'Create Todo';
  addForm.appendChild(addTodo);
  addTodo.addEventListener('click', () => {
    if (checkForm()) {
      const newtodo = createTodo();
      addItem(newtodo, item.list);
      store();
      clearItems();
      appendLists(item);
      clearForm();
      document.querySelector('.todo-form').classList.add('d-none');
    }
  });
};

const delItem = (btn) => {
  btn.addEventListener('click', () => {
    const num = parseInt(btn.id, 10);
    mylist.splice(num, 1);
    store();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
};

const showtodos = (a, item, index) => {
  const addButton = document.createElement('button');
  const delButton = document.createElement('button');
  a.addEventListener('click', () => {
    document.querySelectorAll('.btns').forEach((grid) => grid.parentNode.removeChild(grid));
    document.querySelector('.todo-form').classList.add('d-none');
    clearItems();
    appendLists(item);
    todoShow.classList.remove('d-none');
    delButton.textContent = 'Delete Project';
    delButton.classList.add('btns');
    delButton.id = index;
    todoControls.appendChild(delButton);
    todoControls.appendChild(addButton);
    addButton.textContent = 'Add Todo';
    addButton.classList.add('btns');
    classList(addButton);
    classList(delButton);
    addButton.addEventListener('click', () => {
      clearForm();
      document.querySelector('.todo-form').classList.remove('d-none');
      appendTodo(item);
    });
  });
  return delButton;
};

const showList = () => {
  clearList();
  mylist.forEach((item, index) => {
    const li = document.createElement('li');
    const del = showtodos(li, item, index);
    delItem(del);
    del.onclick = showList;
    li.textContent = item.name;
    li.classList.add('clear');
    li.classList.add('project-item');
    projectList.appendChild(li);
  });
};

function newProject() {
  cancel.addEventListener('click', () => {
    input.value = '';
    newProj.classList.add('d-none');
  });

  create.addEventListener('click', () => {
    if (input.value == null || input.value === '') return;
    const newAdded = project(input.value, []);
    addItem(newAdded, mylist);
    store();
    newProj.classList.add('d-none');
    input.value = '';
    showList();
  });

  addProject.addEventListener('click', () => {
    newProj.classList.remove('d-none');
  });

  removeForm.addEventListener('click', () => {
    document.querySelector('.todo-form').classList.add('d-none');
  });
}

const defaultProject = () => {
  mylist = [];
  const p = project('First Todo!', []);
  addItem(p, mylist);
};

const previous = () => {
  if (!localStorage.savedData) {
    defaultProject();
    store();
  } else {
    mylist = JSON.parse(localStorage.getItem('savedData'));
    if (mylist.length === 0) {
      defaultProject();
      store();
    }
  }
  showList();
  newProject();
};

previous();