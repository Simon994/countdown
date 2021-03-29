import moment from 'moment'
import Constants from 'expo-constants'

export async function getEvents() {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch('http://localhost:3000/events')
    const events = await response.json()
    console.log('RESPONSE IS::::', events)
    return events.map(e => (
      { ...e, date: new Date(e.date) }
    ))
  } catch (error) {
    console.error('SOMETHING WENT HORRIBLY WRONG 💩', error)
    return
  }
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString))
  if (!parsed.isValid()) {
    return dateString
  }

  return parsed.format('D MMM YYYY')
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()))
  return {
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds'),
  }
}