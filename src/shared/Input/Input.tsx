import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Input.module.scss'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import useActions from '../../hooks/useActions'
import { addClass } from '../../utils'

type Props = {
  type?: string
  title: string
  register: UseFormRegisterReturn<string>
  error: FieldError | undefined
  counter?: {
    current: number
    max?: number
  }
}

const Input = ({ type, title, register, error, counter }: Props) => {
  const [clipPathBorder, setClipPathBorder] = useState('')
  const [clipPathBg, setClipPathBg] = useState('')

  const labelTextRef = useRef<HTMLDivElement>(null)

  const { addToast } = useActions()

  useEffect(() => {
    if(labelTextRef && labelTextRef.current) {
      const width = labelTextRef.current.offsetWidth
      setClipPathBorder(`polygon(calc(0% + 10px) 0, ${width}px 0, ${width}px 50%, 100% 50%, 100% 100%, 0 100%, 0 calc(0% + 10px))`)
      setClipPathBg(`polygon(calc(0% + 11px) calc(0% + 2px), ${width - 2}px calc(0% + 2px),
                             ${width - 2}px calc(50% + 2px), calc(100% - 2px) calc(50% + 2px),
                             calc(100% - 2px) calc(100% - 2px), calc(0% + 2px) calc(100% - 2px),
                             calc(0% + 2px) calc(0% + 11px))`)
    }
  }, [labelTextRef])

  useEffect(() => {
    if(error && error.message)
      addToast({ text: error.message, type: 'error' })
  }, [error])

  const isRedCounter = useMemo(() => !!(counter && counter.max && counter.max < counter.current), [counter])

  return (
    <div className={styles.input_wrapper} style={{ clipPath: clipPathBorder}}>
      <div className={styles.wrapper_bg} style={{ clipPath: clipPathBg }} />
      <label className={styles.label}>
        <div className={styles.label_text} ref={labelTextRef}>{ title }</div>
        <div className={styles.input_container}>
          <input
            type={type || 'text'}
            className={styles.input}
            { ...register }
          />
          { counter && <div className={addClass([styles.letter_counter, [isRedCounter, styles.red]])}>{ `${counter.current}${counter.max ? `/${counter.max}` : ''}` }</div> }
        </div>
      </label>
    </div>
  )
}

export default Input