<template>
  <div id="app" class="bm_login">
    <LoginTitle/>
    <div class="white_box">
    </div>
    <LoginInputButton/>
    <ToRegistration/>
  </div>
</template>

<script>
import LoginTitle from '@/components/login/LoginTitle.vue'
import LoginInputButton from '@/components/login/LoginInputButton.vue'
import ToRegistration from '@/components/login/ToRegistration.vue'

export default {
  name: 'TheLogin',
  components: {
    LoginTitle,
    LoginInputButton,
    ToRegistration,
  }
}
</script>

<style scoped>
.bm_login {
  background: #ffbb54;
}

.white_box {
  position: absolute;
  width: 375px;
  height: 542px;
  left: 8px;
  top: 286px;
  background: #FFFFFF;
  border-radius: 30px 30px 0px 0px;
}
</style>