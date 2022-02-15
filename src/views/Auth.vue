<template>
  <el-container>
    <el-form label-position="top" size="medium" :model="userProp">
      <el-form-item>
        <img src="@/assets/logo.svg" alt="Logo" />
      </el-form-item>
      <el-form-item>
        <h1>Вход</h1>
      </el-form-item>
      <el-form-item label="Логин">
        <el-input v-model.trim="userProp.name"></el-input>
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model.trim="userProp.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="Youtube API key">
        <el-input v-model.trim="userProp.APIKey"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="login(userProp.name, userProp.password)"
          type="primary"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      userProp: {
        name: "",
        password: "",
        APIKey: ""
      },
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  methods: {
    ...mapMutations(["updateUser"]),
    login(name, password) {
      const currentUser = this.users.find((el) => el.name === name);
      if (!currentUser) {
        this.$message.error('Такого пользователя не существует.');
        return;
      }
      if (!this.userProp.APIKey.length) {
        this.$message.error('Для использования функционала необходим действующий Youtube API ключ. Ссылка в консоли.');
        console.log("https://developers.google.com/youtube/v3/getting-started");
        return
      }
      if (currentUser.password === password) {
        currentUser.APIKey = this.userProp.APIKey 
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        this.updateUser(currentUser);
        this.$message({
          message: 'Успешный вход.',
          type: 'success'
        });
        setTimeout(() => {
          this.$router.push("/main");
        }, 500);
      } else {
        this.$message.error('Пароль введен неверно.');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  margin: 100px auto;
  max-width: 800px;
  border: 1px solid rgba($color: #000000, $alpha: 0.15);
  .el-form {
    margin: 30px 0 30px 0;
    .el-input {
      width: 300px;
    }
  }
}
</style>