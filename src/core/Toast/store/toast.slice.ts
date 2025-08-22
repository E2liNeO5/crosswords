import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TToast, TToastData } from "../../../types";

type TInitialState = {
  toasts: TToast[]
  count: number
}

const initialState: TInitialState = {
  toasts: [],
  count: 0
}

const toastSlice = createSlice({
  name: 'toastSlice',
  initialState,
  reducers: {
    addToast: (state, { payload }: PayloadAction<TToastData>) => {
      state.toasts.push({
        id: state.count++,
        ...payload
      })
    },
    removeToast: (state, { payload }: PayloadAction<number>) => {
      state.toasts = state.toasts.filter(toast => toast.id !== payload)
      state.count--
    }
  }
})

export const { reducer: toastReducer, actions: toastActions  } = toastSlice