import React, {Dispatch, SetStateAction} from 'react';
import s from './SeterTablet.module.css'
import {BtnNew} from '../btn/btnNew';
import {SetTabletNew} from './setTablet/setTabletNew';


const {counter, btn} = s;

type SeterTabletPropsType = {
    btnOnOf: boolean
    setBtnOnOf: (newBoolean: boolean) => void
    inStartValue: number
    setInStartValue: (newX: number) => void
    inMaxValue: number
    setInMaxValue: (newX: number) => void
    countValue: number
    setStartValue: (newX: number) => void
    setMaxValue: (newX: number) => void
    resetCountValue: () => void
    startValue: number
}


export const SeterTablet = (pr: SeterTabletPropsType) => {


    const {
        countValue, resetCountValue,
        startValue, setStartValue, setMaxValue,
        setInStartValue, inStartValue,
        setInMaxValue, inMaxValue,
        btnOnOf, setBtnOnOf
    } = pr;

    return (
        <div className={counter}>
            <SetTabletNew setBtnOnOf={setBtnOnOf}
                          setInStartValue={setInStartValue}
                          setInMaxValue={setInMaxValue}
                          inMaxValue={inMaxValue}
                          inStartValue={inStartValue}/>
            <div className={btn}>
                <BtnNew btnOnOf={btnOnOf}
                        setBtnOnOf={setBtnOnOf}
                        resetCountValue={resetCountValue}
                        setMaxValue={setMaxValue}
                        countValue={countValue}
                        typeBtn={'NavSet'}
                        inMaxValue={inMaxValue}
                        inStartValue={inStartValue}
                        setStartValue={setStartValue}
                        startValue={startValue}/>
            </div>
        </div>
    )
}






