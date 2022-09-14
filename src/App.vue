<template>
  <component :is="strComponentLayout">
    <router-view />
  </component>
</template>

<script>
import defaultLayout from "@/layouts/defaultLayout.vue";

export default {
  components: {
    defaultLayout,
  },
  data() {
    return {
      strComponentLayout: "defaultLayout",
    };
  },
};
</script>

<style src="@/assets/scss/_main.scss"></style>
