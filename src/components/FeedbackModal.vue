<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog rounded-pill shadow" style="max-width: 150px">
      <div class="modal-content rounded-pill" style="border: none;">
        <div class="modal-body fw-bold text-center">
          {{ msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: '',
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      backdrop: false,
    });
  },
  props: ['msg'],
  methods: {
    openModal() {
      this.modal.show();
      document.body.style.overflow = 'auto'; // 讓背景可以滾動
    },
    hideModal() {
      this.modal.hide();
    },
  },
};
</script>
