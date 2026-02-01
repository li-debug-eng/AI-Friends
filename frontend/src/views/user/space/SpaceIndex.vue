<script setup>
import {useRoute, useRouter} from "vue-router";
const route = useRoute();//获取路由参数，当前url相关信息
const router = useRouter();//获取路由对象,比如打开页面，后退等

</script>

<template>
个人空间:{{ route.params.user_id}}
</template>

<style scoped>

</style>