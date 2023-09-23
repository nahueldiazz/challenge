/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Navbar', () => {
  it('renders Navbar component', () => {
    render(<Navbar />);
    
    const logoImage = screen.getByAltText('Logo de MercadoLibre');
    const searchInput = screen.getByPlaceholderText('Buscar'); 
    const searchButton = screen.getByRole('search');
 
    expect(logoImage).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
