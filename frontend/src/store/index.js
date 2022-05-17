import { createStore } from 'vuex';
import UserStore from '@/store/modules/UserStore';


export default createStore({
    modules: { UserStore },
})