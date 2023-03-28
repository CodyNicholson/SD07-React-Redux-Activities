import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(state.items)
            let newItems = (typeof state.items !== 'undefined') ?
                { items: [...state.items, action.payload]} :
                { items: [action.payload]}

            return newItems;
        },
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        clearTodo: () => {
            return { todos: [] }
        }
    }
})

export const { addTodo, removeOne, clearTodo } = todoSlice.actions

export default todoSlice.reducer