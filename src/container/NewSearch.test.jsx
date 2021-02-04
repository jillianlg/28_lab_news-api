/* eslint-disable no-undef */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewSearch from './NewSearch';

describe('NewSearch container', () => {
  it('changes the news results via the search input', () => {
    render(<NewSearch />);

    const searchInput = screen.getByLabelText('Search');
    fireEvent.change(searchInput, {
      target: {
        value: 'apple'
      }
    });

    return waitFor(() => {
      const articles = screen.getByTestId('article');
      expect(articles).not.toBeEmptyDOMElement();
      expect(searchInput).toHaveValue('apple');
    });
  });
});
