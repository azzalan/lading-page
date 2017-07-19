export const getValueDotPath = (dotPath, data) => {
  try {
    if (dotPath) return dotPath.split('.').reduce((o, i) => o[i], data)
  } catch (err) {
    return null
  }
}

const setValueDotArray = (dotArray, position, data, value) => {
  if (dotArray.length - 1 === position) data[dotArray[position]] = value
  else {
    if (!data[dotArray[position]]) data[dotArray[position]] = {}
    setValueDotArray(dotArray, position + 1, data[dotArray[position]], value)
  }
}

export const setValueDotPath = (dotPath, data, value) => {
  const dotArray = dotPath.split('.')
  if (!data) data = {}
  try {
    setValueDotArray(dotArray, 0, data, value)
  } catch (error) {}
}

const deleteDotArray = (dotArray, position, data) => {
  if (dotArray.length - 1 === position) {
    data[dotArray[position]] = undefined
  } else {
    if (!data[dotArray[position]]) return null
    setValueDotArray(dotArray, position + 1, data[dotArray[position]])
  }
}

export const deleteDotPath = (dotPath, data) => {
  const dotArray = dotPath.split('.')
  if (!data) return null
  deleteDotArray(dotArray, 0, data)
}

// Cópia sem referência
export const copyObject = (obj) => (JSON.parse(JSON.stringify(obj)))

export const moveArrayElement = (array, from, to) => {
  array.splice(to, 0, array.splice(from, 1)[0])
}
