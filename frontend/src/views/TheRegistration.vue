<template>
  <div>
    <RegistrationTitle/>
    <!-- <div id = "button">
      <router-link to="login"><HomeButton name = "LOGIN"/></router-link>
      <router-link to="registration"><HomeButton name = "REGISTRATION"/></router-link>
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import RegistrationTitle from '@/components/registration/RegistrationTitle.vue'

export default {
  name: 'TheRegistration',
  components: {
    RegistrationTitle,
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