<template>
  <div id="app">
    <Navbar />
    <br />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapMutations } from "vuex";
export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapMutations(["updateUser"]),
  },
  mounted() {
    //Подгружаем текущего юзера при перезагрузке страницы
    if (localStorage.getItem("currentUser")) {
      this.updateUser(JSON.parse(localStorage.getItem("currentUser")));
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
* {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}
body {
  background: rgba(250, 250, 250, 1);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
