import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SingleArticle from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(
      <SingleArticle
        title="tesla"
        author="kat longfellow"
        description="Elon Musk did it again..."
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});

