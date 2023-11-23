<template>
  <div class="page-box">
    <v-tabs v-model="activeTabIndex" :show-arrows="true" class="tabs">
      <v-tab v-for="(tab, i) in tabs" :key="`tab_${i}`">{{ tab }}</v-tab>
    </v-tabs>
    <div class="page-box__content">
      <KeepAlive>
        <Transition name="fade" mode="out-in">
          <Component :ref="activeComponentName" :is="activeComponentName" />
        </Transition>
      </KeepAlive>
    </div>
  </div>
</template>

<script>

const allComponents = [
  "SalesVolume",
  "SalesArea",
  "SalesPipeline",
  "SalesTargets",
];
const tabs = ["銷售數量", "銷售地區分布", "銷售管道", "銷售對象"]

export default {
  components: {
    SalesVolume: () => import("@/components/report/salesVolume"),
    SalesArea: () => import("@/components/report/salesArea"),
    SalesPipeline: () => import("@/components/report/salesPipeline"),
    SalesTargets: () => import("@/components/report/salesTargets"),
  },
  data() {
    return {
      allComponents,
      tabs,
      activeTabIndex: null,
    };
  },
  computed: {
    activeComponentName() {
      return this.allComponents[this.activeTabIndex];
    },
  },
};
</script>

<style lang='scss' scoped>
</style>