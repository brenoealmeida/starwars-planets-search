import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('testa todos os elementos', () => {
  render(<App />);
  const buttonElements = screen.getAllByRole('button');
  expect(buttonElements).toHaveLength(3);

  const textboxElements = screen.getAllByRole('textbox');
  expect(textboxElements).toHaveLength(1);

  const comboboxElements = screen.getAllByRole('combobox');
  expect(comboboxElements).toHaveLength(3);

  const optionElements = screen.getAllByRole('option');
  expect(optionElements).toHaveLength(13);

  const radioElements = screen.getAllByRole('radio');
  expect(radioElements).toHaveLength(2);

  const columnHeader = screen.getAllByRole('columnheader');
  expect(columnHeader).toHaveLength(13);

  //const rows = screen.getAllByRole('row');
  //expect(rows).toHaveLength(1);

});
