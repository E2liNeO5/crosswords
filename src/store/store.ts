import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toastReducer } from "../core/Toast/store/toast.slice";

const reducers = combineReducers({
  toastReducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(

  )
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store