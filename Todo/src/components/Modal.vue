<template>
    <div v-bind:class="['modal-wrapper', { active: modalStateStatus }]">
        <div class="modal">
            <p>Are you sure you want to permanently remove this item ?</p>
            <div class="button-wrapp">
                <button class="btn-no" @click="closeModal()">No</button>
            </div>
            <div class="button-wrapp">
                <button class="btn-yes" @click="modalBtnYes()">Yes</button>
            </div>
        </div>
        <div v-bind:class="['overlay', { active: modalStateStatus }]" @click="closeModal()"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Modal',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'modalStateStatus',
    ])
  },
  methods: {
      closeModal() {
        this.$store.dispatch('actionModalOpen', false);
      },
      modalBtnYes() {
        this.$store.dispatch('requestDeleteTask', this.$store.getters.getTaskID);
        this.closeModal();
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
    $taskWidth: 300px;
    $taskHeight: 300px;
    $background: #f8f9fa;
    $border: #e7e8ea;
    $textColor: #b9bdc3;

.modal-wrapper {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
	z-index: 11;
	display: flex;
    align-items: center;
    justify-content: center;
	&.active {
        opacity: 1;
        visibility: visible;
        > .modal {
            transform: none;
        }
    }
}
.modal {	
    position: relative;
    z-index: 999;
    max-width: 600px;
    transition: all 0.3s ease;
    transform: scale(1.2);
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    border: 1px solid $border;
    >p {
        @include font;
        font-size: 20px;
        color: #000;
    }
}
.button-wrapp {
    float: right;
    margin: 0 10px;
    button {
        @include font;
        @include button-reset;
        height: 100%;
        padding: 5px 20px;
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
}
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 15;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    &.active {
        opacity: 1;
        visibility: visible;
    }
}

@media (max-width: 420px) {
    .modal {
        max-width: 300px;
    }
}
@media (max-width: 375px) {
    .modal {
        max-width: 280px;
    }
}
@media (max-width: 360px) {
    .modal {
        padding: 20px;
    }
}
@media (max-width: 320px) {
    .modal {
        max-width: 210px;
        padding: 0px 30px 10px 30px;
        p {
            margin: 10px 0;
        }
    }
}
</style>
