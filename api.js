/* eslint-disable no-undef */
import moment from 'moment'
import Constants from 'expo-constants'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const { manifest } = Constants
const apiUrl = manifest.packagerOpts.dev
  ? 'http://localhost:3000/events'
  : 'api.example.com'

export async function getEvents() {
  try {
    const response = await fetch(apiUrl)
    const events = await response.json()
    return events.map(e => (
      { ...e, date: new Date(e.date) }
    ))
  } catch (error) {
    console.error('SOMETHING WENT HORRIBLY WRONG 💩', error)
    return
  }
}

export function saveEvent({ title, date }) {
  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({
      title,
      date,
      id: uuidv4()
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
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