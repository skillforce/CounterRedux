import {combineReducers, createStore} from 'redux';
import CounterReducer from './Counter-reducer';

import SecCounterReducer from './SecondVerCounter-reducer';

export type AppStateCounterType = ReturnType<typeof rootReducer>
export type StoreType = typeof store


let rootReducer = combineReducers({
    counter: CounterReducer,
    newCounter : SecCounterReducer
})

let preloadedState;
const persistedTodosString = localStorage.getItem('app-state')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()));
})

