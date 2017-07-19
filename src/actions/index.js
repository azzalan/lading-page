export function selectUserData (data) {
  return {
    type: 'USER_DATA',
    payload: data
  }
}

export function selectGroupInputOpen (groupInputOpen) {
  return {
    type: 'GROUP_INPUT_OPEN',
    payload: groupInputOpen
  }
}

export function selectFormData (formData) {
  return {
    type: 'FORM_DATA',
    payload: formData
  }
}
