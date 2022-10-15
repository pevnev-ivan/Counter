import React, {useEffect, useState} from 'react';
import CounterBody from "./CounterBody";
import CounterSettings from "./CounterSettings";
import styles from "./Counter.module.scss"

const Counter = () => {
    const var1 = 'Choose Value and press \'set\''
    const var2 = 'Incorrect Value'

    const [maxValue, setMaxValue] = useState<number>(3)
    const [startValue, setStartValue] = useState<number>(0)

    const [number, setNumber] = useState<number>(startValue)

    const [incrementError, setIncrementError] = useState<boolean>(true)
    const [ButtonError, setButtonError] = useState<boolean>(false)
    const [placeHolder, setPlaceHolder] = useState<boolean>(true)
    const [placeHolderText, setPlaceHolderText] = useState<string>(var1)


    useEffect(() => {
        if (number >= maxValue) {
            setIncrementError(false)
        }


    }, [number, maxValue, startValue])

    const Increment = () => {
        if (incrementError) {
            setIncrementError(true)
            const newNumber = number + 1
            setNumber(newNumber)
        }
    }

    const Reset = () => {
        setIncrementError(true)
        setNumber(startValue)
    }

    const SaveSettings = (maxValue: number, startValue: number) => {
        setMaxValue(maxValue)
        setStartValue(startValue)
        setNumber(startValue)
        setButtonError(false)
        setPlaceHolder(true)
        setIncrementError(true)
        console.log(ButtonError)
    }

    const onChangeInput = (maxValue: number, startValue: number) => {
        if ((maxValue <= startValue) || (startValue < 0)) {
            setPlaceHolder(false)
            setButtonError(false)
            setMaxValue(maxValue)
            setStartValue(startValue)
            setPlaceHolderText(var2)
        } else {
        setButtonError(true)
        setMaxValue(maxValue)
        setStartValue(startValue)
        setPlaceHolder(false)
        setPlaceHolderText(var1)
        setIncrementError(false)
        }
        console.log(ButtonError)
    }

    return (
        <div className={styles.CounterContainer}>
            <CounterSettings
                maxValue={maxValue}
                startValue={startValue}
                onChangeInput={onChangeInput}
                SaveSettings={SaveSettings}
                disabled={ButtonError}
            />

            <CounterBody
                Increment={Increment}
                Reset={Reset}
                number={number}
                error={incrementError}
                disabled={ButtonError}
                placeHolder={placeHolder}
                placeHolderText={placeHolderText}
            />
        </div>
    );
};

export default Counter;