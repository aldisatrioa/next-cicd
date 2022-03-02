import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages'

test('No items found in initial screen', async () => {
  render(<Home />)

  expect(screen.getByRole('empty-message')).toHaveTextContent('No items found..')
})

test('create new item', () => {
  const doc = render(<Home />)

  const inputFieldEl = doc.getByTestId('input')
  const addButtonEl = doc.getByTestId('add-btn')

  fireEvent.change(inputFieldEl, { target: { value: 'Sixteen' } });
  fireEvent.click(addButtonEl);

  const items = doc.getAllByTestId('item')

  expect(items.length).toBe(1);
})


test('delete item', () => {
  const doc = render(<Home />);

  const inputFieldEl = doc.getByTestId('input')
  const addButtonEl = doc.getByTestId('add-btn')

  fireEvent.change(inputFieldEl, { target: { value: 'Sixteen' } });
  fireEvent.click(addButtonEl);

  const todoDeleteButton = doc.getByTestId('delete-btn');
  fireEvent.click(todoDeleteButton);

  const todos = doc.queryAllByTestId('item');

  expect(todos.length).toBe(0);
})