import { render, screen } from '@testing-library/react';
import App from './App';

import { makeSequence } from './helpers/makeSequence';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText('Simple Simon Game');
  expect(element).toBeInTheDocument();
});

test('builds a sequence of defined size', () => {
  const size = 4 
  const sequence = makeSequence(size)
  console.log(sequence)
  expect(sequence).toHaveLength(size)
})