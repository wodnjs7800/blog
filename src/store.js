import { configureStore, createSlice } from '@reduxjs/toolkit'

let listItem = createSlice({
    name: 'listItem',
    initialState: [
        { title: '리액트 정리', content: 'state 관리하기', count: 1 },
        { title: '안녕하세요.', content: '안녕하세요. 반갑습니다.', count: 4 },
    ],
    reducers: {
        addItem(state, action) {
            state.unshift(action.payload)
        },
        deleteItem(state, action) {
            state.splice(action.payload.i, 1)
        },
        countGood(state, action){
            let num=action.payload.i
            state[num].count++
        }
    }
})


export let { addItem, deleteItem, countGood } = listItem.actions

export default configureStore({
    reducer: {
        listItem: listItem.reducer
    }
}) 

