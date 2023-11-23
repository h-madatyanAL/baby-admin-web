<template>
  <div class="auth">
    <v-app>
      <Nuxt />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='scss'>
  .auth {
    background: $bg-light;
  }
</style>