<script lang="js" setup>
import { getAuthToken, setSessionToken } from '../auth'

const token = getAuthToken()
fetch('http://localhost:3000/login/secret', {
  method: 'GET',
  credentials: 'include',
  headers: {
    authorization: `${token}`
  }
})
  .then((res) => res.json())
  .then((data) => {
    setSessionToken(data)
  })
  .catch((error) => {
    console.log(error)
    // window.location.replace('/login')
  })
</script>

<template>
  <div>Hallo</div>
</template>
