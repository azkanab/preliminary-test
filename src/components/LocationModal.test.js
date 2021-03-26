import { render, screen } from '@testing-library/react';
import LocationModal from './LocationModal';

test('renders tersedia text on location modal', () => {

    render(<LocationModal />);
    
    const linkElement = screen.getByText(/tersedia/i);
    
    expect(linkElement).toBeInTheDocument();
});