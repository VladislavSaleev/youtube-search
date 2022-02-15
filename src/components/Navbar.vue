<template>
  <el-menu mode="horizontal">
    <div class="el-menu-bundle">
      <img class="logo" src="@/assets/logo.svg" alt="Logo" />
      <el-menu-item index="1" @click="$router.push('/main')"
        >Поиск</el-menu-item
      >
      <el-menu-item index="2" @click="$router.push('/favorite')"
        >Избранное</el-menu-item
      >
    </div>
    <div class="el-menu-bundle">
      <el-menu-item @click="logout" index="3">Выйти</el-menu-item>
    </div>
  </el-menu>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    ...mapMutations(["loginOut"]),
    logout() {
      this.loginOut();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-menu-bundle {
    display: flex;
    flex-direction: row;
    .logo {
      width: 57px;
      height: 57px;
    }
  }
}
</style>