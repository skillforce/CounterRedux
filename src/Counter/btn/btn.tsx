import React, {Dispatch, SetStateAction} from 'react';
import s from './btn.module.css';

const {resetBtn, resetBtnOff, incBtn, incBtnOff, setBtn, setBtnOffCl} = s;

type BtnPropsType = {
    btnOnOf: boolean
    setBtnOnOf?: (newBoolean: boolean) => void
    startValue?: number
    resetCountValue?: () => void
    countValue: number
    updateCountValue?: () => void
    typeBtn: 'reset' | 'inc' | 'set'
    maxValue?: any
    inMaxValue: number
    inStartValue: number
    setStartValue?: (newX: number) => void
    setMaxValue?: (newX: number) => void
}


export const Btn = (pr: BtnPropsType) => {

    const {
        resetCountValue, countValue, updateCountValue,
        typeBtn,
        maxValue, inMaxValue, inStartValue, setStartValue,
        setMaxValue,
        btnOnOf, setBtnOnOf, startValue,
    } = pr;

    const start_max_value = inStartValue > inMaxValue;
    const inStartValueCheck = inStartValue < 0
    const disResetBtn = countValue === inStartValue;
    const disInc = countValue >= inMaxValue

    const resetBtnClassChecker = countValue > 0 && !inStartValueCheck && btnOnOf && !start_max_value && !disResetBtn; //тернарники
    const incClassChecker = countValue < inMaxValue && !inStartValueCheck && btnOnOf && !start_max_value;// для классов кнопок(ошибка/нет ошибки)
    const setBtnClassChecker = btnOnOf || inStartValueCheck || start_max_value;

    const resetBtnDisabledChecker = !btnOnOf || disResetBtn || inStartValueCheck || start_max_value;//тернарники для отключения кнопок
    const incBtnDisabledChecker = !btnOnOf || disInc || inStartValueCheck || start_max_value;
    const setBtnDisabledChecker = btnOnOf || inStartValueCheck || start_max_value;

    const resetBtnClass = resetBtnClassChecker ? resetBtn : resetBtnOff // присваиваем переменным классы в зависимости от тернарников выше
    const incClass = incClassChecker ? incBtn : incBtnOff
    const setBtnClass = setBtnClassChecker ? setBtnOffCl : setBtn;

    const onClickSet = () => {
        if (resetCountValue) {
            resetCountValue()
        }
        if (setBtnOnOf) {
            setBtnOnOf(true);
        }
    }


    const resetButton = typeBtn === 'reset' ? <div className={resetBtnClass}>
        <button disabled={resetBtnDisabledChecker}
                onClick={resetCountValue}>reset
        </button>
    </div> : '';

    const incButton = typeBtn === 'inc' ? <div className={incClass}>
        <button disabled={incBtnDisabledChecker} onClick={updateCountValue}>inc
        </button>
    </div> : '';
    const setButton = typeBtn === 'set' ? <div className={setBtnClass}>
        <button disabled={setBtnDisabledChecker} onClick={onClickSet}>set</button>
    </div> : '';

    return (<div>
            {resetButton}
            {incButton}
            {setButton}
        </div>
    )
}