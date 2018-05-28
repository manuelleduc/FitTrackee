import togeojson from '@mapbox/togeojson'
import { format, parse, subHours } from 'date-fns'

export const apiUrl = `${process.env.REACT_APP_API_URL}/api/`
export const thunderforestApiKey = `${
  process.env.REACT_APP_THUNDERFOREST_API_KEY
}`

export const isLoggedIn = () => !!window.localStorage.authToken

export const generateIds = arr => {
  let i = 0
  return arr.map(val => {
        const obj = { id: i, value: val }
        i++
        return obj
    })
}


export const createRequest = params => {
  const headers = {}
  if (!params.noAuthorization) {
    headers.Authorization = `Bearer ${
      window.localStorage.getItem('authToken')}`
  }
  if (params.type) {
    headers['Content-Type'] = params.type
  }
  const requestParams = {
    method: params.method,
    headers: headers,
  }
  if (params.type === 'application/json' && params.body) {
    requestParams.body = JSON.stringify(params.body)
  } else if (params.body) {
    requestParams.body = params.body
  }
  const request = new Request(params.url, requestParams)
  return fetch(request)
    .then(response => response.json())
    .catch(error => error)
}


export const getGeoJson = gpxContent => {
  let jsonData
  if (gpxContent) {
    const gpx = new DOMParser().parseFromString(gpxContent, 'text/xml')
    jsonData = togeojson.gpx(gpx)
  }
  return { jsonData }
}

export const formatActivityDate = activityDateTime => {
  if (activityDateTime) {
    const dateTime = parse(activityDateTime)
    return {
      activity_date: format(dateTime, 'YYYY-MM-DD'),
      activity_time: activityDateTime.match(/[0-2][0-9]:[0-5][0-9]/)[0]
    }
  }
  return {
    activity_date: null,
    activity_time: null,
  }
}

export const formatRecord = record => {
  let value, recordType = null
  switch (record.record_type) {
    case 'AS':
    case 'MS':
      value = `${record.value} km/h`
      recordType = record.record_type === 'AS' ? 'Avg speed' : 'Max speed'
      break
    case 'FD':
      value = `${record.value} km`
      recordType = 'Farest distance'
      break
    default: // 'LD'
      value = record.value // eslint-disable-line prefer-destructuring
      recordType = 'Longest duration'
  }
  return {
    activity_date: formatActivityDate(record.activity_date).activity_date,
    activity_id: record.activity_id,
    id: record.id,
    record_type: recordType,
    value: value,
  }
}

const formatDuration = seconds => {
    let newDate = new Date(0)
    newDate = subHours(newDate.setSeconds(seconds), 1)
    return newDate.getTime()
}

export const formatChartData = chartData => {
  for (let i = 0; i < chartData.length; i++) {
    chartData[i].time = new Date(chartData[i].time).getTime()
    chartData[i].duration = formatDuration(chartData[i].duration)
  }
  return chartData
}
