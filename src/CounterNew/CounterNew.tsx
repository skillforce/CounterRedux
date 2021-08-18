import React, {Dispatch, SetStateAction} from 'react';
import {TabletNew} from './NativeTablet/Tablet/TabletNew';
import s from './CounterNew.module.css'

import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {NativeTablet} from './NativeTablet/NativeTablet';
import {SeterTablet} from './SeterTablet/SeterTablet';

const {counter, btn, counterFlex} = s;

type CounterPropsType = {
    btnOnOf: boolean
    setBtnOnOf: (newBoolean: boolean) => void
    inStartValue: number
    setInStartValue: (newX: number) => void
    inMaxValue: number
    setInMaxValue: (newX: number) => void
    countValue: number
    updateCountValue: () => void
    setStartValue: (newX: number) => void
    setMaxValue: (newX: number) => void
    resetCountValue: () => void
    maxValue: number
    startValue: number
}

export const PATHS = {
    NativeCounter: '/second/nativeCounter',
    setCounter: '/second/setTablet',
}

export const CounterNew = (pr: CounterPropsType) => {


    const {
        countValue, updateCountValue, resetCountValue,
        maxValue,
        startValue, setStartValue, setMaxValue,
        setInStartValue, inStartValue,
        setInMaxValue, inMaxValue,
        btnOnOf, setBtnOnOf
    } = pr;

    return (

        <div className={counterFlex}>

            <Switch>

                <Route path={'/second/'} exact render={() => <Redirect to={PATHS.NativeCounter}/>}/>


                <Route path={PATHS.NativeCounter} render={() => <NativeTablet inStartValue={inStartValue}
                                                                              inMaxValue={inMaxValue}
                                                                              startValue={startValue}
                                                                              maxValue={maxValue}
                                                                              countValue={countValue}
                                                                              updateCountValue={updateCountValue}
                                                                              resetCountValue={resetCountValue}
                                                                              btnOnOf={btnOnOf}
                />}/>


                <Route path={PATHS.setCounter} render={() => <SeterTablet inStartValue={inStartValue}
                                                                          setInStartValue={setInStartValue}
                                                                          inMaxValue={inMaxValue}
                                                                          setInMaxValue={setInMaxValue}
                                                                          startValue={startValue}
                                                                          setStartValue={setStartValue}
                                                                          setMaxValue={setMaxValue}
                                                                          countValue={countValue}
                                                                          resetCountValue={resetCountValue}
                                                                          btnOnOf={btnOnOf}
                                                                          setBtnOnOf={setBtnOnOf}
                />}/>

            </Switch>


        </div>

    )
}






