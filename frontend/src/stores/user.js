import {defineStore} from "pinia";
import {hasInjectionContext, ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref(0)
    const username = ref('')
    const photo = ref('')
    const profile = ref('')
    const accessToken = ref('')
    const hasPulledUserInfo = ref(false)

    function isLogin(){
        return !!accessToken.value //!!把一个值转成布尔值就是判断是否为空 一定要带value
    }

    function setAccessToken(token){
        accessToken.value = token

    }

    function setUserInfo(data){//和后端返回的数据一一对应
        id.value = data.user_id
        username.value = data.username
        photo.value = data.photo
        profile.value = data.profile
    }

    function logout() {
        id.value = 0
        username.value = ''
        photo.value = ''
        profile.value = ''
        accessToken.value = ''
    }

    function  setHasPulledUserInfo(newStatus){
        hasPulledUserInfo.value = newStatus
    }


    return {
        id,
        username,
        photo,
        profile,
        accessToken,
        setAccessToken,
        setUserInfo,
        isLogin,
        logout,
        hasPulledUserInfo,
        setHasPulledUserInfo,
    }
})


//(a,b,c)=>{ }//定义了一个函数等价于function(a,b,c)

