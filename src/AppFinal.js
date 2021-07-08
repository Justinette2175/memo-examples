import React from 'react'
import FruitTray from './FruitTray'

const PRICES = {
    apple: 1,
    orange: 2,
}

function App() {
    const [cart, setCart] = React.useState([])
    const [isHighPrice, setIsHighPrice] = React.useState(false)

    const addToCart = (item) => {
        setCart((prev) => [...prev, item])
    }

    const calculateTotal = () => {
        let t = 0
        cart.forEach((fruit) => {
            t += fruit.price
        })
        return t * 1.25 // Include 25% tax
    }

    const total = calculateTotal()

    return (
        <div style={{ padding: '50px' }}>
            <h1>Lighthouse Fruits</h1>
            <button onClick={() => setIsHighPrice((prev) => !prev)}>
                {isHighPrice ? 'Prices are HIGH!' : 'Prices are low'}
            </button>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <FruitTray
                    addToCart={addToCart}
                    fruitType="apple"
                    cart={cart}
                    price={isHighPrice ? PRICES['apple'] * 2 : PRICES['apple']}
                />
                <FruitTray
                    addToCart={addToCart}
                    fruitType="orange"
                    cart={cart}
                    price={
                        isHighPrice ? PRICES['orange'] * 2 : PRICES['orange']
                    }
                />
            </div>
            <h4>Total: ${total}</h4>
        </div>
    )
}

export default App
