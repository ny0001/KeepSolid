<template>
    <section id="section-login">
      <div class="login">
          <div class="login-wr">
              <div class="login-card">
                  <div class="avatar">
                      <img class="avatar-img" src="user.png" alt="user-icon">
                  </div>
                  <form @submit.prevent="formSubmit()" class="form-register">
                    <div class="form-inner-wr">
                      <div class="input-wr">
                          <input v-model="inputVal" type="text" :class="['email', {isValid, hasError}]" placeholder="Enter E-Mail" @input="removeClass()">
                          <p class="message" :class="{active: showMessage}">Check your E-Mail...</p>
                      </div>
                      <div class="button-wr">
                          <button class="submit-btn">Submit</button>
                      </div>
                    </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      inputVal: '',
      isValid: false,
      hasError: false,
      showMessage: false,
    };
  },
  computed: {
    addMailToState(mail){
      return this.$store.mail = mail;
    },
  },
  methods: {
    formSubmit() {
        const mail = this.inputVal;
        const re = /^((\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}))$/;
        const valid = re.test(mail);

        if (valid) {
            this.isValid = true;
            this.hasError = false;
            this.successRegistration(mail);
        } else {
            this.isValid = false;
            this.hasError = true;
            this.showMessage = true;
        }
    },
    removeClass() {
        this.isValid = false;
        this.hasError = false;
        this.showMessage = false;
    },
    successRegistration(mail) {
      localStorage.setItem('login', JSON.stringify(mail));
      setTimeout(() => {
        this.$router.push({ path: '/', name: 'home' });
      }, 1000);
    },
  }
};
</script>



<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap');
    @mixin font-family {
      font-family: 'Nunito Sans', sans-serif;
    }
    $cardWidth: 370px;
    $cardHeight: 450px;
    $background: #f8f9fa;
    $border: #e7e8ea;
    $textColor: #b9bdc3;

    .login {
      position: fixed;
      height: 100vh;
      width: 100vw;
    }
    .login-wr {
        position: fixed; 
        top: 50%; 
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .login-card {
        width: $cardWidth;
        height: $cardHeight;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: #ffffff;  
        box-shadow: 0px 12px 24px 0px rgba(40, 43, 49, 0.16);
    }
    .avatar {
      border: 1px solid $border;
      border-radius: 6px;
      background-color: $background;
      padding: 30px;
    }
    .avatar-img {
        height: 100px;
        width: 100px;
    }
    .form-inner-wr {
      text-align: center;
      width: 200px;
    }
    .email {
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
      color: $textColor;
      padding: 0 15px;
      box-sizing: border-box;
      color: #000;
      &::placeholder {
        @include font-family;
        font-size: 17px;
        color: $textColor;
      }
      &.hasError {
        border: 1px solid red;
      }
      &.isValid {
        border: 1px solid green;
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
    .button-wr {
      margin-top: 30px;
    }
    .submit-btn {
      @include font-family;
      width: 100%;
      height: 40px;
      background: transparent;
      border: none;
      border-radius: 6px;
      background-image: -webkit-linear-gradient(-45deg, #ff8e64 0%, #ffe641 100%);
      box-shadow: 0px 6px 12px 0px rgba(40, 43, 49, 0.08);
      font-size: 17px;
      font-weight: 700;
      box-sizing: border-box;
      color:  #000;
      cursor: pointer;
      &:hover {
        color: $border;
        background-image: -webkit-linear-gradient(-45deg, #009fc5 0%, #3cecb0 100%);
      }
      outline: none;
      &:focus {
        outline: none;
      }
    }
    .message {
      @include font-family;
      color: red;
      font-size: 16px;
      font-weight: bold;
      opacity: 0;
      visibility: hidden;
      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
    @media (max-width: 420px) {
      .login-card {
        width: 320px;
      }
    }
    @media (max-width: 320px) {
      .login-card {
        width: 270px;
        height: 390px;
      }
      .button-wr {
        margin-top: 0;
      }
      .message {
        margin: 10px;
      }
    }

</style>