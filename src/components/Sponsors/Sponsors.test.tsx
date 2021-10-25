import React from 'react';
import { render, screen } from '@testing-library/react';
import Sponsors from './Sponsors';

test('renders sponsors text', () => {
  render(<Sponsors />);
  const titleText = screen.getByText('Sponsors');
  expect(titleText).toBeInTheDocument();

  const title = screen.getByRole('header');
  expect(title).toBeInTheDocument();
});
