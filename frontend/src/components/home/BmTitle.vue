<template>
    <div id="bm">
        <img class="bread" alt="BakingManager main logo" src="@/assets/images/emoji_bread.png">
        <h1 class="main l1">BAKING</h1>
        <h1 class="main l2">MANAGER</h1>
        <h2 class="sub">SMART & HAPPY BAKING LIFE</h2>
    </div>
</template>

<script>
export default {
    name: 'BmTitle'
}
</script>

<style scoped>
@font-face {
    font-family: 'Nova Flat';
    src: url(@/assets/fonts/NovaFlat-Regular.ttf) format('truetype');
    font-weight: 400;
    font-style: Regular;
}

@font-face {
    font-family: 'Handjet';
    src: url(@/assets/fonts/HandjetCircleDouble-Regular.ttf) format('truetype');
    font-weight: 400;
}

.bread {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 91px;
    top: 270px;
}

.l1 {
    position: absolute;
    left: 150px;
    top: 251px;
}

.l2 {
    position: absolute;
    left: 91px;
    top: 295px;
}

.main {
    font-family: 'Nova Flat';
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: center;
    text-align: center;
}

.sub {
    font-family: 'Handjet';
    font-size: 17px;
    line-height: 19px;
    position: absolute;
    left: 141px;
    top: 355px;
}
</style>