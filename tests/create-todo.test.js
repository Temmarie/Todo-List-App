const todoList = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});
const todoForm = {
    title: {
        value: 'Tife'
    },
    description: {
        value: 'Tife-List'
    },
    date: {
        value: new Date()
    },
    priority: {
        value: 1
    },
}
const createTodo = () => {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const dueDate = todoForm.date.value;
  const priority = todoForm.priority.value;
  return todoList(title, description, dueDate, priority);
};
test('Creating New Todo', () => {
    const action = createTodo();
    const expectation = {title: "Tife", description: "Tife-List", dueDate: new Date(), priority: 1};
    expect(action).toEqual(expectation);
});