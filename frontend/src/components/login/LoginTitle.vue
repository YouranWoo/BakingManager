<template>
    <div>
        <img class="cookie" alt="login logo" src="@/assets/images/emoji_cookie.png">
        <p class="title">LOGIN</p>
    </div>
</template>

<script>
export default {
    name: 'LoginTitle'
}
</script>

<style scoped>
@font-face {
    font-family: 'Jost';
    src: url(@/assets/fonts/Jost-VariableFont_wght.ttf) format('truetype');
    font-weight: 400;
    font-style: normal;
}

.cookie {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 172px;
    top: 123px;
}
.title {
    position: absolute;
    left: 142px;
    top: 160px;
    font-family: 'Jost';
    font-size: 36px;
    line-height: 52px;
}
</style>