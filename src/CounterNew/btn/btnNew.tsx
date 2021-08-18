import React, {Dispatch, SetStateAction} from 'react';
import s from './btnNew.module.css';
import {PATHS} from '../CounterNew';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../App';

const {resetBtn, resetBtnOff, incBtn, incBtnOff, setBtn, setBtnOffCl, newSetBtnClass} = s;

type BtnPropsType = {
    btnOnOf: boolean
    setBtnOnOf?: (newBoolean: boolean) => void
    startValue?: number
    resetCountValue?: () => void
    countValue: number
    updateCountValue?: () => void
    typeBtn: 'reset' | 'inc' | 'set' | 'newSet' | 'NavSet' | 'ChangeBtn'
    maxValue?: any
    inMaxValue: number
    inStartValue: number
    setStartValue?: (newBoolean: number) => void
    setMaxValue?: (newBoolean: number) => void
    btnVer?:boolean
    setBtnVer?:(newBoolean: boolean) => void
}


export const BtnNew = (pr: BtnPropsType) => {

    const {
        resetCountValue, countValue, updateCountValue,
        typeBtn,
        maxValue, inMaxValue, inStartValue, setStartValue,
        setMaxValue,
        btnOnOf, setBtnOnOf, startValue, btnVer, setBtnVer
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
    const onClickSetN = () => {
        if (resetCountValue) {
            resetCountValue()
        }
        if (setBtnOnOf) {
            setBtnOnOf(true);
        }
    }

    const BtnPath = btnVer? PATH.Second_ver : PATH.First_ver;
    const BtnPathText = btnVer? 'Go to the second ver.':'Go to the first ver.';
    const OnClickChangePathBtn = ()=>{
        if(setBtnVer) {
            setBtnVer(!btnVer)
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
    const NewSetButton = typeBtn === 'newSet' ?
        <NavLink to={PATHS.setCounter} className={newSetBtnClass}>
            <button>set</button>
        </NavLink>
        : '';
    const ChangeButton = typeBtn === 'ChangeBtn' ?
        <NavLink to={BtnPath} className={newSetBtnClass}>
            <button onClick={OnClickChangePathBtn}>{BtnPathText}</button>
        </NavLink>
        : '';
    const SetCloneNavBtn = typeBtn === 'NavSet' ? <NavLink to={PATHS.NativeCounter}>
        <div className={setBtnClass}>
            <button disabled={setBtnDisabledChecker} onClick={onClickSetN}>set</button>
        </div>
    </NavLink> : '';

    return (<div>
            {resetButton}
            {incButton}
            {setButton}
            {NewSetButton}
            {SetCloneNavBtn}
            {ChangeButton}
        </div>
    )
}