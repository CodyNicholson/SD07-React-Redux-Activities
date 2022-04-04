import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './features/modeSlice'

export const store = configureStore({
    reducer: {
        mode: modeReducer
    }
})