type TAddClass = string | [boolean, string]

export const addClass = (classes: TAddClass[]): string => {
  const classesArray = classes.filter(value => value).map(value => {
    let classString = ''
    if(typeof value === 'string')
      classString = value
    else
      classString = value[0] ? value[1] : ''
    return classString
  })
  return classesArray.join(' ')
}