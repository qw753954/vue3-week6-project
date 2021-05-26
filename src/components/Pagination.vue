<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-sm justify-content-center">
      <li
      class="page-item"
      :class="{ disabled : !pages.has_pre }">
        <a href="#" class="page-link"
        @click.prevent="$emit('emitChange', pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item"
      :class="{ 'active' : pages.current_page == item }"
      v-for="(item, index) in pages.total_pages"
      :key="index">
        <a href="#" class="page-link"
        @click.prevent="$emit('emitChange', item)">
          {{ item }}
        </a>
      </li>

      <li class="page-item"
      :class="{ disabled : !pages.has_next }">
        <a href="#" class="page-link"
        @click.prevent="$emit('emitChange', pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
};
</script>
