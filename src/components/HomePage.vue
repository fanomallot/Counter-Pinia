<template>
  <div>
    <div class="count"> {{ storeCounter.count }} </div>
    <button @click="storeCounter.decreaseCount" :disabled="storeCounter.count == 0">-</button> |
    <button @click="storeCounter.increaseCount">+</button>
  </div>
  <hr>
  <p>This counter is: {{ storeCounter.oddOrEven }}</p>
</template>
<script setup>
import { counterStore } from '@/store/counter'
  const storeCounter = counterStore()
</script>
<style lang="scss">
  .count {
    font-size: 70px;
    margin: 20px;
  }
</style>
