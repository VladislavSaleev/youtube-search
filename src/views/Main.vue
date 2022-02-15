<template>
  <div class="wrapper" v-if="currentUser">
    <el-row
      type="flex"
      :justify="searched ? 'start' : 'center'"
      :style="searched ? 'margin: 20px 0 20px;' : 'margin: 250px 0 20px'"
      class="search__title"
    >
      <el-col
        :span="4"
        :style="searched ? 'text-align: start;' : 'text-align: center;'"
        ><h2>Поиск видео</h2></el-col
      >
    </el-row>
    <el-row type="flex" :justify="searched ? 'start' : 'center'" :gutter="10">
      <el-col :span="searched ? 21 : 13">
        <el-input
          placeholder="Что хотите посмотреть?"
          :value="currentQuery"
          @input="updateCurrentQuery"
        >
        </el-input
      ></el-col>
      <el-col :span="2"
        ><el-button @click="getVideos" type="primary">Найти</el-button>
      </el-col>
      <el-col :span="1" v-if="searched">
        <el-button
          @click="openModal"
          type="danger"
          icon="el-icon-star-off"
          circle
        ></el-button>
      </el-col>
    </el-row>
    <div v-if="searched" class="content">
      <el-row type="flex" justify="space-around" class="content__header">
        <el-col :span="22" class="content__header__text">
          <h4>Видео по запросу: "{{ currentQuery.trim() }}"</h4>
        </el-col>
        <el-col :span="2">
          <el-button
            @click="updateVideoDisplayStyle('list')"
            icon="el-icon-s-unfold"
            circle
          ></el-button>
          <el-button
            @click="updateVideoDisplayStyle('card')"
            icon="el-icon-menu"
            circle
          ></el-button>
        </el-col>
      </el-row>
      <VideoList :videos="videos" />
      <Modal />
    </div>
  </div>
  <NotAuthorized class="wrapper" v-else />
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import VideoList from "@/components/VideoList";
import NotAuthorized from "@/components/NotAuthorized";
import Modal from "@/components/Modal";
export default {
  components: {
    VideoList,
    NotAuthorized,
    Modal,
  },
  methods: {
    ...mapMutations([
      "updateFavorites",
      "updateSearched",
      "updateVideoDisplayStyle",
      "updateShowModal",
      "updateCurrentQuery",
      "updateCurrentName",
      "updateCurrentOrder",
      "updateCurrentMaxResults",
      "updateSearchedVideos",
    ]),
    //Поиск видео
    async getVideos() {
      try {
        const videos = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: this.currentQuery.trim(),
              order: "relevance",
              maxResults: 12,
              key: this.currentUser.APIKey,
            },
          }
        );
        console.log(videos.data);
        this.updateSearchedVideos(videos.data);
        this.updateSearched(true);
      } catch (error) {
        this.$message.error(error.response.data.error.message);
      }
    },
    //Открытие модалки для добавления запроса
    openModal() {
      if (this.currentQuery.trim() !== "") {
        this.updateCurrentQuery(this.currentQuery.trim());
        this.updateCurrentName(this.currentQuery.trim());
        this.updateCurrentOrder("relevance");
        this.updateCurrentMaxResults(12);
        this.updateShowModal(true);
      } else {
        this.$message.error('Запрос не может быть пустым.');
      }
    },
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.currentUser,
      searched: (state) => state.searched,
      currentQuery: (state) => state.currentQuery,
    }),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  .content {
    &__header {
      margin: 40px 0 20px 0;
      &__text {
        text-align: left;
      }
    }
  }
}
a {
  text-decoration: none;
  color: black;
}
</style>