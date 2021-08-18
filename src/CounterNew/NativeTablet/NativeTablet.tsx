import React, {Dispatch, SetStateAction} from 'react';
import {TabletNew} from './Tablet/TabletNew';
import s from './NativeTablet.module.css'
import {BtnNew} from '../btn/btnNew';


const {counter, btn, counterFlex} = s;

type NativeTabletPropsType = {
    btnOnOf: boolean
    inStartValue: number
    inMaxValue: number
    countValue: number
    updateCountValue: () => void
    resetCountValue: () => void
    maxValue: number
    startValue: number
}


export const NativeTablet = (pr: NativeTabletPropsType) => {


    const {
        countValue, updateCountValue, resetCountValue,
        maxValue,
        startValue, inStartValue, inMaxValue,
        btnOnOf
    } = pr;

    return (

        <div className={counter}>
            <TabletNew inStartValue={inStartValue}
                       btnOnOf={btnOnOf}
                       maxValue={maxValue}
                       countValue={countValue}
                       inMaxValue={inMaxValue}/>
            <div className={btn}>
                <BtnNew
                    btnOnOf={btnOnOf}
                    inStartValue={inStartValue}
                    inMaxValue={inMaxValue}
                    maxValue={maxValue}
                    countValue={countValue}
                    typeBtn={'inc'}
                    updateCountValue={updateCountValue}/>
                <BtnNew btnOnOf={btnOnOf}
                        inStartValue={inStartValue}
                        inMaxValue={inMaxValue}
                        countValue={countValue}
                        typeBtn={'reset'}
                        resetCountValue={resetCountValue}
                        startValue={startValue}/>
                <BtnNew btnOnOf={btnOnOf}
                        inStartValue={inStartValue}
                        inMaxValue={inMaxValue}
                        countValue={countValue}
                        resetCountValue={resetCountValue}
                        startValue={startValue}
                        typeBtn={'newSet'}/>
            </div>
        </div>
    )
}






