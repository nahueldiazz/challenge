import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ItemDetail from './index';
import '@testing-library/jest-dom';

jest.mock('../../../services/itemsService', () => ({
  getItemDescription: jest.fn().mockResolvedValue({
    author: {
      name: 'Nahuel',
      lastname: 'Diaz',
    },
    item: {
      id: 'MLA1117980186',
      title: 'Apple iPhone 12 (128 Gb) - Negro - Distribuidor Autorizado',
      price: {
        currency: 'ARS',
        amount: 1277898.05,
        decimals: 50,
      },
      picture: 'http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 200,
      description:
        'El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas...',
    },
  }),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      id: 'MLA1117980186',
    },
  }),
}));

describe('ItemDetail', () => {
  it('renders the ItemDetail component with fetched data', async () => {
    render(<ItemDetail />);

    await waitFor(() => {
      expect(screen.getByText('Apple iPhone 12 (128 Gb) - Negro - Distribuidor Autorizado')).toBeInTheDocument();
      expect(screen.getByText('Nuevo')).toBeInTheDocument();
      expect(screen.getByText('$ 1277898.05')).toBeInTheDocument();
    });
  });
});
