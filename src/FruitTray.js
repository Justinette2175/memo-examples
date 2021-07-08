import React from 'react'

function FruitTray({ addToCart, fruitType, count, price }) {
    const handleClick = () => {
        addToCart({ type: fruitType, price })
    }

    return (
        <div className="App">
            <p>
                You are buying {count} {fruitType}s
            </p>
            <button onClick={handleClick}>Add {fruitType}</button>
        </div>
    )
}

export default FruitTray
