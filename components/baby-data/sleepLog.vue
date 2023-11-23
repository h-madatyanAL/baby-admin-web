<template>
  <div class="tab-content">
    <TabHeader />
    <div class="tab-content__body">
      <barAndLineChart
        lineDataSetLabel="平均睡眠次數(每日)"
        barDataSetLabel="平均睡眠時長 (每日)"
        :showYAxis="true"
        :barThickness="21"
        :height="500"
      />
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";

import barAndLineChart from "../../components/charts/barAndLineChart.vue";

export default {
  components: {
    TabHeader,
    barAndLineChart,
  },
};
</script>

<style lang="scss" scoped>
.tab-content {
  &__body {
    padding: 60px 37px 60px 40px;
    margin-top: 25px;
    height: 620px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
  }
}
</style>
