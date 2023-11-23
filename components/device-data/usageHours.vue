<template>
  <div class="tab-content">
    <div class="tab-content__title">裝置連線 / 離線累積時數分析</div>
    <TabHeader class="mt-6" />
    <div class="tab-content__body mt-6">
      <stackbleChart
        firstDatasetLabel="成功連線總時長"
        secondDataSetLabel="裝置離線總時長"
        :height="500"
        :barsWidth="28"
        :borderRadius="13"
        :showLines="{
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            grid: {
              display: true,
            },
          },
        }"
      />
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";
import stackbleChart from "../../components/charts/stackbleChart.vue";

export default {
  components: {
    TabHeader,
    stackbleChart,
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
    padding: 60px 35px;
    height: 620px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
  }
}
</style>
