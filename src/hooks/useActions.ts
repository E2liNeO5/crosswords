import { useMemo } from "react";
import { toastActions } from "../core/Toast/store/toast.slice";
import { useAppDispatch } from "./typedHooks";
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
  ...toastActions
}

const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions