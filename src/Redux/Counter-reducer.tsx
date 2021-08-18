export type ActionCounterType =
    UpdateCountValueACType
    | ResetCountValueACType
    | SetBtnOnOfACType
    | SetInStartValueACType
    | SetInMaxValueACType
    | SetStartValueACType
    | SetMaxValueACType

export const UpdateCountValue = 'UPDATE-COUNT-VALUE' as const;
export const ResetCountValue = 'RESET-COUNT-VALUE' as const;
export const SetBtnOnOf = 'SET-BTN-ONOF-BOOLEAN' as const;
export const SetInStartValue = 'SET-IN-START-VALUE' as const;
export const SetInMaxValue = 'SET-IN-MAX-VALUE' as const;
export const SetStartValue = 'SET-START-VALUE' as const;
export const SetMaxValue = 'SET-MAX-VALUE' as const;


export const UpdateCountValueAC = () => ({type: UpdateCountValue} as const)
export const ResetCountValueAC = () => ({type: ResetCountValue} as const)
export const SetBtnOnOfAC = (newBoolean: boolean) => ({type: SetBtnOnOf, newBoolean} as const)
export const SetInStartValueAC = (newInStartValue: number) => ({type: SetInStartValue, newInStartValue} as const)
export const SetInMaxValueAC = (newInMaxValue: number) => ({type: SetInMaxValue, newInMaxValue} as const)
export const SetStartValueAC = (newStartValue: number) => ({type: SetStartValue, newStartValue} as const)
export const SetMaxValueAC = (newMaxValue: number) => ({type: SetMaxValue, newMaxValue} as const)


type UpdateCountValueACType = ReturnType<typeof UpdateCountValueAC>
type ResetCountValueACType = ReturnType<typeof ResetCountValueAC>
type SetBtnOnOfACType = ReturnType<typeof SetBtnOnOfAC>
type SetInStartValueACType = ReturnType<typeof SetInStartValueAC>
type SetInMaxValueACType = ReturnType<typeof SetInMaxValueAC>
type SetStartValueACType = ReturnType<typeof SetStartValueAC>
type SetMaxValueACType = ReturnType<typeof SetMaxValueAC>


let InitialState = {
    countValue: 0,
    maxValue: 5,
    startValue: 0,
    inMaxValue: 5,
    inStartValue: 0,
    btnOnOf: true
}

export type InitialStateCounterValue = typeof InitialState;


const CounterReducer = (state: InitialStateCounterValue = InitialState, action: ActionCounterType): InitialStateCounterValue => {
    switch (action.type) {
        case UpdateCountValue:
            if (state.countValue < state.inMaxValue) {
                return {...state, countValue: state.countValue + 1}
            } else {
                return state
            }
        case ResetCountValue:
            return {...state, countValue: state.inStartValue, maxValue: state.inMaxValue}
        case SetBtnOnOf:
            return {...state, btnOnOf: action.newBoolean}
        case SetInStartValue :
            return {...state, inStartValue: action.newInStartValue}
        case SetInMaxValue :
            return {...state, inMaxValue: action.newInMaxValue}
        case SetStartValue :
            return {...state, startValue: action.newStartValue}
        case SetMaxValue :
            return {...state, maxValue: action.newMaxValue}


        default:
            return state
    }
}

export default CounterReducer;