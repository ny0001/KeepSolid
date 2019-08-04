<template>

  <div class="home-main-wr">
    <div class="main-wrapper">
        <div class="header">
          <p class="user">{{ Email }}</p>
        <div class="button-wr">
          <button class="logout" @click="logout()">Logout</button>
        </div>
        </div>
        <div class="content-wr">
            <div class="content-inner">
                <ul class="content-ul">
                  <li v-for="todo in all_TODOs" :key="todo.id">
                    <task name="task" :todo="todo"></task>
                  </li>
                </ul>
            </div>
            <button class="addTask" @click="addTaskButton()">+</button> 
            <drawer v-if="drawerStateStatus"></drawer>
            <modal></modal>
        </div>
    </div>
  </div> 
</template>

<script>
import { mapGetters } from 'vuex';
import Drawer from '@/components/Drawer.vue';
import Task from '@/components/Task.vue';
import Modal from '@/components/Modal.vue';
export default {
  name: 'home',
  components: {
    Drawer,
    Task,
    Modal
  },
  data() {
    return {
      Email: '',
    }
  },
  created() {
    if (localStorage.getItem('login')) {
      let enteredMail = JSON.parse(localStorage.getItem('login'));
      this.Email = enteredMail;
      this.$store.dispatch('actionSaveMail', enteredMail);
      this.$store.dispatch('requestGetAllTasks', enteredMail);
    } else {
      this.$router.push({ path: '/login', name: 'login' });
    }
  },
  computed: {
    ...mapGetters([
      'all_TODOs',
      'drawerStateStatus'
    ])
  },
  methods: {
    logout() {
      localStorage.removeItem('login');
      this.$router.push({ path: '/login', name: 'login' });
      this.$store.dispatch('action_DEL_allTasks');
    },
    addTaskButton() {
      this.$store.dispatch('actionSaveTaskID', null);
      this.$store.dispatch('actionEditDrawerTitle', '');
      this.$store.dispatch('actionEditDrawerDescription', '');
      this.$store.dispatch('actionDrawerOpen', true);
    },
  },
}
</script>

<style scoped lang="scss">
    @import 'src/assets/styles.scss';
    @mixin button-reset {
      background: transparent;
      border: none;
      box-sizing: border-box;
      outline: none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    $background: #f8f9fa;
    $border: #e7e8ea;
    $textColor: #b9bdc3;
  .main-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .content-inner {
    width: 100%;
    height: 100%;
  }
  .content-ul {
      height: 100%;
      max-width: 1013px;
      margin: 0 auto;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      overflow: auto;
      li {
        margin: 0;
        padding: 0;
      }
  }
  .header {
    border: 1px solid $border;
    background-color: $background;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content-wr {
    position: relative;
    height: 500px;
    background-color: $background;
    border: 1px solid $border;
    border-radius: 10px;
    overflow: hidden;
    padding: 30px;
  }
  .button-wr {
    height: 100%;
  }
  .logout {
    @include button-reset;
    @include font;
    width: 200px;
    height: 100%;
    border-radius: 6px;
    box-shadow: 0px 6px 12px 0px rgba(40, 43, 49, 0.08);
    font-size: 17px;
    font-weight: 700;
    color:  #000;
    background-image: -webkit-linear-gradient(-45deg, #009fc5 0%, #3cecb0 100%);
    &:hover {
      color: #fff;
      background-image: -webkit-linear-gradient(-45deg, #ff8e64 0%, #ffe641 100%);
    }
  }
  .addTask {
    @include button-reset;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 35px;
    bottom: 35px;
    background-image: -webkit-linear-gradient(-45deg, #009fc5 0%, #3cecb0 100%);
    border-radius: 100%;
    color: #fff;
    font-size: 40px;
    box-shadow: 0px 6px 12px 0px rgba(40, 43, 49, 0.08);
    $shadow: #000;
    text-shadow: $shadow 1px 1px 0, $shadow -1px -1px 0, 
                  $shadow -1px 1px 0, $shadow 1px -1px 0;
    &:hover {
      color: #000;
      $shadow: #fff;
      text-shadow: $shadow 1px 1px 0,  $shadow -1px -1px 0, 
                   $shadow -1px 1px 0, $shadow 1px -1px 0;
      background-image: -webkit-linear-gradient(-45deg, #ff8e64 0%, #ffe641 100%);
    }
  }
  .user {
    @include font;
    color: #b9bdc3;
    font-size: 24px;
  }

    @media (max-width: 420px) {
      .main-wrapper {
        max-width: 360px;
      }
      .header {
        flex-direction: column;
        height: 125px;
        padding: 0;
      }
      .logout {
        height: 40px;
      }
      .user {
        margin: 15px;
      }
      .drawer-wrapp {
        padding: 0px 35px;
      }
      .content-ul {
        justify-content: center;
      }
      .content-wr {
        padding: 30px 0;
      }
      .addTask {
        right: 20px;
        bottom: 20px;
      }
      .task-wr {
        min-height: 240px;
        margin: 20px 0;
      }
    }
    @media (max-width: 375px) {
      .main-wrapper {
        max-width: 340px;
      }
      .task-wr {
        width: 290px;
        min-height: 240px;
        margin: 20px 0;
      }
    }
    @media (max-width: 360px) {
      .main-wrapper {
        max-width: 320px;
      }
      .task-wr {
        width: 275px; 
      }
    }


</style>