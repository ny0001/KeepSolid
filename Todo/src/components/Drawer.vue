<template>
    <div class="drawer-main-wr">
      <div v-bind:class="['drawer-wrapp', { open: this.$store.getters.drawerStateStatus }]">
          <div class="drawwer-inner">
              <div class="title-wr">
                  <label for="title" class="label">Title</label>
                  <input type="text" class="title" placeholder="enter title" v-model="drawerTitle">
              </div>
              <div class="description-wr">
                  <label for="textarea" class="label">Description</label>
                  <textarea class="textarea" placeholder="ToDo:" maxlength="1000" v-model="drawerDescription"></textarea>
              </div>
              <div class="desc-button-wr">
                  <button class="desc-submit-btn" @click="drawerSUBMIT()">Submit</button>
              </div>
              <div class="close-wr">
                  <button class="close" @click="closeDrawerInComponent()">x</button>
              </div>
          </div>
      </div>
      <div v-bind:class="['overlay-drawer', { active: this.$store.getters.drawerStateStatus }]" @click="closeDrawerInComponent()"></div>
    </div>
</template>

<script>
export default {
  name: 'Drawer',
  data() {
    return {
      drawerTitle: '',
      drawerDescription: '',
    }
  },
  mounted() {
    this.drawerTitle = this.$store.getters.getDrawerTitle;
    this.drawerDescription = this.$store.getters.getDrawerDescription;
  },
  computed: {

  },
  methods: {
    closeDrawerInComponent() {
      this.$store.dispatch('actionDrawerOpen', false);
    },
    drawerSUBMIT() {
      let taskObj = {
        author: this.$store.getters.getMail,
        title: this.drawerTitle || 'title',
        description: this.drawerDescription || 'description',
      }
      this.$store.dispatch('actionAdd_or_ChangeTask', taskObj);
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
    $background: #f8f9fa;
    $border: #e7e8ea;
    $textColor: #b9bdc3;
  .drawer-wrapp {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 20;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0 50px;
    transition: all 0.3s linear;
    background-color: #fff;
    box-shadow: 0px 1px 0px 0px rgba(231, 232, 234, 0.004), inset 0px 1px 0px 0px rgba(231, 232, 234, 0.004);
    border-right: 1px solid #e7e8ea;
    transform: translateX(-100%);
    &.open {
        transform: translateX(0);
    }
  }
  .drawwer-inner {
    position: relative;
    margin-top: 70px;
    height: 100%;
  }
  .description-wr, .title-wr {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  .textarea {
    @include font-family;
    height: 120px;
    resize: none;
    background-color: $background;
    border: 1px solid $border;
    color: $textColor;
    border-radius: 6px;
    outline: none;
    padding: 10px 15px;
    font-size: 17px;
    text-align: left;
    box-sizing: border-box;
    color: #000;
    &::placeholder {
      @include font-family;
      font-size: 17px;
      color: $textColor;
    }
  }
  .desc-button-wr {
    text-align: center;
    height: 40px;
    margin-top: 30px;
  }
  .desc-submit-btn {
    @include button-reset;
    @include font-family;
    width: 120px;
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
  .close-wr {
    text-align: center;
    box-sizing: border-box;
    margin-top: 70px;
  }
  .close {  
    @include button-reset;
    @include font-family;
    width: 45px;
    height: 45px;
    font-size: 30px;
    border-radius: 100%;
    font-weight: bold;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid $border;
    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
  .label {
    @include font-family;
    margin-left: 15px;
  }
  .title {
      @include font-family;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      padding-left: 10px;
      background: transparent;
      outline: none;
      border: 1px solid $border;
      border-radius: 6px;
      background-color: $background;
      font-size: 17px;
      padding: 0 15px;
      box-sizing: border-box;
      color: #000;
      &::placeholder {
        @include font-family;
        font-size: 17px;
        color: $textColor;
      }
      /* move placeholder right on focus*/
      &::-webkit-input-placeholder       {text-indent: 0px;   transition: text-indent 0.5s ease;}
      &::-moz-placeholder                {text-indent: 0px;   transition: text-indent 0.5s ease;}
      &:-moz-placeholder                 {text-indent: 0px;   transition: text-indent 0.5s ease;}
      &:-ms-input-placeholder            {text-indent: 0px;   transition: text-indent 0.5s ease;}
      &:focus::-webkit-input-placeholder {text-indent: 500px; transition: text-indent 0.5s ease;}
      &:focus::-moz-placeholder          {text-indent: 500px; transition: text-indent 0.5s ease;}
      &:focus:-moz-placeholder           {text-indent: 500px; transition: text-indent 0.5s ease;}
      &:focus:-ms-input-placeholder      {text-indent: 500px; transition: text-indent 0.5s ease;}
  }
  .overlay-drawer {
    position: absolute;
    z-index: 15;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    &.active {
        opacity: 1;
        visibility: visible;
    }
  }
@media (max-width: 420px) {
  .drawer-wrapp {
    padding: 0px 35px;
  }
}
@media (max-width: 375px) {
  .drawer-wrapp {
    padding: 0px 25px;
  }
}
</style>
