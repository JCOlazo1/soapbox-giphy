import React from 'react'
import ReactDOM from 'react-dom'
import { unmountComponentAtNode } from 'react-dom';

import App from './App'


// Setup:
let root = null;

beforeEach(() => {
  root = document.createElement("div");
});

// Run tests HERE:

test("renders", () => {
  // Renders a React component to DOM:
  ReactDOM.render(<App />, root);

  // Use DOM APIs (querySelector) to make assertions:
  expect(root.querySelector("h1").textContent).toBe("Grid-splosion!");
  expect(root.querySelector("button").textContent).toBe("SHOW THE GIFS!");
});

test.todo('Button works');
test.todo('Hiding/showing gifs works');
test.todo('clicking a gif renders');


 // Cleanup:
afterEach(() => {
  unmountComponentAtNode(root);
  root.remove();
  root = null;
})