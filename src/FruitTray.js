import React from 'react'

function FruitTray({ addToCart, fruitType, cart, price }) {
    const numberOfFruit = cart.filter(
        (fruit) => fruit.type === fruitType
    ).length

    const handleClick = () => {
        addToCart({ type: fruitType, price })
    }

    return (
        <div className="App">
            <p>
                You are buying {numberOfFruit} {fruitType}s
            </p>
            <button onClick={handleClick}>Add {fruitType}</button>
        </div>
    )
}

export default FruitTray
