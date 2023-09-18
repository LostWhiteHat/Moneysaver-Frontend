export function getAuthToken() {
  const accessToken = sessionStorage.getItem('accessToken')
  if (accessToken === null) {
    return ''
  } else {
    return accessToken.toString()
  }
}

export function setSessionToken(data) {
  if (data.accessToken != undefined) {
    sessionStorage.setItem('accessToken', data.accessToken)
  }
}
