import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/To Do App Demo Using React/i);
  expect(headingElement).toBeInTheDocument();
});

test('adds a new task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter task name');
  const addButton = screen.getByText('Add a task');

  // Generate a random task name
  const newTaskName = `Task_${Math.floor(Math.random() * 1000)}`;

  // Simulate typing into the input field and clicking the Add button
  fireEvent.change(inputElement, { target: { value: newTaskName } });
  fireEvent.click(addButton);

  // Verify that the new task is displayed
  const taskElement = screen.getByText(newTaskName);
  expect(taskElement).toBeInTheDocument();
});

test('deletes a task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter task name');
  const addButton = screen.getByText('Add a task');

  // Generate a random task name
  const newTaskName = `Task_${Math.floor(Math.random() * 1000)}`;

  // Add a task first
  fireEvent.change(inputElement, { target: { value: newTaskName } });
  fireEvent.click(addButton);

  // Verify that the new task is displayed
  let taskElement = screen.getByText(newTaskName);
  expect(taskElement).toBeInTheDocument();

  // Click the delete button and verify that the task is removed
  const deleteButton = screen.getByText('Delete task');
  fireEvent.click(deleteButton);

  // Verify that the task is no longer in the document
  taskElement = screen.queryByText(newTaskName);
  expect(taskElement).not.toBeInTheDocument();
});
