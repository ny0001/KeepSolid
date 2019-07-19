

const module_Modal = {
    state: {
      isModalOpen: false,
    },
    getters: {
      modalStateStatus: state => state.isModalOpen,
    },
    mutations: {
      mutateModalState(state, modalStatus, id) {
        state.isModalOpen = modalStatus;
      },
    },
    actions: {
      actionModalOpen (context, modalState) {
        context.commit('mutateModalState', modalState);
      },
    },
}

export default module_Modal; 