// Articles.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ArticleContext from '../../context/ArticleContext'; 
import { Articles } from './Articles'; 
import { mockArticles } from '../../mocks/mockArticles';

describe('Articles Component', () => {
  it('should render all articles when slug is empty', () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
            <Route path="/" element={
            <ArticleContext.Provider value={{ artContext: mockArticles }}>
                <Articles />
            </ArticleContext.Provider>
            }/>
        </Routes>
      </MemoryRouter>
    );


    expect(getByText('Artículo 1')).toBeInTheDocument();
    expect(getByText('Artículo 2')).toBeInTheDocument();

    const images = getAllByRole('img');
    expect(images.length).toBe(2);
    expect(images[0].src).toBe('https://example.com/article1.jpg');
    expect(images[1].src).toBe('https://example.com/article2.jpg');

    expect(getByText('1 de enero de 2023')).toBeInTheDocument();
    expect(getByText('2 de enero de 2023')).toBeInTheDocument();
  });

  it('should render filtered articles when a slug is provided', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter initialEntries={['/tema/tag2']}>
        <Routes>
          <Route path="/tema/:slug" element={
            <ArticleContext.Provider value={{ artContext: mockArticles }}>
              <Articles />
            </ArticleContext.Provider>
          }/>
        </Routes>
      </MemoryRouter>
    );

    expect(getByText('Artículo 2')).toBeInTheDocument();

    const image = getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://example.com/article2.jpg');
    expect(getByText('2 de enero de 2023')).toBeInTheDocument();
  });

});
