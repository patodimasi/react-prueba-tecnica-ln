import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';

describe('Header component', () => {
  const tagsMock = [
    { slug: 'huevo-tid47236', text: 'Huevo' },
    { slug: 'leche-tid47244', text: 'Leche' },
    { slug: 'arroz-tid47136', text: 'Arroz' },
    { slug: 'manteca-tid47257', text: 'Manteca' },
    { slug: 'azucar-tid47141', text: 'Azucar' },
    { slug: 'harina-0000-tid48184', text: 'Harina 0000' },
    { slug: 'pescados-tid67216', text: 'Pescados' },
    { slug: 'ajo-tid47126', text: 'Ajo' },
    { slug: 'frutas-tid67217', text: 'Frutas' },
    { slug: 'canela-tid47164', text: 'Canela' }
  ];

  const renderComponent = () => {
    render(
      <Router>
        <Header />
      </Router>
    );
  };

  test('renders correctly with expected elements', () => {
    renderComponent();

    // Verificar el título de Row
    const rowTitle = screen.getByText('Acumulado Grillas');
    expect(rowTitle).toBeInTheDocument();

    // Verificar la lista de etiquetas
    tagsMock.forEach(tag => {
      const tagElement = screen.getByText(tag.text);
      expect(tagElement).toBeInTheDocument();
      
      // Verificar el formato del enlace generado
      const link = tagElement.closest('a');
      expect(link).toHaveAttribute('href', `/tema/${tag.slug}`);
    });
  });

  test('navigates to correct route on tag click', () => {
    renderComponent();

    // Simular clic en una etiqueta (por ejemplo, 'Huevo')
    const huevoTag = screen.getByText('Huevo');
    fireEvent.click(huevoTag);

    // Verificar que la ruta '/tema/huevo-tid47236' esté activa
    expect(screen.getByText('Artículos relacionados con Huevo')).toBeInTheDocument();
  });
});