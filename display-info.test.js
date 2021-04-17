import { render } from '@testing-library/react';
import React from 'react'
import ReactDOM from 'react-dom'
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import DisplayInfo from './display-info';

// Setup:
let root = null;

beforeEach(() => {
  root = document.createElement("div");
});

// Cleanup:
afterEach(() => {
  unmountComponentAtNode(root);
  root.remove();
  root = null;
})

// Run tests HERE:
test("renders", () => {
  // Renders a React component to DOM:
  // root = document.createElement("div");
  ReactDOM.render(<DisplayInfo />, root);

  // Use DOM APIs (querySelector) to make assertions:
  expect(root.querySelector("p").textContent).toBe("GIF Title:  ");
  // expect(root.querySelector("p").textContent).toBe("Trending Date:  "); -- How to scan subsequent p-tag?? -- Do I have to edit p-tag to be unique?
});

it("renders with or without a title", () => {
  // Without title:
  act(() => {
    render(<DisplayInfo />, root);
  });
  expect(root.textContent).toBe("");

  // With title:
  // act(() => {
  //   render(<DisplayInfo title="SWAG.gif" />, root);
  // });
  // expect(root.textContent).toBe("SWAG.gif")

});


