<template>
    <p class="desc name_desc">Name</p>
    <input class="input name" v-model="name" placeholder="Enter any nickname you want" type="text" />
    <p class="desc email_desc">Email</p>
    <input class="input email" v-model="email" placeholder="Enter your email" type="text" />
    <p class="desc pw_desc">Password</p>
    <input class="input pw" v-model="password" placeholder="Enter your password" type="text" />
    <button @click="handleClick">Sign-up</button>
</template>

<script>
export default {
    name: 'RegistrationInputButton',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'Poppins';
    src: url(@/assets/fonts/Poppins-Medium.ttf) format('truetype');
    font-weight: 500;
    font-style: Medium;
}
@font-face {
    font-family: 'Roboto';
    src: url(@/assets/fonts/Roboto-Medium.ttf) format('truetype');
    font-weight: 500;
    font-style: Medium;
}

.desc {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #6C6A6A;
    border: 5px solid #FFFFFF;
    background: #FFFFFF;
}

.input {
    width: 297px;
    height: 42px;
    border: 1px solid #6C6A6A;
    border-radius: 13px;
    padding: 0 15px 0 15px;
}

.name {
    position: absolute;
    left: 36px;
    top: 363px;
    z-index: 1;
}

.name_desc {
    position: absolute;
    left: 56px;
    top: 326px;
    z-index: 2;
}

.email {
    position: absolute;
    left: 36px;
    top: 444px;
    z-index: 1;
}

.email_desc {
    position: absolute;
    left: 56px;
    top: 408px;
    z-index: 2;
}

.pw {
    position: absolute;
    left: 36px;
    top: 524px;
    z-index: 1;
}

.pw_desc {
    position: absolute;
    left: 56px;
    top: 487px;
    z-index: 2;
}

button {
    position: absolute;
    width: 196px;
    height: 35px;
    border: none;
    left: 100px;
    top: 609px;
    background: #FFBB54;
    border-radius: 13px;
    font-family: 'Poppins';
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
}

</style>