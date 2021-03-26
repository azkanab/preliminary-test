import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import AddToCardModal from '../components/Menu/AddToCardModal'
import LocationModal from '../components/LocationModal'
import { orderState, totalPrice } from '../states/order'
import { useRecoilState } from 'recoil';

export default function Home() {
    const [scroll, setScroll] = useState('up')
    const [prevScrollPosition, setPrevScrollPosition] = useState(window.pageYOffset)
    const [orders, setOrders] = useRecoilState(orderState)
    const [price, setPrice] = useRecoilState(totalPrice)

    useEffect(() => {
        window.onscroll = function() {
            var currentScrollPosition = window.pageYOffset;
            if (prevScrollPosition > currentScrollPosition) {
                setScroll('up')
            } else {
                setScroll('down')
            }
            setPrevScrollPosition(currentScrollPosition);
        }
    }, [prevScrollPosition])
    
    return (
        <div>
            <LocationModal />
            <Navbar scroll={scroll} />
            <Menu scroll={scroll} order={orders} setOrder={setOrders} total={price} setTotal={setPrice} />
            {orders.length !== 0 ?
                <AddToCardModal order={orders} total={price} />
            : ''}
        </div>
    )
}