import { render, screen } from '@testing-library/react';
import Location from './Location';

test('renders location data on location modal', () => {
    const data = {
        name: 'Kulina',
        address: 'Jl. Tulodong Atas No.28'
    }

    const handleClick = () => {
        console.log('Kulina, Jl. Tulodong Atas No. 28')
    }
    
    render(<Location data={data} onHandleClick={handleClick} />);
    
    const linkElement = screen.getByText(/Tulodong/i);
    
    expect(linkElement).toBeInTheDocument();
});