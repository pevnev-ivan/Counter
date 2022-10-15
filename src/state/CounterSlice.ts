import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type saveSettingsAC = ReturnType<typeof saveSettingsAC>
type increment = ReturnType<typeof increment>
type resetAC = ReturnType<typeof resetAC>
type actionsType = saveSettingsAC | increment | resetAC

const var1 = 'Choose Value and press \'set\''
const var2 = 'Incorrect Value'

export const counterSlices = createSlice({
    name: 'Counter',
    initialState: {
        startValue: 0,
        maxValue: 5,
        value: 0,
        placeHolderText: var1,
        buttonError: false,
        placeHolder: true,
        incrementError: true,
    },
    reducers: {
        saveSettings(state, action) {
            state.maxValue = action.payload.maxValue
            state.startValue = action.payload.startValue
            state.value = action.payload.startValue
            state.buttonError = false
            state.placeHolder = true
            state.incrementError = true
        },
        resetCounter(state,action) {
            state.incrementError = true
            state.value = 0
        }
    }
})



export type stateType = {
    startValue: number
    maxValue: number
    value: number
    placeHolderText: typeof var1 | typeof var2
    buttonError: boolean
    placeHolder: boolean
    incrementError: boolean
}

const state = {
    startValue: 0,
    maxValue: 5,
    value: 0,
    placeHolderText: var1,
    buttonError: false,
    placeHolder: true,
    incrementError: true,
}

export const counterSlice = (state: stateType, action: actionsType) => {
    switch (action.type) {
        case "INCREMENT":
            if (state.incrementError) {
                return {...state, incrementError: true, value: state.value + 1}
            } else break;
        case "RESET":
            return {...state, incrementError: true, value: 0}
        case "SET-SETTINGS":
            return {
                ...state,
                maxValue: action.payload.maxValue,
                startValue: action.payload.startValue,
                value: action.payload.startValue,
                buttonError: false,
                placeHolder: true,
                incrementError: true
            }
        default:
            return state
    }
}

export const saveSettingsAC = (maxValue: number, startValue: number) => {
    return {
        type: 'SET-SETTINGS',
        payload: {maxValue, startValue}
    } as const
}

export const resetAC = () => {
    return {
        type: 'RESET'
    } as const
}

export const increment = () => {
    return {
        type: 'INCREMENT'
    } as const
}
