import { render, screen } from '@testing-library/react';
import LocationModal from './LocationModal';
import { RecoilRoot } from 'recoil'

test('renders tersedia text on location modal', () => {

    render(
    <RecoilRoot>
        <LocationModal />
    </RecoilRoot>
    );
    
    const linkElement = screen.getByText(/tersedia/i);
    
    expect(linkElement).toBeInTheDocument();
});