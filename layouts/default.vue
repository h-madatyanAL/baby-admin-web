<template>
  <v-app>
    <div class="d-flex container-fluid">
      <Sidebar @change-active-page="changeActivePage" />
      <div class="page-container">
        <Header :active-page="activePage" />
        <Nuxt class="px-8" />
      </div>
    </div>
  </v-app>
</template>

<script>
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import auth from '@/middleware/auth'
export default {
  name: 'DefaultLayout',
  components: {
    Sidebar,
    Header
  },
  middleware: [auth],
  data () {
    return {
      activePage: {},
    }
  },
  methods: {
    changeActivePage(v) {
      if(this.$route.path.includes(v.path)) {
        this.activePage = v;
      }else {
        this.activePage = {};
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
