<script setup>
import primedic from "@/assets/img/primedic.vue";
</script>

<template>
  <main>
    <section class="banner">
      <div class="banner__wrapper">
        <primedic />
        <h3 class="banner--header">
          Ручные и автоматические дефибрилляторы «Primedic»
        </h3>

        <span class="banner--text"
          >что то нужно написать, может быть качество и выгодные цены.
        </span>

        <div class="banner__action">
          <a class="button button--blue">Перейти в каталог</a>
          <i class="switch switch--prev"></i>
          <i class="switch switch--next"></i>
        </div>
      </div>
      <img src="@/assets/img/Banner_1.png" />
    </section>
  </main>
</template>

<style lang="scss">
.banner {
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  background-color: #fff;

  box-shadow: -1px 0px 5px rgba(50, 87, 164, 0.3);

  &__wrapper {
    display: grid;
    padding: 146px 75px;
    max-width: 478px;

    pointer-events: none;
  }

  &__action {
    display: flex;
    flex-direction: row;
    justify-content: left;
    height: 48px;
    align-items: center;
    gap: 28px;
  }

  &--header {
    display: inline-block;
    font-family: Geometria-Bold;
    font-size: 28px;
    line-height: 35.22px;
  }

  &--text {
    display: inline-block;
    max-width: 387px;
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
