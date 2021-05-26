<template>
  <Loading :active="isLoading"></Loading>
  <table class="table w-75 mx-auto mb-4">
    <thead>
      <th width="36%" class="px-2">品名</th>
      <th width="30%" class="px-2">數量</th>
      <th colspan="2" class="px-2">單價</th>
    </thead>
    <tbody>
      <tr v-for="item in carts" :key="item.id">
        <td>{{ item.product.title }}</td>
        <td>
          <div class="input-group">
            <input type="number" class="form-control" min="1" :value="item.qty">
            <span class="input-group-text">{{ item.product.unit }}</span>
          </div>
        </td>
        <td>${{ item.product.price }}</td>
        <td class="text-end">
          <button class="btn btn-sm btn-secondary" type="button" @click="delCartItem(item.id)"
            :disabled="loadingBtn.delCart == item.id">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
              v-if="loadingBtn.delCart == item.id"></span>
            刪除
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td class="text-end py-3" colspan="4">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode">
            <button type="button" class="btn btn-danger btn-sm" @click="useCoupon">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                v-if="loadingBtn.coupon"></span>
              套用優惠碼
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-end py-4" colspan="4">
          <p class="h5 fw-bold mt-2 mb-0">總計 ${{ cartsTotal }}</p>
        </td>
      </tr>
    </tfoot>
  </table>

  <!-- 表單 -->
  <Form class="orderForm mx-auto" @submit="onSubmit" v-slot="{ errors }">
    <div class="mb-3">
      <label for="orderEmail" class="form-label">
        E-mail <span class="fw-bold text-danger">*</span>
      </label>
      <Field type="email" class="form-control" id="orderEmail"
        placeholder="請輸入 E-mail" name="E-mail"
        rules="required|email" v-model="orderInfo.user.email"
        :class="{ 'is-invalid' : errors['E-mail'] }">
      </Field>
      <ErrorMessage class="invalid-feedback" name="E-mail"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="orderName" class="form-label">
        姓名 <span class="fw-bold text-danger">*</span>
      </label>
      <Field type="text" class="form-control" id="orderName" placeholder="請輸入姓名"
      name="姓名" rules="required"
      v-model="orderInfo.user.name" :class="{ 'is-invalid' : errors['姓名'] }"></Field>
      <ErrorMessage class="invalid-feedback" name="姓名"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="orderTel" class="form-label">
        手機 <span class="fw-bold text-danger">*</span>
      </label>
      <Field type="tel" class="form-control" id="orderTel" placeholder="請輸入手機號碼"
      name="手機" :rules="isPhone"
      v-model="orderInfo.user.tel" :class="{ 'is-invalid' : errors['手機'] }"></Field>
      <ErrorMessage class="invalid-feedback" name="手機"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="orderRegion" class="form-label">
        區域 <span class="fw-bold text-danger">*</span>
      </label>
      <Field type="text" id="orderRegion" class="form-control" name="區域"
      placeholder="請輸入區域" rules="required"
      v-model="orderInfo.user.region" :class="{ 'is-invalid' : errors['區域'] }"></Field>
      <ErrorMessage class="invalid-feedback" name="區域"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="orderAddress" class="form-label">
        地址 <span class="fw-bold text-danger">*</span>
      </label>
      <Field type="text" id="orderAddress" class="form-control" name="地址"
      placeholder="請輸入地址" rules="required"
      v-model="orderInfo.user.address" :class="{ 'is-invalid' : errors['地址'] }"></Field>
      <ErrorMessage class="invalid-feedback" name="地址"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="orderPay" class="form-label">
        付款方式 <span class="fw-bold text-danger">*</span>
      </label>
      <Field id="orderPay" class="form-select" name="付款方式" rules="required" as="select"
        v-model="orderInfo.user.payment" :class="{ 'is-invalid' : errors['付款方式'] }">
        <option value="" hidden disabled>請選擇付款方式</option>
        <option value="WebATM">WebATM</option>
        <option value="ATM">ATM</option>
        <option value="Barcode">Barcode</option>
        <option value="Credit">Credit</option>
        <option value="Apple Pay">Apple Pay</option>
        <option value="Google Pay">Google Pay</option>
      </Field>
      <ErrorMessage class="invalid-feedback" name="付款方式"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="orderMsg" class="form-label">留言</label>
      <textarea class="form-control" id="orderMsg" rows="4" placeholder="有任何想對我們說的話嗎？"
        v-model="orderInfo.message"></textarea>
    </div>
    <div class="text-center">
      <button class="btn btn-sm btn-success">
        送出訂單
      </button>
    </div>
  </Form>
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
      carts: [],
      cartsTotal: 0,
      couponCode: '',
      orderInfo: {
        user: {
          email: '',
          name: '',
          tel: '',
          region: '',
          address: '',
          payment: '',
        },
      },
      msg: '',
      isLoading: true,
      loadingBtn: {},
    };
  },
  components: {
    FeedbackModal,
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(url)
        .then((res) => {
          console.log(res);
          if (!res.data.success) return;
          this.carts = res.data.data.carts;
          this.cartsTotal = res.data.data.final_total;
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    delCartItem(id) {
      this.loadingBtn.delCart = id;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.axios.delete(url)
        .then((res) => {
          // this.loadingBtn.delCart = id; 不能放這
          if (res.data.success) {
            this.getCart();
            this.loadingBtn.delCart = '';
            this.opanIFmodal(res.data.message);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    // 表單驗證 + 送出
    onSubmit(values, { resetForm }) {
      if (this.carts.length === 0) {
        this.opanIFmodal('購物車沒東西哦');
        return;
      }
      console.log('values', values);
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`;
      const data = {
        data: this.orderInfo,
      };
      console.log(data);
      this.axios.post(url, data)
        .then((res) => {
          if (!res.data.success) {
            alert(res.data.message);
            return;
          }
          resetForm();
          this.getCart();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    isPhone(value) {
      if (!value) return '手機 為必填';
      const phoneNum = /^(09)[0-9]{8}$/;
      return phoneNum.test(value) ? true : '手機 格式不正確';
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
    document.title = '我的購物車';
    this.getCart();
  },
};
</script>
