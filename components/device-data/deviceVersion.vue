<template>
  <div class="tab-content">
    <div class="tab-content__title">裝置連線 / 離線累積時數分析</div>
    <TabHeader class="mt-6" />
    <div class="tab-content__body">
      <pieChart :allData="chartData" :displayLegend="false" :height="296" :width="296" />
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";

import pieChart from "../charts/pieChart.vue";

export default {
  components: {
    TabHeader,
    pieChart,
  },
  data() {
    return {
      chartData: [
        { data: 13, color: "#D4D4D4", label: "wifi版" },
        { data: 24, color: "#1DCD98", label: "藍芽連線版" },
        { data: 63, color: "#0B6FC9", label: "藍芽廣播版" },
      ],
    };
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    height: 525px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
    div {
      width: 80%;
    }
  }
  @media only screen and (max-width: 1024px) {
    &__body{
      height: 100% !important;
      padding: 20px;
    }
  }
}
</style>
