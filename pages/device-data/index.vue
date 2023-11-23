<template>
  <div class="page-box">
    <v-tabs class="tabs" :show-arrows="true" v-model="activeTabIndex">
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
const allComponents = ["UsageHours", "UsageTime", "DeviceVersion"];
const tabs = ["裝置使用時數", "裝置使用時間分布", "裝置版本"];

export default {
  name: "device-data",
  components: {
    UsageHours: () => import("@/components/device-data/usageHours"),
    UsageTime: () => import("@/components/device-data/usageTime"),
    DeviceVersion: () => import("@/components/device-data/deviceVersion"),
  },
  data() {
    return {
      activeTabIndex: null,
      allComponents,
      tabs,
    };
  },
  computed: {
    activeComponentName() {
      return this.allComponents[this.activeTabIndex];
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
