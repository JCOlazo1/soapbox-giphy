import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const checkContent = screen.getByText(/Grid/i);
  expect(checkContent).toBeInTheDocument();
});