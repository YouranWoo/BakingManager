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
</style>