<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let strComponentLayout = ref("defaultLayout");

watch(route, function (val) {
  strComponentLayout.value = val.meta.isAdminPage
    ? "adminLayout"
    : "defaultLayout";
});
</script>

<script>
import defaultLayout from "@/layouts/defaultLayout.vue";

export default {
  components: {
    defaultLayout,
  },
};
</script>

<template>
  <component :is="strComponentLayout">
    <router-view />
  </component>
</template>

<style src="@/assets/scss/_main.scss"></style>
