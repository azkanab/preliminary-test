import { render, screen } from '@testing-library/react';
import Address from './Address';

test('renders alamat pengantaran text on top of the page', () => {

    render(<Address />);
    
    const linkElement = screen.getByText(/PENGANTARAN/i);
    
    expect(linkElement).toBeInTheDocument();
});