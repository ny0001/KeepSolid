import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import module_Login from "./store/login"; 
import module_Drawer from "./store/drawer"; 
import module_Modal from "./store/modal"; 
import HTTP_Requests from "./store/HTTPrequests"; 

export default new Vuex.Store({
  modules: {
    modal: module_Modal,
    drawer: module_Drawer,
    login: module_Login,
    requests: HTTP_Requests,
  },

  state: {
    taskID: '',
    TODOs: [],
  },
  getters: {
    all_TODOs: state => state.TODOs,
    getTaskID: state => state.taskID,
  },
  mutations: {
    deleteTaskFromTOSOs(state, elemID) {
      const result = state.TODOs.filter(obj => obj._id !== String(elemID));
      state.TODOs = result;
    },
    mutateTaskID(state, task_id) {
      state.taskID = task_id;
    },
    deleteAllTasks(state) {
      state.TODOs = [];
    }
  },
  actions: {
    actionDeleteTask(context, taskID) {
      context.commit('deleteTaskFromTOSOs', taskID);
    },
    actionSaveTaskID(context, taskID){
      context.commit('mutateTaskID', taskID);
    },
    action_DEL_allTasks(context) {
      context.commit('deleteAllTasks');
    }
  }
})




