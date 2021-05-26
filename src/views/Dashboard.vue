<template>
  <div class="container pt-5">
    <h1 class="fw-bold text-secondary mb-4">後台</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/admin" class="nav-link">儀表板首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">產品列表</router-link>
            </li>
            <li class="nav-item me-auto">
              <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">回到前台</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="container pt-2 pb-4">
    <p class="text-end mb-4">
      👋 Hello <span class="text-primary fw-bold"> {{ userId }}</span>！
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      isLogin: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const userId = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.userId = userId;
      if (token) {
        this.axios.defaults.headers.common.Authorization = token;
        const url = `${process.env.VUE_APP_URL}/api/user/check`;
        this.axios.post(url)
          .then((res) => {
            if (res.data.success) {
              this.isLogin = true;
              return;
            }
            alert(res.data.message);
            this.$router.push('/login');
          });
      } else {
        alert('您尚未登入');
        this.$router.push('/login');
      }
    },
    logout() {
      document.cookie = 'token=; expires=; path=/';
      document.cookie = 'user_id=; expires=; path=/';
      alert('已成功登出，即將返回首頁');
      this.$router.push('/');
    },
  },
};
</script>
