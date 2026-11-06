import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { DEMO_NOTICE } from './Components/connection/Connection';
import { PRODUCTS } from './content';

test('renders the company heading and every product', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Гремячинский Док');
  PRODUCTS.forEach((product) => {
    expect(screen.getByRole('heading', { name: product.title })).toBeInTheDocument();
  });
});

test('the contact form says the site is a demo after submit', () => {
  render(<App />);
  expect(screen.queryByText(DEMO_NOTICE)).not.toBeInTheDocument();
  fireEvent.submit(screen.getByRole('button', { name: 'Связаться с нами' }).closest('form'));
  expect(screen.getByRole('status')).toHaveTextContent(DEMO_NOTICE);
});

test('the mobile menu button toggles its state', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Меню' });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
});
