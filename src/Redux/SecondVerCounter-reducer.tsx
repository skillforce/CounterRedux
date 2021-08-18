export type ActionCounterType =
    UpdateCountValueACType
    | ResetCountValueACType
    | SetBtnOnOfACType
    | SetInStartValueACType
    | SetInMaxValueACType
    | SetStartValueACType
    | SetMaxValueACType
    | SetBtnVerACType

export const UpdateCountValueN = 'UPDATE-COUNT-VALUE-N' as const;
export const ResetCountValueN = 'RESET-COUNT-VALUE-N' as const;
export const SetBtnOnOfN = 'SET-BTN-ONOF-BOOLEAN-N' as const;
export const SetInStartValueN = 'SET-IN-START-VALUE-N' as const;
export const SetInMaxValueN = 'SET-IN-MAX-VALUE-N' as const;
export const SetStartValueN = 'SET-START-VALUE-N' as const;
export const SetMaxValueN = 'SET-MAX-VALUE-N' as const;
export const SetBtnVer = 'SET-BTN-VER' as const;


export const UpdateCountValueNAC = () => ({type: UpdateCountValueN} as const)
export const ResetCountValueNAC = () => ({type: ResetCountValueN} as const)
export const SetBtnOnOfNAC = (newBoolean: boolean) => ({type: SetBtnOnOfN, newBoolean} as const)
export const SetInStartValueNAC = (newInStartValue: number) => ({type: SetInStartValueN, newInStartValue} as const)
export const SetInMaxValueNAC = (newInMaxValue: number) => ({type: SetInMaxValueN, newInMaxValue} as const)
export const SetStartValueNAC = (newStartValue: number) => ({type: SetStartValueN, newStartValue} as const)
export const SetMaxValueNAC = (newMaxValue: number) => ({type: SetMaxValueN, newMaxValue} as const)
export const SetBtnVerAC = (newBoolean: boolean) => ({type: SetBtnVer, newBoolean} as const)


type UpdateCountValueACType = ReturnType<typeof UpdateCountValueNAC>
type ResetCountValueACType = ReturnType<typeof ResetCountValueNAC>
type SetBtnOnOfACType = ReturnType<typeof SetBtnOnOfNAC>
type SetInStartValueACType = ReturnType<typeof SetInStartValueNAC>
type SetInMaxValueACType = ReturnType<typeof SetInMaxValueNAC>
type SetStartValueACType = ReturnType<typeof SetStartValueNAC>
type SetMaxValueACType = ReturnType<typeof SetMaxValueNAC>
type SetBtnVerACType = ReturnType<typeof SetBtnVerAC>


let InitialState = {
    countValue: 0,
    maxValue: 5,
    startValue: 0,
    inMaxValue: 5,
    inStartValue: 0,
    btnOnOf: true,
    btnVer: true
}

export type InitialStateCounterValue = typeof InitialState;


const SecCounterReducer = (state: InitialStateCounterValue = InitialState, action: ActionCounterType): InitialStateCounterValue => {
    switch (action.type) {
        case UpdateCountValueN:
            if (state.countValue < state.inMaxValue) {
                return {...state, countValue: state.countValue + 1}
            } else {
                return state
            }
        case ResetCountValueN:
            return {...state, countValue: state.inStartValue, maxValue: state.inMaxValue}
        case SetBtnOnOfN:
            return {...state, btnOnOf: action.newBoolean}
        case SetInStartValueN :
            return {...state, inStartValue: action.newInStartValue}
        case SetInMaxValueN :
            return {...state, inMaxValue: action.newInMaxValue}
        case SetStartValueN :
            return {...state, startValue: action.newStartValue}
        case SetMaxValueN :
            return {...state, maxValue: action.newMaxValue}
        case SetBtnVer:
            return{...state, btnVer: action.newBoolean}

        default:
            return state
    }
}

export default SecCounterReducer;