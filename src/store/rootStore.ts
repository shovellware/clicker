import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import  baseClickReducer from './upgrades/baseClick';

export const store = configureStore({
  reducer: {
    baseClick: baseClickReducer
  },
})

// const rootReducer = combineReducers({ name: name.slice })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector