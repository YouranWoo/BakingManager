<template>
    <div class="text">
        <router-link to="registration"><span class="black">New User?</span><span class="brown">Join Us</span></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ToRegistration',
}
</script>

<style scoped>
.text {
    position: absolute;
    left: 135px;
    top: 569px;
    font-size: 16px;
    line-height: 19px;
}
.balck {
    color: #000000;
}
.brown {
    color: #995024;
}
</style>