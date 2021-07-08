import { useEffect, useMemo, useState } from 'react'
import useCustomCallback from './useCustomCallback'

const PRICES = {
    apple: 1,
    orange: 2,
}

function FruitTray({ addToCart, fruitType, cart }) {
    const price = PRICES[fruitType]

    // const [incrementBy, setIncrementBy] = useState(1)

    const numberOfFruit = cart.filter(
        (fruit) => fruit.type === fruitType
    ).length

    const totalForFruitType = price * numberOfFruit

    useEffect(() => {
        console.log('price after tax has changed', totalForFruitType)
    }, [totalForFruitType])

    // 0)
    const handleClick = () => {
        addToCart({ type: fruitType, price })
    }

    // 1)
    // const handleClick = useCallback(()=>{
    //   setFruitCount((prev)=> prev + 1)
    // }, [])

    // 2)
    // const handleClick = useCallback(()=>{
    //   setFruitCount((prev)=> prev + incrementBy)
    // }, [incrementBy])

    // 3)
    // const handleClick = useCustomCallback(()=>{
    //   setFruitCount((prev)=> prev + incrementBy)
    // }, [incrementBy])

    // 4) Not always a good thing to do!
    // const handleClick = ()=>{
    //   setFruitCount((prev)=> prev + incrementBy)
    // }

    // const handleClickCallback = useCallback(handleClick);

    // useEffect(()=>{
    //   console.log("making a new handle click function")
    // }, [handleClick])

    return (
        <div className="App">
            <p>
                You are buying {numberOfFruit} {fruitType}s
            </p>
            <p>Total after tax: ${totalForFruitType}</p>
            <button onClick={handleClick}>Add {fruitType}</button>
            {/* 3) */}
            {/* <p>Increment by</p>
      <button onClick={()=>setIncrementBy(1)}>1</button>
      <button onClick={()=>setIncrementBy(2)}>2</button>
      <button onClick={()=>setIncrementBy(3)}>3</button> */}
            {/* 5) */}
            {/* {new Array(3).fill(null).map((_, i)=><button onClick={()=>setIncrementBy(i+1)} className={incrementBy === i+1 ? "active" : ""}>{i}</button>)} */}
        </div>
    )
}

export default FruitTray
