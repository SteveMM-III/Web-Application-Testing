import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('it displays a button with the text Foul', () => {
  const { getByText } = render(<App />);
  getByText( 'Foul' );
});

test('it displays a button with the text Ball', () => {
  const { getByText } = render(<App />);
  getByText( 'Ball' );
});

test('it displays a button with the text Strike', () => {
  const { getByText } = render(<App />);
  getByText( 'Strike' );
});

test('it displays a button with the text Hit', () => {
  const { getByText } = render(<App />);
  getByText( 'Hit' );
});