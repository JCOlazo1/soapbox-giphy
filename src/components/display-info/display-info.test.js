import React from 'react'
import ReactDOM from 'react-dom'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { getQueriesForElement } from '@testing-library/react';

import DisplayInfo from './display-info';

// Setup:
let root = null;

beforeEach(() => {
  root = document.createElement("div");
});


// Run tests HERE:
test("renders", () => {
  // Renders a React component to DOM:
  // root = document.createElement("div");
  ReactDOM.render(<DisplayInfo />, root);

  // use 'getQueriesForElement'
  const { getByText } = getQueriesForElement(root);

  
  // Use DOM APIs (querySelector) to make assertions:
  expect(root.querySelector("p").textContent).toBe("GIF Title:  ");
  // expect(root.querySelector("p").textContent).toBe("Trending Date:  "); -- does this mean I need to use different tags?
  expect(getByText("Trending Date:")).not.toBeNull(); // getQueriesForElement provides better coverage and a more detailed error response
});


it("renders with or without a title", () => {
  // Without Title:
  act(() => {
    render(<DisplayInfo />, root);
  });
  expect(root.textContent).toBe("GIF Title:  Trending Date: ");

  // With Title:
  act(() => {
    render(<DisplayInfo title="SWAG" />, root);
  });
  expect(root.textContent).toBe("GIF Title: SWAG Trending Date: ")
});


it("renders with or without a trending date", () => {
  // Without Trending Date:
  act(() => {
    render(<DisplayInfo />, root);
  });
  expect(root.textContent).toBe("GIF Title:  Trending Date: ");

  // With Trending Date:
  act(() => {
    render(<DisplayInfo trendDate="01/02/03" />, root);
  });
  expect(root.textContent).toBe("GIF Title:  Trending Date: 01/02/03")
});


it("renders with both Title and Trending Date", () => {
  act(() => {
    render(<DisplayInfo title="Acid Jazz" trendDate="07/08/09" />, root);
  });
  expect(root.textContent).toBe("GIF Title: Acid Jazz Trending Date: 07/08/09")
});

// Cleanup:
afterEach(() => {
  unmountComponentAtNode(root);
  root.remove();
  root = null;
});


