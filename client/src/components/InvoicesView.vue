<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Orders from '../services/Orders'
import { ordersAttributes } from '../interfaces'
import { orderStatus, orderTableHeaders } from '../helpers'

const data = ref<ordersAttributes[]>()
onMounted(() => {
  Orders.getAll().then((result) => {
    data.value = result
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
      <p class="p-regular">Visualize as notas fiscais que você tem.</p>
    </header>
    <table>
      <tr class="header-row">
        <th class="caption" v-for="item in orderTableHeaders">{{ item }}</th>
      </tr>
      <tr v-for="item in data" class="p-medium">
        <td>{{ item.nNf}}</td>
        <td>{{ item.buyer?.name }}</td>
        <td>{{ item.provider?.name}}</td>
        <td>{{ new Date(item.emissionDate).toLocaleDateString()}}</td>
        <td class="value">{{ Number(item.value).toLocaleString('pt-BR', { style: 'currency', currency:'BRL' }) }}</td>
        <td class="caption value">{{ orderStatus[Number(item.orderStatusBuyer)]}}</td>
        <td>
            <button class="p-12-bold">Dados do Cedente</button>
        </td>
      </tr>
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
    border-top: 1px solid var(--borders);
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

  h3 {
    margin: 0;
  }

  table {
    margin: 0 2.2rem;
    width: 73.563rem;
    border-collapse: separate;
    border-spacing: 1rem;
  }
  
  tr {
    outline: thin solid var(--borders);
    border-radius: 6px;
  }
  
  td, th {
    padding: 0.4rem;
  }

  .header-row{
    outline: none
  }

  button {
    background-color: white;
    box-sizing: border-box;
    padding: 0.5rem 1.813rem;
    width: 10.313rem;
    height: 2rem;
    border: 1px solid #CAD3FF;
    border-radius: 24px;
  }
</style>
