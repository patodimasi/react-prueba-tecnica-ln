import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Necesario para simular routing
import { describe, it, expect } from 'vitest';
import { Tag } from './Tag';
import { mockTag } from '../../mocks/mockTag';

describe('Tag component', () => {
 
  it('debe renderizar 10 tags con los enlaces correctos', () => {
    render(
      <BrowserRouter>
        <Tag tags={mockTag} />
      </BrowserRouter>
    );

    const tagElements = screen.getAllByRole('link');
    expect(tagElements).toHaveLength(10);

    mockTag.forEach((tag, index) => {
      expect(tagElements[index]).toHaveTextContent(tag.text);
      expect(tagElements[index]).toHaveAttribute('href', `/tema/${tag.slug}`);
    });
  });
});

