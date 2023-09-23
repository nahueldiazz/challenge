import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Items from './index';
import '@testing-library/jest-dom';

jest.mock('../../services/itemsService', () => ({
  getItems: jest.fn().mockResolvedValue({
    author: {
      name: 'Nahuel',
      lastname: 'Diaz',
    },
    categories: ['Electronics', 'Clothing', 'Books'],
    items: [
      {
        id: 'MLA1117980186',
        title: 'Apple iPhone 12 (128 Gb) - Negro - Distribuidor Autorizado',
        price: {
          currency: 'ARS',
          amount: 1277898.05,
          decimals: 50,
        },
        picture:
          'http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
    ],
  }),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      search: 'test query',
    },
    push: jest.fn(),
  }),
}));

describe('Items', () => {
  it('renders the Items component with fetched data', async () => {
    render(<Items />);

    await waitFor(() => {
      expect(screen.getByText('Apple iPhone 12 (128 Gb) - Negro - Distribuidor Autorizado')).toBeInTheDocument();
    });
  });
});
