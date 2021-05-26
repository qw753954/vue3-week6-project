<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end my-4">
    <button class="btn btn-primary" @click="openModal('new')">
      建立新的產品
    </button>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th width="15%">
          分類
        </th>
        <th width="35%">
          產品名稱
        </th>
        <th width="10%">
          原價
        </th>
        <th width="10%">
          售價
        </th>
        <th width="10%">
          是否啟用
        </th>
        <th width="15%">
          編輯
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>
          {{ item.origin_price }}
        </td>
        <td>
          {{ item.price }}
        </td>
        <td :class="{ 'text-success' : item.is_enabled }">
          {{ item.is_enabled ? '啟用' : '未啟用'}}
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-success btn-sm"
            @click="openModal('edit', item)">
              編輯
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm"
            @click="openModal('delete', item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- 分頁元件 -->
  <Pagination
  :pages="pagination"
  @emit-change="getProduct"
  ></Pagination>
  <!-- 產品 modal -->
  <ProductModal
  ref="productModal"
  :product="tempProduct"
  :is-new="isNew"
  @emit-update="updateProduct"
  ></ProductModal>
  <!-- 刪除 modal -->
  <DelProductModal
  ref="delProductModal"
  :product="tempProduct"
  @emit-delete="delProduct"
  ></DelProductModal>
</template>

<script>
// @ 後面一定要加一條斜線
// https://www.cnblogs.com/lin-kn/p/7766644.html
import ProductModal from '@/components/ProductModal.vue';
import DelProductModal from '@/components/DelProductModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      isNew: true,
      isLoading: true,
    };
  },
  components: {
    ProductModal,
    DelProductModal,
    Pagination,
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct(page = 1) { // 先給預設值 1
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.axios.get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          } else {
            alert(res.data.message);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateProduct(isNew, product) {
      this.isLoading = true;
      let url;
      let httpMethod;
      if (isNew) {
        // 新增商品 API
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product`;
        httpMethod = 'post';
      } else {
        // 編輯商品 API
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
        httpMethod = 'put';
      }
      this.axios[httpMethod](url, { data: product })
        .then((res) => {
          if (res.data.success) {
            this.$refs.productModal.hideModal();
            this.getProduct();
          } else {
            alert(res.data.message);
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    delProduct(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.axios.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.getProduct();
          } else {
            alert(res.data.message);
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openModal(type, item) {
      switch (type) {
        case 'new':
          this.isNew = true;
          this.tempProduct = {};
          this.$refs.productModal.openModal();
          break;
        case 'edit':
          this.isNew = false;
          this.tempProduct = JSON.parse(JSON.stringify(item));
          this.$refs.productModal.openModal();
          // productModal -> ref 名稱
          break;
        case 'delete':
          this.tempProduct = JSON.parse(JSON.stringify(item));
          this.$refs.delProductModal.openModal();
          break;
        default:
          break;
      }
    },
  },
};
</script>
