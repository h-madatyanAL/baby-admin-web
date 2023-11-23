<template>
  <div class="tab-content">
    <div class="tab-content__item">
      <TabHeader />
      <div style="height: 477px" class="tab-content__body mt-6">
        <pieChart
          :allData="firstChartData"
          :height="360"
          :width="360"
        />
      </div>
    </div>
    <div class="tab-content__item">
      <TabHeader class="mt-6" />
      <div class="tab-content__body mt-6">
        <pieChart
          :allData="secondChartData"
          :height="360"
          :width="360"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";

import pieChart from "../../components/charts/pieChart.vue";

export default {
  components: {
    TabHeader,
    pieChart,
  },
  data() {
    return {
      firstChartData: [
        { data: 15, color: "#E8A31A", label: "乾爽" },
        { data: 21, color: "#E9455C", label: "噓噓" },
        { data: 4, color: "#2AFEBE", label: "綜合" },
        { data: 60, color: "#286BD1", label: "便便" },
      ],
      secondChartData: [
        { data: 12, color: "#6D5208", label: "深咖啡(正常)" },
        { data: 23, color: "#C0740D", label: "淺咖啡(正常)" },
        { data: 6, color: "#98896C", label: "咖啡(正常)" },
        { data: 9, color: "#ECD668", label: "黃(正常)" },
        { data: 2, color: "#429156", label: "綠(不正常)" },
        { data: 40, color: "#FF651B", label: "紅(不正常)" },
        { data: 18, color: "#FFB300", label: "橘(不正常)" },
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  &__item:last-child {
    margin-top: 66px;
  }
  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #656565;
  }
  &__body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 562px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
    div {
      width: 80%;
    }
  }
    @media only screen and (max-width: 1024px) {
      &__body {
        height: 100% !important;
        padding: 20px;
    }
  }
}
</style>
