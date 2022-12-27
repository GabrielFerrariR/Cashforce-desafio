<script setup lang="ts">
import InvoicesView from './components/InvoicesView.vue'
import SideBarVue from './components/SideBar.vue'
</script>

<template>
  <div class="container">
    <SideBarVue />
    <InvoicesView />
  </div>
</template>

<style scoped>
  .container {
    margin: 0;
    display: flex;
  }
</style>
