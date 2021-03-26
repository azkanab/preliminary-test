import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from './App';

test('renders kulina text on card', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const linkElement = screen.getByText(/Kulina/i);
  expect(linkElement).toBeInTheDocument();
});
