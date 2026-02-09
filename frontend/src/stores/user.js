import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref(1)
    const username = ref('ljb')
    const photo = ref('http://127.0.0.1:8000/media/user/photos/default.png')
    const profile = ref('111')
    const accessToken = ref('111')

    function isLogin(){
        return !!accessToken.value //!!把一个值转成布尔值就是判断是否为空 一定要带value
    }

    function setAccessToken(token){
        accessToken.value = token
    }

    function setUserInfo(data){//和后端返回的数据一一对应
        id.value = data.id
        username.value = data.username
        photo.value = data.photo
        profile.value = data.profile
    }

    function logout(){
        id.value = 0
        username.value = ''
        photo.value = ''
        profile.value = ''
        accessToken.value = ''
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
    }
})

//(a,b,c)=>{ }//定义了一个函数等价于function(a,b,c)

