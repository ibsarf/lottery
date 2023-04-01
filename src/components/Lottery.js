import React, { useState } from 'react'
import Ball from "./Ball";
import BallDown from "./BallDown";
import "./Lottery.css"

const Lottery = () => {
    const title = "Şans Oyunu"
    const maxBall = 6
    const maxNum = 40
    const [nums, setNums] = useState(Array.from({ length: maxBall }))
    const [nums3, setNums3] = useState(Array.from({ length:4 }))
    const [isTrue, setIsTrue] = useState(false)


    const handleClick = () => {
        setNums(() => nums.map(() => Math.floor(Math.random() * maxNum) + 1))
        setNums3(() => nums3.map(() => Math.floor(Math.random() * maxNum) + 1))
        setIsTrue(true)
    }
    console.log(nums);
    console.log(nums3);
    return (
        <section >
            <h3>{title} </h3>
            {nums.map((n,i) => (
                <div className="Lottery" key={i}>
                    <Ball num={n} />
                </div>
            ))}
            <br />

            <button onClick={handleClick} > Günün Şanslı Sayıları</button>

            {isTrue && <h3>Çerez Sayı </h3>}

            {nums3.map((n3,i) => (<div key={i} className="Lottery">
                <BallDown num3={n3} />
            </div>))}

        </section>
    )
}

export default Lottery