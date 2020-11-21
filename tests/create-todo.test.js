const todoList = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});
const todoForm = {
  title: {
    value: 'Tife',
  },
  description: {
    value: 'Tife-List',
  },
  date: {
    value: 2020 - 11 - 20,
  },
  priority: {
    value: 'low',
  },
};
const createTodo = () => {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const dueDate = todoForm.date.value;
  const priority = todoForm.priority.value;
  return todoList(title, description, dueDate, priority);
};

it('should pass if the properties are correct', () => {
  const action = createTodo();
  expect(action.title).toStrictEqual('Tife');
});

it('should pass if the properties are correct', () => {
  const action = createTodo();
  expect(action.description).toStrictEqual('Tife-List');
});

it('should pass if the properties are correct', () => {
  const action = createTodo();
  expect(action.priority).toStrictEqual('low');
});

it('Creating New Todo', () => {
  const action = createTodo();
  const expectation = {
    title: 'Tife', description: 'Tife-List', dueDate: 2020 - 11 - 20, priority: 'low',
  };
  expect(action).toStrictEqual(expectation);
});
