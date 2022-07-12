import { IStateApiCalendar } from '@/interfaces'
import {
  ADD_DATA_CALENDAR,
  ADD_DATA_CALENDAR_SUCCESS,
  ADD_DATA_CALENDAR_FAILED
} from '@/constants'

const INITIAL_STATE: IStateApiCalendar = {
  data: {
    result: {
      items: []
    }
  },
  loading: false,
  error: false
}

export function calendarReducer(
  state = INITIAL_STATE,
  action: {type: string, payload: IStateApiCalendar}
): IStateApiCalendar {
  switch (action.type) {
    case ADD_DATA_CALENDAR:
      return { ...state, loading: true }
    case ADD_DATA_CALENDAR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case ADD_DATA_CALENDAR_FAILED:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}
