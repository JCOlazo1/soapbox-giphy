import React from 'react'
import ReactDOM from 'react-dom'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { getQueriesForElement, fireEvent, waitFor, wait } from '@testing-library/react';

import GifContainer from './gif-container'

// Setup:
let root = null;
const mockCreateItem = (GifContainer.mockCreateItem = jest.fn()); // used to make a mock GIF to test

beforeEach(() => {
  root = document.createElement("div");
});

// Run tests HERE:
test("renders without crashing", () => {
  // Renders component to DOM:
  ReactDOM.render(<GifContainer />, root);

  // using 'getQueriesForElement'
  const { getByText } = getQueriesForElement(root);

  expect(getByText("GIF size:")).not.toBeNull();
})

test("Dropdown selector renders BIG", () => {
  // Renders component to DOM:
  ReactDOM.render(<GifContainer />, root);

  // using 'getQueriesForElement'
  const { getByText } = getQueriesForElement(root);

  expect(getByText("Big")).not.toBeNull();
});

test("Dropdown selector renders MEDIUM", () => {
  // Renders component to DOM:
  ReactDOM.render(<GifContainer />, root);

  // using 'getQueriesForElement'
  const { getByText } = getQueriesForElement(root);
  expect(getByText("Medium")).not.toBeNull();
});

test("Dropdown selector renders SMALL", () => {
  // Renders component to DOM:
  ReactDOM.render(<GifContainer />, root);

  // using 'getQueriesForElement'
  const { getByText } = getQueriesForElement(root);
  expect(getByText("Small")).not.toBeNull();
})

test.todo("Mock GIF renders");
// test("Mock GIF renders", async () => {
//   const testUrl = "https://i.pinimg.com/originals/c0/5e/00/c05e007495ee422c9198d05a355caf49.gif"
//   mockCreateItem.mockResolvedValueOnce({ id:1, url: testUrl });
//   const { getByText, getByLabelText } = render(<div id='gif-size' />); // --> 

//   const setter = getByLabelText("GIF size:");
//   fireEvent.change(setter, {target: { value: testUrl }});

//   await waitFor(() => getByText(testUrl));
// }) --> still unsure how to render if a GIF loads

test.todo("changing gif size from dropdown changes the gif sizes");
test.todo("async call from 'giphyFetch' fetches from API");

// Cleanup:
afterEach(() => {
  unmountComponentAtNode(root);
  root.remove();
  root = null;
});