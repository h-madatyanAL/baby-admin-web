<template>
  <div class="tab-content">
    <div class="tab-content__title">裝置連線 / 離線累積時數分析</div>
    <TabHeader class="mt-6" />
    <div class="tab-content__body mt-6">
      <doubleBarChart
        firstDatasetLabel="機構系統"
        secondDataSetLabel="居家單機"
        :height="500" 
      />
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";

import doubleBarChart from "../../components/charts/doubleBarChart.vue";

export default {
  components: {
    TabHeader,
    doubleBarChart,
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
    padding: 60px 33px 50px 40px;
    height: 620px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
  }
}
</style>
