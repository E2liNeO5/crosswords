import { TDifficulty, TLink } from "./types";

export const DIFFICULTIES: TDifficulty[] = [
  {
    id: 1,
    name: 'Легко',
    classValue: 'easy'
  },
  {
    id: 2,
    name: 'Средне',
    classValue: 'middle'
  },
  {
    id: 3,
    name: 'Тяжело',
    classValue: 'hard'
  },
  {
    id: 4,
    name: 'Очень тяжело',
    classValue: 'very_hard'
  }
]

export const USER_LINKS: TLink[] = [
  {
    to:'/',
    title: 'Главная'
  }
]

export const TOAST_DISAPPEAR = 3000