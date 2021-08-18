import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateCounterType} from './Redux/store';
import {Counter} from './Counter/Counter';
import {
    ResetCountValueAC,
    SetBtnOnOfAC, SetInMaxValueAC,
    SetInStartValueAC,
    UpdateCountValueAC
} from './Redux/Counter-reducer';
import {
    ResetCountValueNAC,
    SetBtnOnOfNAC, SetBtnVerAC,
    SetInMaxValueNAC,
    SetInStartValueNAC,
    UpdateCountValueNAC
} from './Redux/SecondVerCounter-reducer';
import {CounterNew} from './CounterNew/CounterNew';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {BtnNew} from './CounterNew/btn/btnNew';

export const PATH = {
    First_ver: '/first',
    Second_ver: '/second',
}

function App() {


    const countValue = useSelector<AppStateCounterType, number>(state => state.counter.countValue)
    const inStartValue = useSelector<AppStateCounterType, number>(state => state.counter.inStartValue)
    const inMaxValue = useSelector<AppStateCounterType, number>(state => state.counter.inMaxValue)
    const maxValue = useSelector<AppStateCounterType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateCounterType, number>(state => state.counter.startValue)
    const btnOnOf = useSelector<AppStateCounterType, boolean>(state => state.counter.btnOnOf)

    const countValueN = useSelector<AppStateCounterType, number>(state => state.newCounter.countValue)
    const inStartValueN = useSelector<AppStateCounterType, number>(state => state.newCounter.inStartValue)
    const inMaxValueN = useSelector<AppStateCounterType, number>(state => state.newCounter.inMaxValue)
    const maxValueN = useSelector<AppStateCounterType, number>(state => state.newCounter.maxValue)
    const startValueN = useSelector<AppStateCounterType, number>(state => state.newCounter.startValue)
    const btnOnOfN = useSelector<AppStateCounterType, boolean>(state => state.newCounter.btnOnOf)
    const btnVer = useSelector<AppStateCounterType, boolean>(state => state.newCounter.btnVer)

    const dispatch = useDispatch()

    const resetCountValue = () => {
        dispatch(ResetCountValueAC())
    }

    const UpdateCountValue = () => {
        dispatch(UpdateCountValueAC())
    }

    const SetBtnOnOf = (newBoolean: boolean) => {
        dispatch(SetBtnOnOfAC(newBoolean))
    }

    const SetInStartValue = (newInStartValue: number) => {
        dispatch(SetInStartValueAC(newInStartValue))
    }
    const SetInMaxValue = (newInMaxValue: number) => {
        dispatch(SetInMaxValueAC(newInMaxValue))
    }

    const SetStartValue = (newStartValue: number) => {
        dispatch(SetInStartValueAC(newStartValue))
    }
    const SetMaxValue = (newMaxValue: number) => {
        dispatch(SetInMaxValueAC(newMaxValue))
    }

    const resetCountValueN = () => {
        dispatch(ResetCountValueNAC())
    }

    const UpdateCountValueN = () => {
        dispatch(UpdateCountValueNAC())
    }

    const SetBtnOnOfN = (newBoolean: boolean) => {
        dispatch(SetBtnOnOfNAC(newBoolean))
    }

    const SetInStartValueN = (newInStartValue: number) => {
        dispatch(SetInStartValueNAC(newInStartValue))
    }
    const SetInMaxValueN = (newInMaxValue: number) => {
        dispatch(SetInMaxValueNAC(newInMaxValue))
    }

    const SetStartValueN = (newStartValue: number) => {
        dispatch(SetInStartValueNAC(newStartValue))
    }
    const SetMaxValueN = (newMaxValue: number) => {
        dispatch(SetInMaxValueNAC(newMaxValue))
    }

    const SetBtnVer = (newBoolean: boolean) => {
        dispatch(SetBtnVerAC(newBoolean))
    }


    return (<div>
            <HashRouter>
                <div className={'BtnToChangeRoute'}>
                    <BtnNew btnOnOf={btnOnOf}
                            countValue={countValue}
                            typeBtn={'ChangeBtn'}
                            inMaxValue={inMaxValue}
                            inStartValue={inStartValue}
                            btnVer={btnVer}
                            setBtnVer={SetBtnVer}/>
                </div>


                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={PATH.First_ver}/>}/>

                    <Route path={PATH.First_ver} render={() => <Counter btnOnOf={btnOnOf}
                                                                        setBtnOnOf={SetBtnOnOf}
                                                                        inStartValue={inStartValue}
                                                                        setInStartValue={SetInStartValue}
                                                                        inMaxValue={inMaxValue}
                                                                        setInMaxValue={SetInMaxValue}
                                                                        countValue={countValue}
                                                                        updateCountValue={UpdateCountValue}
                                                                        setStartValue={SetStartValue}
                                                                        setMaxValue={SetMaxValue}
                                                                        resetCountValue={resetCountValue}
                                                                        maxValue={maxValue}
                                                                        startValue={startValue}
                    />}/>

                    <Route path={PATH.Second_ver} render={() => <CounterNew btnOnOf={btnOnOfN}
                                                                            setBtnOnOf={SetBtnOnOfN}
                                                                            inStartValue={inStartValueN}
                                                                            setInStartValue={SetInStartValueN}
                                                                            inMaxValue={inMaxValueN}
                                                                            setInMaxValue={SetInMaxValueN}
                                                                            countValue={countValueN}
                                                                            updateCountValue={UpdateCountValueN}
                                                                            setStartValue={SetStartValueN}
                                                                            setMaxValue={SetMaxValueN}
                                                                            resetCountValue={resetCountValueN}
                                                                            maxValue={maxValueN}
                                                                            startValue={startValueN}


                    />}/>

                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
