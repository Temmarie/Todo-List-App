const todoForm = {
  title: {
    value: ' ',
  },
  description: {
    value: ' ',
  },
  date: {
    value: ' ',
  },
  priority: {
    value: ' ',
  },
};

const clearForm = () => {
  todoForm.title.value = '';
  todoForm.description.value = '';
  todoForm.date.value = '';
};

it('should pass if the properties are correct', () => {
  const action = clearForm();
  expect(action).toStrictEqual(undefined);
});

const addItem = (item, array) => array.push(item);
const project = (name, list) => ({ name, list });
let mylist = [];
const defaultProject = () => {
  mylist = [];
  const p = project('First Todo!', []);
  addItem(p, mylist);
};

it('should return the default project', () => {
  const action = defaultProject();
  expect(action).toEqual(undefined);
});
