<template>
  <div>
    <!-- Отображение в виде списка -->
    <div v-if="videoDisplayStyle === 'list'">
      <el-row
        v-for="(video, idx) in searchedVideos.items"
        :key="idx"
        type="flex"
        justify="start"
        class="video"
        :gutter="50"
      >
        <el-col :span="4">
          <a :href="rootVideoUrl + video.id.videoId" target="_blank">
            <img
              class="video__img"
              :src="video.snippet.thumbnails.medium.url"
              alt="image"
            /> </a
        ></el-col>
        <el-col class="video__text" :span="14">
          <h3 class="video__text__top">
            <a :href="rootVideoUrl + video.id.videoId" target="_blank">{{
              video.snippet.title
            }}</a>
          </h3>
          <div class="video__text__bottom">
            <span class="video__text__bottom__bts">
              <a
                :href="rootChannelUrl + video.snippet.channelId"
                target="_blank"
              >
                {{ video.snippet.channelTitle }}
              </a>
            </span>
            <span class="video__text__bottom__bts">{{
              video.snippet.publishTime
                .slice(0, 10)
                .split("-")
                .reverse()
                .join(".")
            }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- Отображение в виде карточек -->
    <div v-if="videoDisplayStyle === 'card'" class="card__wrapper">
      <div v-for="(video, idx) in searchedVideos.items" :key="idx" class="card">
        <a :href="rootVideoUrl + video.id.videoId" target="_blank">
          <img
            class="card__img"
            :src="video.snippet.thumbnails.medium.url"
            alt="img"
          />
        </a>
        <h3 class="card__title">
          <a :href="rootVideoUrl + video.id.videoId" target="_blank">
            {{ video.snippet.title }}
          </a>
        </h3>
        <div class="card__bottom">
          <span class="card__bottom__bts">
            <a :href="rootChannelUrl + video.snippet.channelId" target="_blank">
              {{ video.snippet.channelTitle }}
            </a>
          </span>

          <span class="card__bottom__bts">{{
            video.snippet.publishTime
              .slice(0, 10)
              .split("-")
              .reverse()
              .join(".")
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      rootVideoUrl: "https://www.youtube.com/watch?v=",
      rootChannelUrl: "https://www.youtube.com/channel/",
    };
  },
  props: {
    videos: {
      type: Object,
    },
  },
  computed: {
    ...mapState({
      videoDisplayStyle: (state) => state.videoDisplayStyle,
      searchedVideos: (state) => state.searchedVideos
    }),
  },
};
</script>

<style lang="scss" scoped>
.video {
  margin: 25px 0 25px 0;
  &__img {
    width: 192px;
    height: 112px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px 0 10px;
    &__top {
      font-weight: 500;
      font-size: 16px;
      text-align: start;
    }
    &__bottom {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &__bts {
        opacity: 0.7;
        font-weight: 400;
        font-size: 14px;
        text-align: start;
      }
    }
  }
}
.card__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .card {
    width: 245px;
    height: 226px;
    margin: 10px;
    &__img {
      width: 245px;
      height: 138px;
    }
    &__title {
      text-align: start;
      margin: 8px 0 8px;
      font-weight: 500;
      font-size: 16px;
      height: 38px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__bottom {
      display: flex;
      flex-direction: column;
      &__bts {
        text-align: start;
        font-weight: 400;
        font-size: 14px;
        opacity: 0.7;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
a {
  text-decoration: none;
  color: black;
}
</style>