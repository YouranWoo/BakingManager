<template>
  <div>
    <LoginTitle/>
    <!-- <div id = "button">
      <router-link to="login"><HomeButton name = "LOGIN"/></router-link>
      <router-link to="registration"><HomeButton name = "REGISTRATION"/></router-link>
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import LoginTitle from '@/components/login/LoginTitle.vue'

export default {
  name: 'TheLogin',
  components: {
    LoginTitle,
  }
}
</script>

<style>
#app {
  background: #FFBB54;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>