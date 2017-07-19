import { combineReducers } from 'redux'
import GroupInputOpen from './group_input_open'
import ActiveFormData from './form_data'
import UserData from './user_data'

const rootReducer = combineReducers({
  groupInputOpen: GroupInputOpen,
  formData: ActiveFormData,
  userData: UserData
})

export default rootReducer
