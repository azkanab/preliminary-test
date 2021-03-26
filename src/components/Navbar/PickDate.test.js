import { render, screen } from '@testing-library/react';
import PickDate from './PickDate';
import { RecoilRoot } from 'recoil'

test('renders a date on date picker', () => {

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowDate = tomorrow.getDate()

    render(
    <RecoilRoot>
        <PickDate />
    </RecoilRoot>
    );
    
    const linkElement = screen.getByText(tomorrowDate);
    
    expect(linkElement).toBeInTheDocument();
});