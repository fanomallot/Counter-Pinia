<template>
  <div @click="storeCounter.increaseCount" class="detail">
    {{ storeCounter.count }}
    Detail
  </div>
</template>
<script setup>
import { counterStore } from '@/store/counter'
  const storeCounter = counterStore()
</script>
<style lang="scss">
  .detail {
    cursor: pointer;
  }
</style>
