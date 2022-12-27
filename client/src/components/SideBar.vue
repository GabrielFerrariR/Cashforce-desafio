<script setup lang="ts">
</script>

<template>
  <section>
    <img src="src/assets/menu-hero.svg" class="hero-icon" alt="cash force" />
    <div class="nav-option-container">
      <span/>
      <img src="src/assets/nficon.svg" alt="notas fiscais" class="menu-icon">
      <p class="p-medium">Notas fiscais</p>
    </div>
  </section>
</template>

<style scoped>
  section {
    height: 100vh;
    width: 20%;
    background-color: #FBFDFE;
  }

  .hero-icon {
    width: 18em;
    height: 5em;
  }

  .menu-icon {
    width: 2rem;
    height: 0.875rem;
  }

  .nav-option-container {
    display: flex;
    align-items: center;
    height: 4rem;
    padding: 8px 24px;
    position: absolute;
  }

  .nav-option-container:hover span {
    width: 0.25rem;
    background-color: #00AD8C;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 10px;
    transition: 0.5s;
  }

  .nav-option-container:hover .p-medium {
    color: #00AD8C;
  }

  .nav-option-container:hover .menu-icon {
    fill: #00AD8C;
  }

</style>
