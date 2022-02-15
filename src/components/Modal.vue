<template>
  <div>
    <el-dialog
      :title="modalForEdit ? 'Изменить запрос' : 'Сохранить запрос'"
      :visible="showModal"
      width="30%"
      center
      :show-close="false"
    >
      <el-form
        type="flex"
        justify="center"
        status-icon
        label-position="top"
        class="demo-ruleForm"
      >
        <el-form-item label="Запрос">
          <el-input
            :value="currentQuery"
            @input="updateCurrentQuery"
            :disabled="!modalForEdit"
          ></el-input>
        </el-form-item>
        <el-form-item label="Название">
          <el-input :value="currentName" @input="updateCurrentName"></el-input>
        </el-form-item>
        <el-form-item label="Сортировать по">
          <el-select
            placeholder="Укажите тип сортировки"
            :value="currentOrder"
            @input="updateCurrentOrder"
          >
            <el-option label="Актуальности" value="relevance"></el-option>
            <el-option label="Рейтингу" value="rating"></el-option>
            <el-option label="Кол-ву просмотров" value="viewCount"></el-option>
            <el-option label="По алфавиту" value="title"></el-option>
            <el-option
              label="Кол-ву видео на канале"
              value="videoCount"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Сколько видео отобразить?">
          <el-slider
            :min="1"
            :max="50"
            :value="currentMaxResults"
            @input="updateCurrentMaxResults"
          ></el-slider>
        </el-form-item>
        <el-form-item size="small">
          <el-button type="primary" @click="submitFavorite"
            >Сохранить</el-button
          >
          <el-button @click="cancelWithoutSave">Не сохранять</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations([
      "updateShowModal",
      "updateModalForEdit",
      "updateFavorites",
      "updateCurrentQuery",
      "updateCurrentName",
      "updateCurrentOrder",
      "updateCurrentMaxResults",
      "editCurrentFavorite",
    ]),
    submitFavorite() {
      const newFavorite = {
        query: this.currentQuery,
        name: this.currentName,
        order: this.currentOrder,
        maxResults: this.currentMaxResults,
      };
      if (!this.currentQuery.length || !this.currentName.length) {
        this.$message('Поля "Запрос" и "Название" не должны быть пустыми');
        return;
      }
      //Условия для сохранения нового запроса
      if (
        !this.modalForEdit &&
        !this.favorites.find((el) => el.query === this.currentQuery)
      ) {
        newFavorite.id = Date.now();
        this.updateFavorites(newFavorite);
        this.updateShowModal(false);
        this.updateModalForEdit(false);
        this.$message({
          message: "Поиск сохранен в избранное.",
          type: "success",
        });
      } else if (!this.modalForEdit) {
        this.$message(`Вы уже искали <${this.currentQuery}>`);
      }
      //Условия для редактирования существующего запроса
      else if (this.modalForEdit) {
        newFavorite.id = this.currentId;
        this.editCurrentFavorite(newFavorite);
        this.updateShowModal(false);
        this.updateModalForEdit(false);
        this.$message({
          message: "Запрос поиска отредактирован.",
          type: "success",
        });
      }
    },
    cancelWithoutSave() {
      this.updateShowModal(false);
      this.updateModalForEdit(false);
    },
  },
  computed: {
    ...mapState({
      showModal: (state) => state.showModal,
      modalForEdit: (state) => state.modalForEdit,
      currentQuery: (state) => state.currentQuery,
      currentName: (state) => state.currentName,
      currentOrder: (state) => state.currentOrder,
      currentMaxResults: (state) => state.currentMaxResults,
      currentId: (state) => state.currentId,
      favorites: (state) => state.favorites,
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>