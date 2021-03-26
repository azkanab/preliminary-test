import { render, screen } from '@testing-library/react';
import PickType from './PickType';

test('renders lunch button on food type picker', () => {

    render(<PickType scroll="up" />);
    
    const linkElement = screen.getByText(/Lunch/i);
    
    expect(linkElement).toBeInTheDocument();
});