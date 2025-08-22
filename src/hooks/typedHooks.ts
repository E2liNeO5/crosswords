import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "../store/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppRootState>()