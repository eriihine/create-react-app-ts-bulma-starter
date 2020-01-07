import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders bulma navigation bar', () => {
  const { getByRole } = render(<App />);
  const linkElement = getByRole(/navigation/i);
  expect(linkElement).toBeInTheDocument();
});
