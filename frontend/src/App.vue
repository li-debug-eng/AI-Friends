<script setup>

import NavBar from "@/components/navbar/NavBar.vue";
</script>

<template>
  <NavBar>
    <RouterView /><!--根据当前网址去渲染对应的组件-->
  </NavBar>
</template>

<style scoped>

</style>
