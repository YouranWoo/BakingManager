<template>
    <div id="login">
        <img class="baguette" alt="register logo" src="@/assets/images/emoji_baguette.png">
        <p class="title">REGISTRATION</p>
    </div>
</template>

<script>
export default {
    name: 'RegistrationTitle'
}
</script>

<style scoped>
@font-face {
    font-family: 'Jost';
    src: url(@/assets/fonts/Jost-VariableFont_wght.ttf) format('truetype');
    font-weight: 400;
    font-style: normal;
}

.baguette {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 172px;
    top: 123px;
}
.title {
    position: absolute;
    left: 75px;
    top: 160px;
    font-family: 'Jost';
    font-size: 36px;
    line-height: 52px;
}
</style>