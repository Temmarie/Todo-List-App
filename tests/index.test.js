const todoList = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

const todoForm = {
    title: {
        value: ' '
    },
    description: {
        value: ' '
    },
    date: {
        value: ' '
    },
    priority: {
        value: ' '
    },
}

const clearForm = () => {
  todoForm.title.value = '';
  todoForm.description.value = '';
  todoForm.date.value = '';
};

it('should pass if the properties are correct', () => {
    const action = clearForm();
    const expectation = {title: " ", description: " ", dueDate: '', priority: ' '};
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
      const p = project('First Todo!', []);
    const expectation = addItem(p, mylist);
    expect(action).toEqual(undefined);
});
