import { render, screen } from '@testing-library/react';
import Card from './Card';
import { RecoilRoot } from 'recoil'

test('renders food data on card', () => {

    const food = {
        name: 'Roasted Chicken with Scrambled Egg',
        img: '1.png',
        rating: 4.5,
        kitchen: 'Kulina',
        city: 'Uptown Lunch',
        price: 35000,
    }

    const order = []

    const setOrder = () => {
    }

    const date = new Date()

    const total = 150000

    const setTotal = () => {
    }

    render(
    <RecoilRoot>
        <Card food={food} order={order} setOrder={setOrder} date={date} total={total} setTotal={setTotal} />
    </RecoilRoot>
    );
    
    const linkElement = screen.getByText(/Uptown/i);
    
    expect(linkElement).toBeInTheDocument();
});