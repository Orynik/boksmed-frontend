<script setup>
  import booksmedLogo from "@/components/icons/booksmedLogo.vue";
</script>

<template>
  <header class="page-header">
    <div class="page-header-top-nav">
      <booksmed-logo class="page-header-top-nav__logo"/>

      <div class="page-header-top-nav__catalog">
        КАТАЛОГ
      </div>

      <input class="page-header-top-nav__search" placeholder="Поиск медицинского оборудования">

      <span class="page-header-top-nav__contact-callback contact-callback" >
        Заказать обратный звонок
      </span>

      <span class="page-header-top-nav__contact-phone contact-phone">
        8 (3412) 65-08-77
      </span>

      <div class="page-header-top-nav__contact-panel contact-panel">
        <span class="contact-panel__viber">V</span>
        <span class="contact-panel__telegram">T</span>
        <span class="contact-panel__whatsapp">W</span>
      </div>
    </div>
    <div class="page-header-nav">
      <ul class="page-header-nav-list">
        <li class="page-header-nav-list__item">О компании</li>
        <li class="page-header-nav-list__item">Производители</li>
        <li class="page-header-nav-list__item">Доставка</li>
        <li class="page-header-nav-list__item">Оплата</li>
        <li class="page-header-nav-list__item">Новости</li>
        <li class="page-header-nav-list__item">Реквзиты</li>
        <li class="page-header-nav-list__item">Контакты</li>
      </ul>

      <ul class="page-header-nav-actions-list">
        <li class="page-header-nav-actions-list__item">Сравнение</li>
        <li class="page-header-nav-actions-list__item">Корзина</li>
        <li class="page-header-nav-actions-list__item">Личный кабинет</li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
  .page-header{
    margin-bottom: 53px;
    padding: 0 104px;
    background: var(--header-background-white);

    &-top-nav {
      display: grid;
      grid-template-columns: repeat(7,1fr);
      grid-template-rows: 40px;
      gap: 100px 20px;
      align-items: center;
      justify-items: center;
      margin-bottom: 24px;

      &__logo{
        justify-self: start;
      }

      &__search {
        grid-column: 3/5;
        width: 300px;
        height: 17px;
        padding: 8px 15px 8px 40px;

        border-color: transparent;
        border-radius: 10px;

        box-shadow: inset 0px 0px 3px rgba(50, 87, 164, 0.25);
      }

      &__contact-phone,
      &__contact-panel{
        justify-self: end;
      }
    }

    &-nav{
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 34px;
    }
  }

  .page-header-nav-list,
  .page-header-nav-actions-list{
    display: flex;
    gap: 28px;
  }
</style>