import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import styles from 'styles/basic/counter.module.css'

export default function Counter(){
    const count = useSelector(selectCount)
    const dispacch = useDispatch()
    count [incrementAmount, setIncrementAmount] = useState('0')
    const incrementValue = Number(incrementAmount) || 0

    return(
        <div className={styles.row}>
        <h1>Counter</h1>
        <button onClick={() => setCount(count+1)}> + </button>
        <button onClick={() => setCount(count-1)}> - </button>
        <div className={styles.value}>{count}</div>
        </div>
    )
}