import { IParseLocation } from '@/interfaces'
import {
  ADD_LOCATION
} from '@/constants'

const INITIAL_STATE: IParseLocation = {
  city: {
    id: 0,
    name: 'Gomel',
  },
  country: 'Belarus'
}

export function locationReducer(
  state = INITIAL_STATE,
  action: {type: string, payload: IParseLocation}
) {
  switch (action.type) {
    case ADD_LOCATION:
      return { ...state, ...action.payload, city: action.payload.city }
    default:
      return state
  }
}
