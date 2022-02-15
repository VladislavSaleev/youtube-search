<template>
  <div>
    <el-alert
      style="width: 400px; height: 60px; margin: 50px auto"
      title="Вы не авторизованы!"
      type="warning"
      effect="dark"
      :closable="false"
      center
      show-icon
    >
    </el-alert>
    <el-button @click="$router.push('/')" type="primary"
      >Впустите меня!</el-button
    >
  </div>
</template>
