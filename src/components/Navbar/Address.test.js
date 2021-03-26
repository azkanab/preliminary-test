import { render, screen } from '@testing-library/react';
import Address from './Address';
import { RecoilRoot } from 'recoil'

test('renders alamat pengantaran text on top of the page', () => {

    render(
    <RecoilRoot>
        <Address />
    </RecoilRoot>
    );
    
    const linkElement = screen.getByText(/PENGANTARAN/i);
    
    expect(linkElement).toBeInTheDocument();
});