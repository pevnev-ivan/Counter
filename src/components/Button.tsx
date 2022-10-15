import React, {ReactNode} from 'react';
import styles from "./Counter.module.scss"

type propsType = {
    children: ReactNode
    callBack: () => void
    disabled?: boolean
}

const Button = (props: propsType) => {

    const onClickHandler = () => {
        if (props.disabled) {props.callBack()}
    }

    const buttonClassname = !props.disabled ? styles.Button + ' ' + styles.ButtonDisabled : styles.Button
    return (
        <button className={buttonClassname} onClick={onClickHandler}>{props.children}</button>
    );
};

export default Button;