import { render, screen } from '@testing-library/react';
import App from './App';

test('renders kulina text on card', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kulina/i);
  expect(linkElement).toBeInTheDocument();
});
