<template>
  <div v-if="currentUser" class="wrapper">
    <el-row>
      <el-col class="favorite__title" type="flex" justify="start"
        >Избранное</el-col
      >
    </el-row>
    <div class="favorite">
      <div
        class="favorite__item"
        v-for="favorite in favorites"
        :key="favorite.id"
      >
        {{ favorite.name }}
        <div>
          <el-button @click="getVideos(favorite)" type="primary" size="mini"
            >Выполнить</el-button
          >
          <el-button @click="openModal(favorite)" type="primary" size="mini"
            >Изменить</el-button
          >
          <el-button
            @click="deleteCurrentFavorite(favorite)"
            type="primary"
            size="mini"
            >Удалить</el-button
          >
        </div>
      </div>
    </div>
    <Modal />
  </div>
  <NotAuthorized class="wrapper" v-else />
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import Modal from "@/components/Modal";
import NotAuthorized from "@/components/NotAuthorized";
export default {
  components: {
    Modal,
    NotAuthorized,
  },
  methods: {
    ...mapMutations([
      "updateShowModal",
      "updateModalForEdit",
      "updateFavorites",
      "updateCurrentQuery",
      "updateCurrentName",
      "updateCurrentOrder",
      "updateCurrentMaxResults",
      "updateCurrentId",
      "deleteCurrentFavorite",
      "updateSearchedVideos",
      "updateSearched",
    ]),
    //Поиск видео по текущему запросу с заданными параметрами
    async getVideos(favorite) {
      try {
        const videos = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: favorite.query,
              order: favorite.order,
              maxResults: favorite.maxResults,
              key: this.currentUser.APIKey,
            },
          }
        );
        this.updateSearchedVideos(videos.data);
        this.updateSearched(true);
        this.$router.push("/main");
      } catch (error) {
        this.$message.error(error.response.data.error.message);
      }
    },
    //Открытие модалки для редактирования
    openModal(favorite) {
      this.updateCurrentQuery(favorite.query);
      this.updateCurrentName(favorite.name);
      this.updateCurrentOrder(favorite.order);
      this.updateCurrentMaxResults(favorite.maxResults);
      this.updateCurrentId(favorite.id);
      this.updateModalForEdit(true);
      this.updateShowModal(true);
    },
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.currentUser,
      favorites: (state) => state.favorites,
    }),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  .favorite__title {
    font-size: 28px;
    font-weight: 400;
    text-align: start;
    margin: 40px 0 20px;
  }
  .favorite__item {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    background-color: white;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    margin: 2px 0 2px;
    font-size: 16px;
    font-weight: 500;
    text-align: start;
    padding: 0 10px 0 10px;
  }
}
</style>