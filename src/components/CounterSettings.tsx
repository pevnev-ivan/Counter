import React, {useRef} from 'react';
import Button from "./Button";
import styles from "./Counter.module.scss"

type propsType = {
    maxValue: number
    startValue: number
    disabled: boolean
    SaveSettings: (maxValue: number, startValue: number) => void
    onChangeInput: (maxValue: number, startValue: number) => void
}

const CounterSettings = (props: propsType) => {
    const maxValue = useRef<HTMLInputElement>(null)
    const startValue = useRef<HTMLInputElement>(null)

    const SaveSettingsCallBack = () => {
        if (maxValue.current && startValue.current) {
            const newMaxValue = Number(maxValue.current.value)
            const newStartValue = Number(startValue.current.value)
            props.SaveSettings(newMaxValue, newStartValue)
        }
    }

    const onChangeHandler = () => {
        if (maxValue.current && startValue.current) {
            const newMaxValue = Number(maxValue.current.value)
            const newStartValue = Number(startValue.current.value)
            props.onChangeInput(newMaxValue, newStartValue)
        }
    }
    const maxInputClassname = props.maxValue < 0 || props.maxValue < props.startValue ? styles.Input + ' ' + styles.InputError : styles.Input
    const startValueClassname = props.startValue < 0 || props.startValue > props.maxValue ? styles.Input + ' ' + styles.InputError : styles.Input
    return (
        <div className={styles.CounterSettingsContainer}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>
                    <p>Max Value: </p>
                    <input className={maxInputClassname} onChange={onChangeHandler} ref={maxValue}
                           value={props.maxValue}
                           type="number"/>
                </div>
                <div>
                    <p>Start Value: </p>
                    <input className={startValueClassname} onChange={onChangeHandler} ref={startValue}
                           value={props.startValue}
                           type="number"/>
                </div>
            </div>
            <div>
                <Button disabled={props.disabled} callBack={SaveSettingsCallBack}>Set</Button>
            </div>
        </div>
    );
};

export default CounterSettings;