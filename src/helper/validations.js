export const required = (value) => {
  if (value) return undefined
  return 'w-w-wait, dude, come on'
}

export const maxLengthCreator = (maxLenght) => (value) => {
  if (value.length > maxLenght) return 'max is 30 symbols'
  return undefined
}