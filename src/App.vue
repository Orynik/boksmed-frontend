<template>
  <component :is="strComponentLayout">
    <router-view/>
  </component>
</template>

<script>
import defaultLayout from '@/layouts/defaultLayout.vue'

export default{
  data() {
    return {
      strComponentLayout: 'defaultLayout'
    }
  },
  components: {
    defaultLayout
  },
}
</script>