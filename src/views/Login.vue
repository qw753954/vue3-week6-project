<template>
  <Loading :active="isLoading"></Loading>
  <form action="" class="mx-auto" style="max-width: 250px" @submit.prevent="login">
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput"
      placeholder="name@example.com"
      v-model="user.username" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword"
      placeholder="Password" v-model="user.password" required>
      <label for="floatingPassword">Password</label>
    </div>
    <button class="btn btn-primary w-100 mt-4">登入</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/admin/signin`;
      this.axios.post(url, this.user)
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            const { token, expired } = res.data;
            const userId = this.user.username.split('@', 1).join('');
            document.cookie = `token=${token};expires=${new Date(expired)}; path=/`;
            document.cookie = `user_id=${userId};expires=${new Date(expired)}; path=/`;
            this.$router.push('/admin');
          } else {
            alert(`${res.data.message}，帳號或密碼打錯了！`);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>
