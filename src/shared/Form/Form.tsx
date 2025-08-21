import { PropsWithChildren } from 'react'
import styles from './Form.module.scss'
import { addClass } from '../../utils'

type Props = {
  buttonText?: string
  formTitle?: string
}

const Form = ({ children, buttonText, formTitle }: Props & PropsWithChildren) => {
  return (
    <div className={styles.from_wrapper}>
      <form className={styles.form}>
        <div className={styles.form_title}>{ formTitle }</div>
        { children }
        <button className={addClass(['btn', styles.form_btn])}>{ buttonText || 'Ok' }</button>
      </form>
    </div>
  )
}

export default Form