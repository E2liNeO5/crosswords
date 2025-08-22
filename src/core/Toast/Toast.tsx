import { TToast } from '../../types'
import { addClass } from '../../utils'
import styles from './Toast.module.scss'
import { AnimationEvent, memo, useEffect, useState } from 'react'
import useActions from '../../hooks/useActions'
import { TOAST_DISAPPEAR } from '../../constants'

type Props = {
  toast: TToast
}

const Toast = ({ toast }: Props) => {
  const { removeToast } = useActions()

  const [isRemoving, setIsRemoving] = useState(false)

  const animationEndHandler = (e: AnimationEvent<HTMLDivElement>) => {
    if(e.animationName === styles.disappearAnimation)
      removeToast(toast.id)
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsRemoving(true), TOAST_DISAPPEAR + 100 * toast.id)

    return () => clearTimeout(timer)
  }, [toast])

  return (
    <div
      className={addClass([styles.toast_container, styles[toast.type], [isRemoving, styles.disappear]])}
      onAnimationEnd={animationEndHandler}
    >
      { toast.text }
    </div>
  )
}

export default memo(Toast)