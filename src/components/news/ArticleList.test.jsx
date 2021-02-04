import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Articles from './ArticlesList';

describe('ArticlesList component', () => {
  afterEach(() => cleanup());
  it('renders ArticlesList', () => {
    const { asFragment } = render(
      <Articles
        articles={[]}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});