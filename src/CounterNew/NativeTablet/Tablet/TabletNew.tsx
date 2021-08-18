import React from 'react';
import s from './TabletNew.module.css';

const {tablet, tabletTop, setMsg} = s;

type TabletPropsType = {
    countValue: number
    maxValue: number
    btnOnOf: boolean
    inStartValue: number
    inMaxValue: number
}


export const TabletNew = (pr: TabletPropsType) => {
    const {countValue, maxValue, btnOnOf, inStartValue, inMaxValue} = pr;



    const StartValueCheck = inStartValue >= 0 ?
        <div>
            {btnOnOf && countValue}
            {!btnOnOf && <div className={setMsg}>Press 'set' to programm counter</div>}
        </div>
        :
        <div className={setMsg}>Start value must be 0(zero) or greater</div>;


    const start_max_check = inStartValue < inMaxValue ?
        StartValueCheck
        :
        <div className={setMsg}>Max value must be greater than Start Value</div>


    const inMaxValueCheck =  countValue <= inMaxValue ?
        start_max_check
        :
        <div className={setMsg}>Please type reset!</div>

    const finallyCheck = countValue >= inStartValue ?
        inMaxValueCheck
        :
        <div className={setMsg}>Please type set!</div>


    return (
        <div className={+countValue < inMaxValue ? tablet : tabletTop}>
            {finallyCheck}
        </div>
    )
}