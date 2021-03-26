import { render, screen } from '@testing-library/react';
import PickType from './PickType';
import { RecoilRoot } from 'recoil'

test('renders lunch button on food type picker', () => {

    render(
    <RecoilRoot>
        <PickType scroll="up" />
    </RecoilRoot>
    );
    
    const linkElement = screen.getByText(/Lunch/i);
    
    expect(linkElement).toBeInTheDocument();
});