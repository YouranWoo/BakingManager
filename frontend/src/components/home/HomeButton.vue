<template>
    <div id="button">
        <button @click="handleClick">{{ name }}</button>
    </div>
</template>

<script>
export default {
    name: 'HomeButton',
    props : {
        name : String
    }
}
</script>

<style scoped>
button {
    width: 196px;
    height: 35px;
    border: none;
    background: linear-gradient(180deg, #FFBB54 0%, #B36B2A 100%);
    border-radius: 13px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #FBD8A9;
}
</style>