

const module_Login = {
    state: {
      mail: '',
    },
    getters: {
      getMail: state => state.mail,
    },
    mutations: {
      mutateMailState(state, mail) {
        state.mail = mail;
      },
    },
    actions: {
      actionSaveMail (context, mail) {
        context.commit('mutateMailState', mail);
      },
    },
  }


export default module_Login; 