import { PropsWithChildren } from 'react'
import styles from './Form.module.scss'
import { addClass } from '../../utils'

type Props = {
  buttonText?: string
  formTitle?: string
  onSubmit: () => void
}

const Form = ({ children, buttonText, formTitle, onSubmit }: Props & PropsWithChildren) => {
  return (
    <div className={styles.from_wrapper} onSubmit={onSubmit}>
      <form className={styles.form}>
        <div className={styles.form_title}>{ formTitle }</div>
        { children }
        <button className={addClass(['btn', styles.form_btn])}>{ buttonText || 'Ok' }</button>
      </form>
    </div>
  )
}

export default Form