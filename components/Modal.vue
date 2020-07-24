<template>
  <div>
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div
          class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <button
            type="button"
            class="btn-close"
            aria-label="Close modal"
            @click="close"
          >
            x
          </button>
          <section class="modal-body">
            <slot name="body">
              I'm the default body!
            </slot>
          </section>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0.5;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  opacity: 1;
  justify-content: center;
  align-items: center;
}
.modal {
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  top: 25%;
  right: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  /* flex-direction: column; */
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  width: 100%;
  height: 100%;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}
.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
