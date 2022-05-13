<template>
  <div id="app" class="bm_register">
    <RegistrationTitle/>
    <div class="white_box">
    </div>
    <RegistrationInputButton/>
  </div>
</template>

<script>
import RegistrationTitle from '@/components/registration/RegistrationTitle.vue'
import RegistrationInputButton from '@/components/registration/RegistrationInputButton.vue'

export default {
  name: 'TheRegistration',
  components: {
    RegistrationTitle,
    RegistrationInputButton
}
}
</script>

<style>
.bm_register {
  background: #ffbb54;
}

.white_box {
  position: absolute;
  width: 375px;
  height: 534px;
  left: 8px;
  top: 286px;
  background: #FFFFFF;
  border-radius: 30px 30px 0px 0px;
}
</style>