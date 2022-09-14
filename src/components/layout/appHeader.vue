<script setup>
import booksmedLogo from "@/components/icons/booksmedLogo.vue";
</script>

<template>
  <header class="page-header">
    <div class="page-header-top-nav">
      <booksmed-logo class="page-header-top-nav__logo" />

      <div class="page-header-top-nav-catalog">
        <div class="page-header-top-nav-catalog-menu">
          КАТАЛОГ
        </div>

        <input
          class="page-header-top-nav-search search-block"
          placeholder="Поиск медицинского оборудования"
        >
      </div>

      <div class="page-header-top-nav-contacts">
        <span class="page-header-top-nav-contacts__callback contact-callback">
          Заказать обратный звонок
        </span>

        <span class="page-header-top-nav-contacts__phone contact-phone">
          8 (3412) 65-08-77
        </span>

        <div
          class="page-header-top-nav-contacts__panel-messagers contact-panel"
        >
          <span class="contact-panel__viber">V</span>
          <span class="contact-panel__telegram">T</span>
          <span class="contact-panel__whatsapp">W</span>
        </div>
      </div>
    </div>
    <div class="page-header-nav">
      <ul class="page-header-nav-list">
        <li class="page-header-nav-list__item">
          О компании
        </li>
        <li class="page-header-nav-list__item">
          Производители
        </li>
        <li class="page-header-nav-list__item">
          Доставка
        </li>
        <li class="page-header-nav-list__item">
          Оплата
        </li>
        <li class="page-header-nav-list__item">
          Новости
        </li>
        <li class="page-header-nav-list__item">
          Реквзиты
        </li>
        <li class="page-header-nav-list__item">
          Контакты
        </li>
      </ul>

      <ul class="page-header-nav-actions-list">
        <li class="page-header-nav-actions-list__item">
          <font-awesome-icon icon="fa-solid fa-chart-column" />
          Сравнение
        </li>
        <li class="page-header-nav-actions-list__item">
          Корзина
        </li>
        <li class="page-header-nav-actions-list__item">
          Личный кабинет
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
.page-header {
  margin-bottom: 53px;
  padding: 0 104px;
  background: var(--header-background-white);
  box-shadow: 0px 10px 30px rgba(50, 87, 164, 0.1);

  &-top-nav {
    display: grid;
    grid-template-columns: 207px auto 482px;
    grid-template-rows: 40px;
    align-items: center;
    justify-items: center;
    padding-top: 18px;

    &__logo {
      justify-self: start;
    }

    &-contacts {
      display: flex;
      justify-self: end;

      &__callback,
      &__phone {
        padding-right: 30px;
      }
    }

    &-catalog {
      display: flex;
      align-items: center;
      justify-self: center;
      justify-content: space-between;

      &-menu {
        padding-right: 50px;
      }
    }
  }

  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 34px;
    padding: 16px 0;
  }
}

.page-header-nav-list,
.page-header-nav-actions-list {
  display: flex;
  gap: 32px;
}

.contact-callback {
  color: var(--page-color-link);
  text-decoration: underline;
}

.search-block {
  min-width: 250px;
  max-width: 450px;
  height: 17px;
  padding: 8px 15px 8px 40px;

  border-color: transparent;
  border-radius: 10px;

  box-shadow: inset 0px 0px 3px rgba(50, 87, 164, 0.25);
}
</style>
