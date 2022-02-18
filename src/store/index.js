import Vue from 'vue'
import Vuex from 'vuex'
import usersData from '@/login/users.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //Забираем всех юзеров из users.json
    users: usersData,
    currentUser: null,
    favorites: [],
    isSearched: false,
    videoDisplayStyle: 'list',
    showModal: false,
    isModalForEdit: false,
    currentQuery: '',
    currentName: '',
    currentOrder: '',
    currentMaxResults: '',
    currentId: '',
    searchedVideos: {
      items: [],
    }
  },
  mutations: {
    updateUser(state, newUser) {
      state.currentUser = newUser
      state.favorites = JSON.parse(localStorage.getItem(state.currentUser.name)) || []
    },
    loginOut(state) {
      state.currentUser = null
      localStorage.removeItem("currentUser")
    },
    updateFavorites(state, newItem) {
      if (!state.favorites.find(el => el.id === newItem.id) && !state.isModalForEdit) {
        state.favorites.push(newItem)
        localStorage.setItem(state.currentUser.name, JSON.stringify(state.favorites))
      }
    },
    editCurrentFavorite(state, newValue) {
      const index = state.favorites.findIndex(el => el.id === newValue.id)
      state.favorites.splice(index, 1, newValue)
      localStorage.setItem(state.currentUser.name, JSON.stringify(state.favorites))
    },
    deleteCurrentFavorite(state, newValue) {
      const index = state.favorites.findIndex(el => el.id === newValue.id)
      state.favorites.splice(index, 1)
      localStorage.setItem(state.currentUser.name, JSON.stringify(state.favorites))
    },
    updateIsSearched(state, newValue) {
      state.isSearched = newValue
    },
    updateVideoDisplayStyle(state, newValue) {
      state.videoDisplayStyle = newValue
    },
    updateShowModal(state, newValue) {
      state.showModal = newValue
    },
    updateIsModalForEdit(state, newValue) {
      state.isModalForEdit = newValue
    },
    updateCurrentQuery(state, newValue) {
      state.currentQuery = newValue
    },
    updateCurrentName(state, newValue) {
      state.currentName = newValue
    },
    updateCurrentOrder(state, newValue) {
      state.currentOrder = newValue
    },
    updateCurrentMaxResults(state, newValue) {
      state.currentMaxResults = newValue
    },
    updateCurrentId(state, newValue) {
      state.currentId = newValue
    },
    updateSearchedVideos(state, newValue) {
      state.searchedVideos = newValue
    }
  },
  actions: {
  },
  modules: {
  }
})