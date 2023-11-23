<template>
  <div class="tab-content">
    <div class="tab-content__item">
      <div class="tab-content__title">所有銷售對象數量統計</div>
      <TabHeader :show-select="true" class="mt-6" />
      <div class="tab-content__body-md mt-6">
        <pieChart :all-data="firstChartData" :height="360" :width="360" />
      </div>
    </div>
    <div class="tab-content__item">
      <div class="tab-content__title">銷售對象性別統計</div>
      <TabHeader :show-select="true" class="mt-6" />
      <div class="tab-content__body-sm mt-6">
        <pieChart :all-data="secondChartData" :height="360" :width="360" />
      </div>
    </div>
    <div class="tab-content__item">
      <div class="tab-content__title">銷售對象年齡統計</div>
      <TabHeader :show-select="true" class="mt-6" />
      <div class="tab-content__body mt-6">
        <pieChart
          :all-data="thirdChartData"
          :height="360"
          :width="360"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TabHeader from "../shared/tabHeader.vue";

import pieChart from "../charts/pieChart.vue";

export default {
  components: {
    TabHeader,
    pieChart,
  },
  data() {
    return {
      firstChartData: [
        { data: 13, color: "#E8A31A", label: "月子中心" },
        { data: 21, color: "#E9455C", label: "托嬰中心" },
        { data: 6, color: "#2AFEBE", label: "特殊日照中心" },
        { data: 60, color: "#286BD1", label: "個人家庭" },
      ],
      secondChartData: [
        { data: 25, color: "#1DCD98", label: "男性" },
        { data: 75, color: "#0B6FC9", label: "女性" },
      ],
      thirdChartData: [
        { data: 12, color: "#0A4764", label: "20歲-25歲" },
        { data: 25, color: "#0B6FC9", label: "20歲-25歲" },
        { data: 6, color: "#ECC5C1", label: "35歲-40歲" },
        { data: 7, color: "#6C9BC4", label: "40歲-45歲" },
        { data: 2, color: "#429156", label: "45歲以上" },
        { data: 35, color: "#1DCD98", label: "25歲-30歲" },
        { data: 13, color: "#E8A31A", label: "30歲-35歲" },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-content {
  &__item:first-child {
    margin-top: 0 !important;
  }
  &__item {
    margin-top: 72px;
  }
  &__item:last-child {
    margin-top: 60px !important;
  }
  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #656565;
  }
  &__body,
  &__body-md,
  &__body-sm {
    display: flex;
    align-items: center;
    height: 562px;
    justify-content: center;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
    div {
      width: 80%;
    }
  }
  @media only screen and (max-width: 1024px) {
    &__body,
    &__body-md,
    &__body-sm{
      height: 100% !important;
      padding: 20px;
    }
  }
  &__body-md {
    height: 477px;
  }
  &__body-sm {
    height: 365px;
  }
}
</style>
