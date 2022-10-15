import React, {useEffect, useState} from 'react';
import Button from "./Button";
import styles from "./Counter.module.scss"

type propsType = {
    Increment: () => void
    Reset: () => void
    number: number
    error: boolean
    disabled: boolean
    placeHolder: boolean
    placeHolderText: string
}

const CounterBody = (props: propsType) => {
    const {Increment, Reset, number, error,placeHolderText, ...rest} = props

    const numberClassname = !error ? styles.Number + ' ' + styles.NumberError : styles.Number
    return (
        <div className={styles.CounterBodyContainer}>
            {rest.placeHolder ?  <p className={numberClassname}>{number}</p> : <p>{placeHolderText}</p>}
            <div style={{display:'flex', gap: '10px'}}>
            <Button disabled={error} callBack={Increment}>Increment</Button>
            <Button disabled={rest.placeHolder} callBack={Reset}>Reset</Button>
            </div>
        </div>
    );
};

export default CounterBody;