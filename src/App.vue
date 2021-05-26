<template>
  <span class="text-light">App.vue</span>
  <router-view/>
</template>

<style lang="scss">
@import "bootstrap";
body {
  font-size: 15px;
}

.form-select,
.form-control,
input::placeholder {
  font-size: 14px !important;
}

td,
th {
  vertical-align: middle !important;
}

.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  line-height: 1.2;
}

.overflow-auto{
  overflow: auto i!important;
}

.img-size {
  width: 150px;
  height: 150px !important;
  object-fit: cover;
}

.info-tag {
  right: 20px;
  top: 10px;
  font-weight: bold;
  background: linear-gradient(#fff 60%, rgb(243, 243, 243) 40%);
}

.orderForm {
  max-width: 400px;
}
</style>
