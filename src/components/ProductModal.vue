<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div style="background: teal"
        class="modal-header text-white"
        :class="{ 'bg-primary': isNew }">
          <h5 id="productModalLabel" class="modal-title fw-bold">
            <span>{{ isNew ? '新增產品' : '編輯產品' }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <!-- {{ product }}<br>
        {{ nowProduct }}<br>
        isNew -> {{ isNew }} -->
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="img" class="mb-1">輸入圖片網址</label>
                <input id="img"
                type="text"
                class="form-control mb-3"
                placeholder="請輸入圖片連結"
                v-model="nowProduct.image"
                >
                <img class="img-fluid" :src="product.image">
                <!-- v-model="product.image" 這樣寫會出錯-->
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group mb-3">
                <label for="title" class="mb-1">標題</label>
                <input id="title"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
                v-model="nowProduct.title"
                >
              </div>
                <!-- v-model="product.title" 這樣寫會出錯-->
              <div class="row mb-3">
                <div class="form-group col-md-6">
                  <label for="category" class="mb-1">分類</label>
                  <input id="category"
                  type="text"
                  class="form-control"
                  placeholder="請輸入分類"
                  v-model="nowProduct.category"
                  >
                </div>
                  <!-- v-model="product.category" -->
                <div class="form-group col-md-6">
                  <label for="unit" class="mb-1">單位</label>
                  <input id="unit"
                  type="text"
                  class="form-control"
                  placeholder="請輸入單位"
                  v-model="nowProduct.unit"
                  >
                </div>
                  <!-- v-model="product.unit" -->
              </div>
              <div class="row mb-3">
                <div class="form-group col-md-6">
                  <label for="origin_price" class="mb-1">原價</label>
                  <input id="origin_price"
                  type="number"
                  class="form-control"
                  placeholder="請輸入原價"
                  min="0" max="100000"
                  v-model.number="nowProduct.origin_price"
                  >
                </div>
                  <!-- v-model.number="product.origin_price" -->
                <div class="form-group col-md-6">
                  <label for="price" class="mb-1">售價</label>
                  <input id="price"
                  type="number"
                  class="form-control"
                  placeholder="請輸入售價"
                  min="0" max="100000"
                  v-model.number="nowProduct.price"
                  >
                </div>
                  <!-- v-model.number="product.price" -->
              </div>
              <hr>
              <div class="form-group mb-3">
                <label for="description" class="mb-1">產品描述</label>
                <textarea id="description"
                type="text"
                class="form-control"
                placeholder="請輸入產品描述"
                v-model="nowProduct.description"
                >
                </textarea>
                <!-- v-model="product.description" -->
              </div>
              <div class="form-group mb-3">
                <label for="content" class="mb-1">說明內容</label>
                <textarea id="description"
                type="text"
                class="form-control"
                placeholder="請輸入說明內容"
                v-model="nowProduct.content"
                >
                </textarea>
                <!-- v-model="product.content" -->
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                  id="is_enabled"
                  type="checkbox"
                  class="form-check-input"
                  :true-value="1"
                  :false-value="0"
                  v-model="nowProduct.is_enabled"
                  >
                  <!-- v-model="product.is_enabled" -->
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="triggerFn" v-if="isNew">
            確認
          </button>
          <button type="button" class="btn btn-success" @click="triggerFn" v-else>
            確認
          </button>
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
      nowProduct: {},
    };
  },
  props: ['product', 'isNew'],
  methods: {
    triggerFn() {
      this.$emit('emitUpdate', this.isNew, this.nowProduct);
    },
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
  updated() {
    this.nowProduct = this.product;
  },
};
</script>
