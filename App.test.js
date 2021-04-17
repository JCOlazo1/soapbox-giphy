import React from 'react'
import ReactDOM from 'react-dom'
import { unmountComponentAtNode } from 'react-dom';

import App from './App'
import GifContainer from './components/gif-container/gif-container';

let root = null;

// Setup:
beforeEach(() => {
  root = document.createElement("div");
});

// Run tests HERE:

test("renders, like at all", () => {
  // Renders a React component to DOM:
  // root = document.createElement("div");
  ReactDOM.render(<App />, root);

  // Use DOM APIs (querySelector) to make assertions:
  expect(root.querySelector("h1").textContent).toBe("Grid-splosion!");
  expect(root.querySelector("button").textContent).toBe("SHOW THE GIFS!");
});


 // Cleanup:
afterEach(() => {
  unmountComponentAtNode(root);
  root.remove();
  root = null;
})