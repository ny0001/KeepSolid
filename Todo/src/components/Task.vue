<template>
    <div class="task-wr">
        <div class="task-inner">
            <div class="task-btns-wr">
                <button class="edit" @click="editTask()"></button>
                <button class="delete" @click="deleteComponent()"></button>
            </div>
            <div class="task-content-wr">
                <div class="task-title">
                    <h3 class="title"> {{ this.todo.title }} </h3>
                </div>
                <div class="task-content">
                    <p class="desc"> 
                        {{ this.todo.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['todo'],
  data() {
    return {

    }
  },
  created() {
      
  },
  computed: {

  },
  methods: {
      saveTaskID() {
        this.$store.dispatch('actionSaveTaskID', this.todo._id);
      },
      deleteComponent() {
        this.saveTaskID();
        this.$store.dispatch('actionModalOpen', true);
      },
      editTask() {
        this.saveTaskID()
        this.$store.dispatch('actionEditDrawerTitle', this.todo.title);
        this.$store.dispatch('actionEditDrawerDescription', this.todo.description);
        this.$store.dispatch('actionDrawerOpen', true);
      },
  },

}
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap');
    @mixin font-family {
      font-family: 'Nunito Sans', sans-serif;
    }
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
    $taskWidth: 300px;
    $taskHeight: 300px;
    $background: #f8f9fa;
    $border: #e7e8ea;
    $textColor: #b9bdc3;

    .task-wr {
        border: 1px solid $border;
        background-color: $background;
        width: $taskWidth;
        min-height: $taskHeight;
        margin: 15px 15px;
        border-radius: 10px;
    }
    // .task-inner {

    // }
    .task-btns-wr {
        display: flex;
        justify-content: flex-end;
        padding: 5px 0;
        border-bottom: 1px solid $border;
    }
    .edit, .delete {
        @include button-reset;
        width: 30px;
        height: 30px;
        background: transparent;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .edit {
        background-image: url('../../public/icons/edit.png');
    }
    .delete {
        margin: 0 20px 0 15px;
        background-image: url('../../public/icons/delete.png');
    }
    // .task-content-wr {

    // }
    .task-title {
        @include font-family;
        padding: 0 15px;
    }
    .task-content {
        @include font-family;
        padding: 15px;
        >p {
            color: $textColor;
        }
    }

</style>
