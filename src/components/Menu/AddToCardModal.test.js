import { render, screen } from '@testing-library/react';
import AddToCardModal from './AddToCardModal';
import { RecoilRoot } from 'recoil'

test('renders order length on add to cart card modal', () => {

    const order = [{
        orderDate: new Date(),
        food: {
            name: 'Roasted Chicken with Scrambled Egg',
            img: '1.png',
            rating: 4.5,
            kitchen: 'Kulina',
            city: 'Uptown Lunch',
            price: 35000,
        }
    }]
    
    const total = 35000

    render(
    <RecoilRoot>
        <AddToCardModal order={order} total={total} />
    </RecoilRoot>
    );
    
    const linkElement = screen.getByText(/1 Item/i);
    
    expect(linkElement).toBeInTheDocument();
});