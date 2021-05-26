<template>
  <div class="container py-5">
    <h1 class="fw-bold text-secondary mb-4">前台</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{
                name: '產品列表',
              }" class="nav-link">產品列表</router-link>
            </li>
            <li class="nav-item me-auto">
              <router-link :to="{
                name: '購物車列表',
              }" class="nav-link">購物車列表</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="admin" class="nav-link">後台管理</router-link>
            </li>
            <li class="nav-item" v-if="!isLogin">
              <router-link :to="{
                name: '登入',
              }" class="nav-link">登入</router-link>
            </li>
            <li class="nav-item" v-if="isLogin">
              <a href="#" class="nav-link" @click.prevent="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="container py-4">
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld,
//   },
// };
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    logout() {
      this.isLogin = false;
      document.cookie = 'token=; expires=;';
      document.cookie = 'user_id=; expires=;';
      alert('已成功登出，即將返回首頁');
      this.$router.push('/');
    },
  },
};
</script>
