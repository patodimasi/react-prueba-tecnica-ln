// Articles.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ArticleContext from '../context/ArticleContext'; // Ajusta la importación según tu estructura de archivos
import { Articles } from './Articles'; // Ajusta la importación según tu estructura de archivos

describe('Articles Component', () => {
  const mockArticles = [
    {
      _id: "article1",
      display_date: "2023-01-01T03:00:00.000Z",
      headlines: {
        basic: "Artículo 1"
      },
      promo_items: {
        basic: {
          url: "https://example.com/article1.jpg"
        }
      },
      taxonomy: {
        tags: [
          {
            slug: "tag1",
            text: "Tag 1"
          }
        ]
      }
    },
    {
      _id: "article2",
      display_date: "2023-01-02T03:00:00.000Z",
      headlines: {
        basic: "Artículo 2"
      },
      promo_items: {
        basic: {
          url: "https://example.com/article2.jpg"
        }
      },
      taxonomy: {
        tags: [
          {
            slug: "tag2",
            text: "Tag 2"
          }
        ]
      }
    }
  ];
  
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

    // Verificar que se renderizan todos los titulos
    expect(getByText('Artículo 1')).toBeInTheDocument();
    expect(getByText('Artículo 2')).toBeInTheDocument();

    // Verificar que se renderizan todas las imagenes
    // Recuperar todas las imágenes renderizadas
    const images = getAllByRole('img');
    // Verificar que hay dos imágenes
    expect(images.length).toBe(2);
    // Verificar que la URL de la primera imagen es correcta
    expect(images[0].src).toBe('https://example.com/article1.jpg');
    // Verificar que la URL de la segunda imagen es correcta
    expect(images[1].src).toBe('https://example.com/article2.jpg');

    // Verificar que se rendericen las fechas
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

    // assertions here
    // Verificar que se renderizan los artículos que contengan el slug pasado por argumento
    expect(getByText('Artículo 2')).toBeInTheDocument();

    // Verificar que las imágenes y fechas se renderizan correctamente
    const image = getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://example.com/article2.jpg');
    expect(getByText('2 de enero de 2023')).toBeInTheDocument();
  });

});
