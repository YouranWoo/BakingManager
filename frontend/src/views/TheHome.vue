<template>
  <div id="app" class="bm_home">
    <BmTitle/>
    <div class="btn1">
      <router-link to="login"><HomeButton name = "LOGIN"/></router-link>
    </div>
    <div class="btn2">
      <router-link to="registration"><HomeButton name = "REGISTRATION"/></router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import BmTitle from '@/components/home/BmTitle.vue'
import HomeButton from '@/components/home/HomeButton.vue'

export default {
  name: 'TheHome',
  components: {
    BmTitle,
    HomeButton,
  }
}
</script>

<style>
.bm_home {
  background: #FFBB54;
}
.btn1 {
  position: absolute;
  left: 99px;
  top: 420px;
}
.btn2 {
  position: absolute;
  left: 99px;
  top: 471px;
}
</style>
