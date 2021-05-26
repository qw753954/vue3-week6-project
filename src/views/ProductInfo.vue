<template>
  <Loading :active="isLoading"></Loading>
  <h3 class="fw-bold mb-4">🎒 {{ product.title }}</h3>
  <div class="row">
    <div class="col-xl-5">
      <img :src="product.image" :alt="product.title"
      class="img-fluid rounded d-block mx-auto my-4 my-xl-0">
    </div>
    <div class="col-xl-7">
      <div v-if="product.origin_price !== product.price">
        <h5><span class="badge px-3 py-2 rounded-pill bg-success">原價</span></h5>
        <p class="ps-1 mb-4">
          $ {{ product.origin_price }}
        </p>
      </div>
      <h5><span class="badge px-3 py-2 rounded-pill bg-success">售價</span></h5>
      <p class="h5 text-danger fw-bold ps-1 mb-4">
        $ {{ product.price }}
      </p>
      <h5><span class="badge px-3 py-2 rounded-pill bg-success">產品敘述</span></h5>
      <p class="ps-1 mb-4">{{ product.description ? product.description : '無' }}</p>
      <h5><span class="badge px-3 py-2 rounded-pill bg-success">說明內容</span></h5>
      <p class="ps-1">{{ product.content ? product.content : '無' }}</p>
      <p class="info-tag text-primary position-absolute"># {{ product.category }}</p>
      <hr class="my-4">
      <div class="input-group">
        <input type="number" class="form-control w-50" min="1" v-model.number="qty">
        <button class="btn btn-sm btn-outline-secondary" type="button"
        @click="addToCart(product.id, qty)"
        :disabled="loadingBtn.addCart == product.id">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
            v-if="loadingBtn.addCart == product.id"></span>
            加入購物車
        </button>
      </div>
    </div>
  </div>
  <!-- 回饋 -->
  <FeedbackModal
  ref="feedbackModal"
  :msg="msg"
  ></FeedbackModal>
</template>

<script>
import FeedbackModal from '@/components/FeedbackModal.vue';

export default {
  data() {
    return {
      product: {},
      qty: 1,
      msg: '',
      loadingBtn: {
        addCart: '',
      },
      isLoading: true,
    };
  },
  components: {
    FeedbackModal,
  },
  created() {
    console.log(this.$route);
    // Use object destructuring 會要求解構
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.axios.get(url)
      .then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
          document.title = this.product.title;
          this.isLoading = false;
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  },
  methods: {
    addToCart(id, qty) {
      if (qty < 1) {
        alert('產品數量不得小於一');
        return;
      }
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
            this.qty = 1;
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
};
</script>
