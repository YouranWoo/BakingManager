<template>
    <div>
     <!-- 1) user의 값을 받음 2) 값 저장 3) 버튼을 누르는 순간 회원 여부 확인 4) 회원 o -> main page로 이동 / 회원 x -> 경고 창 -->
        <p class="desc email_desc">Email</p>
        <input class="input email" v-model="email" placeholder="Enter your email" type="text" />
        <p class="desc pw_desc">Password</p>
        <input class="input pw" v-model="password" placeholder="Enter your password" type="text" />
        <button class="btn" @click="handleClick">Login</button>
    </div>
</template>

<script>
export default {
    name: 'LoginInputButton',
    data() {
        return {
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

.email {
    position: absolute;
    left: 36px;
    top: 363px;
    z-index: 1;
}

.email_desc {
    position: absolute;
    left: 56px;
    top: 326px;
    z-index: 2;
}

.pw {
    position: absolute;
    left: 36px;
    top: 444px;
    z-index: 1;
}

.pw_desc {
    position: absolute;
    left: 56px;
    top: 408px;
    z-index: 2;
}

.btn {
    position: absolute;
    width: 196px;
    height: 35px;
    border: none;
    left: 100px;
    top: 519px;
    background: #FFBB54;
    border-radius: 13px;
    font-family: 'Poppins';
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
}

</style>