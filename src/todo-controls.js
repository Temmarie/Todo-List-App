const todoForm = document.getElementById('todos');

const project = (name, list) => ({ name, list });

const todoList = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

const addItem = (item, array) => array.push(item);

const createTodo = () => {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const dueDate = todoForm.date.value;
  const priority = todoForm.priority.value;
  return todoList(title, description, dueDate, priority);
};

const saveForm = (todo) => {
  todo.title = todoForm.title.value;
  todo.description = todoForm.description.value;
  todo.dueDate = todoForm.date.value;
  todo.priority = todoForm.priority.value;
};

const edit = (todo) => {
  todoForm.title.value = todo.title;
  todoForm.description.value = todo.description;
  todoForm.date.value = todo.dueDate;
  todoForm.date.priority = todo.priority;
};

export {
  project, addItem, createTodo, saveForm, edit, todoForm,
};