<template>
  <div class="tab-content">
    <div class="tab-content__item">
      <div class="tab-content__title">不同歲數的呼吸狀況分析</div>
      <TabHeader class="mt-6" />
      <div class="tab-content__body mt-6">
        <barAndLineChart
          lineDataSetLabel="平均呼吸異常次數"
          barDataSetLabel="平均呼吸次數(每分鐘)"
          :showYAxis="true"
          :barThickness="21"
          :height="500"
        />
      </div>
    </div>
    <div class="tab-content__item">
      <div class="tab-content__title">不同時間的呼吸狀況統計</div>
      <TabHeader class="mt-6" />
      <div class="tab-content__body mt-6">
        <barAndLineChart
          lineDataSetLabel="平均呼吸異常次數"
          barDataSetLabel="平均呼吸次數(每分鐘)"
          :showYAxis="true"
          :barThickness="21"
          :height="500"
        />
      </div>
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
  &__item:last-child {
    margin-top: 84px;
  }
  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #656565;
  }
  &__body {
    padding: 60px 37px 60px 40px;
    height: 620px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
  }
}
</style>
