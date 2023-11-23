<template>
  <div class="tab-content">
    <div class="tab-content__title">裝置連線 / 離線累積時數分析</div>
    <TabHeader :show-select="true" class="mt-6" />
    <div class="tab-content__body mt-10">
      <multilineChart
        :bottomLabels="[
          '10.10 (一)',
          '10.11 (二)',
          '10.13 (三)',
          '10.14 (四)',
          '10.15 (五)',
          '10.16 (六)',
          '10.17 (日)',
        ]"
        :displayLegends="true"
        :height="530"
      />
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";

import multilineChart from "../charts/multipleLineChart.vue";

export default {
  components: {
    TabHeader,
    multilineChart,
  },
};
</script>

<style lang="scss" scoped>
.tab-content {
  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #656565;
  }
  &__body {
    padding: 60px 15px 60px 30px;
    height: 620px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
  }
}
</style>
