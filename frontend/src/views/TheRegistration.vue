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
</style>