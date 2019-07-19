const module_Drawer = {
    state: {
      isDrawerOpen: false,
      drawerTitle: '',
      drawerDescription: '',
    },
    getters: {
      drawerStateStatus: state => state.isDrawerOpen,
      getDrawerTitle: state => state.drawerTitle,
      getDrawerDescription: state => state.drawerDescription,
    },
    mutations: {
      mutateDrawerState(state, drawerStatus) {
        state.isDrawerOpen = drawerStatus;
      },
      mutateDrawerTitle(state, drawer_Title) {
        state.drawerTitle = drawer_Title;
      },
      mutateDrawerDescription(state, drawer_Description) {
        state.drawerDescription = drawer_Description;
      },
      mutationAddNewTask(state, taskObj) {
        this.state.TODOs.push(taskObj);
      },
    },
    actions: {
      actionDrawerOpen (context, drawerState) {
        context.commit('mutateDrawerState', drawerState);
      },
      actionEditDrawerTitle (context, drawer_Title) {
        context.commit('mutateDrawerTitle', drawer_Title);
      },
      actionEditDrawerDescription (context, drawer_Description) {
        context.commit('mutateDrawerDescription', drawer_Description);
      },
      actionAdd_or_ChangeTask(context, taskObj) {
        let elemID = this.getters.getTaskID; 
        const todosArr = this.state.TODOs;
        const objIndex = todosArr.findIndex((obj => obj._id == elemID));
        if (objIndex != -1 ) {
          todosArr[objIndex].title = taskObj.title;
          todosArr[objIndex].description = taskObj.description;
          context.dispatch('requestEditTask', taskObj, elemID);
        } else {
          context.dispatch('requestAddNewTask', taskObj);
        }
        context.commit('mutateDrawerState', false);
      },
    },
}


export default module_Drawer; 

