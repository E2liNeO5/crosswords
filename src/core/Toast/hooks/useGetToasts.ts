import { useAppSelector } from "../../../hooks/typedHooks"

const useGetToasts = () => {
  return useAppSelector(state => state.toastReducer).toasts
}

export default useGetToasts