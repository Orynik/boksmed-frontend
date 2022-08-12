<script setup>
import appHeader from "@/components/layout/appHeader.vue"

</script>

<template>
  <div>
    <app-header/>

    <div class="wrapper">
      <slot/>
    </div>

    <footer>
      Я Footer
    </footer>
  </div>
</template>

<style lang="scss">
  .wrapper{
    padding: 0 104px;
  }
</style>