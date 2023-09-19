<script lang="js" setup>
import { setSessionToken } from '../auth'
</script>

<template>
  <div class="container mobile tablet laptop desktop">
    <img src="../assets/logo.svg" id="image" />
    <form id="login-form" @submit.prevent="login">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Sign in</button>
    </form>
    <p class="row-register">You don't have an account yet? <a href="/register">Sign on</a></p>
  </div>
</template>

<script lang="js">
export default {
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })
      const data = await res.json()
      setSessionToken(data)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #3f4a50;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 2fr 1fr 0fr;
  row-gap: 1rem;
  padding: 1rem 1.5rem;
  backdrop-filter: blur(5px);
}
.mobile {
  position: absolute;
  top: 16rem;
  left: 2.5rem;
  right: 2.5rem;
  bottom: 16rem;
}
.row-register {
  grid-row: 3;
  margin-top: -1rem;
}
form {
  display: inline;
  grid-row: 2;
}
form input,
button {
  height: 2.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border-style: solid;
  border-radius: 10px;
  border-color: #90afc5;
  border-width: 2.5px;
  filter: brightness(1.5);
  font-size: 13px;
}
input {
  color: #90afc5;
  background-color: transparent;
  padding: 0px 5px;
  font-size: 13px;
}

button {
  color: #90afc5;
  font-weight: bold;
  background-color: #336b87;
}

p {
  padding: 0rem 1rem;
  font-size: 13px;
}
a {
  font-size: 13px;
  color: #336b87;
}
#image {
  grid: 1;
  height: 100%;
  width: 100%;
}
</style>
