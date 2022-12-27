<script setup lang="ts">
import { onMounted } from 'vue'
import Orders from '../services/Orders'

onMounted(() => {
  Orders.getAll().then((data) => {
    console.log(data)
  })
})
</script>

<template>
  <main>
    <header>
      <div class="title-container">
        <img src="src/assets/nficon.svg" alt="notas fiscais" class="title-icon">
        <h3>Notas fiscais</h3>
      </div>
      <p class="p-regular">Visualize as notas que você tem.</p>
    </header>
    <table>
      <th></th>
    </table>
  </main>
</template>

<style scoped>
  main {
    width: 100%;
    box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
    border-radius: 15px 0px 0px 15px;
  }
  header {
    margin-top: 4rem;
    border-top: 1px solid #DFE2EB;
    padding: 2.5rem 0 0 3rem;
  }
  .title-container {
    display: flex;
    align-items: center;
  }
  .title-icon {
    width: 2rem;
    height: 0.875rem;
  }
</style>
