<template>
  <Loading :active="isLoading"></Loading>
  <table class="table table-hover w-75 mx-auto">
    <thead>
      <tr>
      <th>圖片</th>
      <th>商品名稱</th>
      <th width="40%" colspan="3">價格</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td><img :src="item.image" class="rounded img-fluid img-size"></td>
        <td>{{ item.title }}</td>
        <td>
          <del class="text-secondary" v-if="item.origin_price > item.price">
            ${{ item.origin_price }}
          </del>
          <p class="h5 fw-bold mb-0">${{ item.price }}</p>
        </td>
        <td>{{ item.name }}</td>
        <td>
          <router-link
          :to="{ name: '產品介紹', params: { id: item.id } }"
          class="btn btn-outline-success btn-sm mb-3">查看更多</router-link>
          <button type="button" class="btn btn-outline-danger btn-sm d-block"
          @click="addToCart(item.id)"
          :disabled="loadingBtn.addCart == item.id">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
          v-if="loadingBtn.addCart == item.id"></span>
            加入購物車
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- 分頁元件 -->
  <Pagination
  :pages="pagination"
  @emit-change="getProduct"
  ></Pagination>
  <!-- 回饋 -->
  <FeedbackModal
  ref="feedbackModal"
  :msg="msg"
  ></FeedbackModal>
</template>

<script>
import FeedbackModal from '@/components/FeedbackModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      msg: '',
      isSuccessful: true,
      isLoading: true,
      loadingBtn: {
        addCart: '',
      },
    };
  },
  components: {
    FeedbackModal,
    Pagination,
  },
  methods: {
    // 取得產品列表
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.axios.get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      this.loadingBtn.addCart = id;
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.post(url, data)
        .then((res) => {
          if (res.data.success) {
            this.loadingBtn.addCart = '';
            this.opanIFmodal(res.data.message);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    opanIFmodal(msg) {
      this.msg = msg;
      this.$refs.feedbackModal.openModal();
      setTimeout(() => {
        this.$refs.feedbackModal.hideModal();
      }, 1200);
    },
  },
  created() {
    document.title = '產品列表';
    this.getProducts();
  },
};
</script>
