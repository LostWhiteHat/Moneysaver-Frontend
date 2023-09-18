<script lang="js" setup></script>

<template>
  <div class="container mobile tablet laptop desktop">
    <img src="../assets/logo.svg" id="image" />
    <form id="login">
      <input type="text" id="username" placeholder="Username" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">LOGIN</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  background-color: #3f4a50;
  border-radius: 20px;
  display: inline-grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 3rem;
  padding: 0.5rem 1.5rem;
}
.mobile {
  position: absolute;
  top: 14rem;
  left: 2.5rem;
  right: 2.5rem;
  bottom: 14rem;
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
  border-color: #336b87;
  border-width: 2.5px;
  filter: brightness(0.9);
}
input {
  background-color: transparent;
}
#image {
  grid: 1;
  height: 100%;
  width: 100%;
}
</style>
