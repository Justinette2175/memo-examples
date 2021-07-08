import React from 'react'
import FruitTray from './FruitTray'

// Cart array looks like this:
// [
//   {
//     price: 1.25
//     fruitType: "apple"
//   }
//   {
//     price: 1
//     fruitType: "orange"
//   }
// ]

function App() {
    const [cart, setCart] = React.useState([])

    const addToCart = (item) => {
        setCart((prev) => [...prev, item])
    }

    return (
        <div style={{ padding: '50px' }}>
            <h1>Lighthouse Fruits</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <FruitTray
                    addToCart={addToCart}
                    fruitType="apple"
                    cart={cart}
                    price={1}
                />
                <FruitTray
                    addToCart={addToCart}
                    fruitType="orange"
                    cart={cart}
                    price={2}
                />
            </div>
        </div>
    )
}

export default App
