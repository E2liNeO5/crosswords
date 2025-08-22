export type TDifficulty = {
  id: number
  name: string
  classValue: string
}

export type TLink = {
  to: string
  title: string
}

export type TToast = {
  id: number
  text: string
  type: 'error' | 'success'
}

export type TToastData = Pick<TToast, 'text' | 'type'>