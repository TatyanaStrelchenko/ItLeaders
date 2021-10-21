import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sponsors } from './Sponsors';

test('renders learn react link', () => {
  render(<Sponsors />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
