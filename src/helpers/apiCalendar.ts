import ApiCalendar from 'react-google-calendar-api'

const config = {
  clientId: '482701366115-0blrf7c1cuem7nsclp0mef6kgvmqai02.apps.googleusercontent.com',
  apiKey: 'AIzaSyDLIxmNc1qtR72DI_OMjAYSzMyAia7AHwM',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
  ]
}

export const apiCalendar = new ApiCalendar(config)
