<template>
  <div class="tab-content">
    <TabHeader :show-select="true" class="mt-6" />
    <div class="map-container"> 
      <worldMapChart />
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";

import worldMapChart from "../charts/worldMapChart.vue";

export default {
  components: {
    TabHeader,
    worldMapChart,
  }
};
</script>

<style lang="scss" scoped>
.map-container {
  padding: 110px 0 40px 0;
}
</style>