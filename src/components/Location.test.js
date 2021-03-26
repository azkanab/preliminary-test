import { render, screen } from '@testing-library/react';
import Location from './Location';
import { RecoilRoot } from 'recoil'

test('renders location data on location modal', () => {
    const data = {
        name: 'Kulina',
        address: 'Jl. Tulodong Atas No.28'
    }

    const handleClick = () => {
        console.log('Kulina, Jl. Tulodong Atas No. 28')
    }
    
    render(
    <RecoilRoot>
        <Location data={data} onHandleClick={handleClick} />
    </RecoilRoot>
    );
    
    const linkElement = screen.getByText(/Tulodong/i);
    
    expect(linkElement).toBeInTheDocument();
});