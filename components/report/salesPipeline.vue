<template>
  <div class="tab-content">
    <div class="tab-content__item">
      <div class="tab-content__title">銷售管道數量統計</div>
      <TabHeader :show-select="true" class="mt-6" />
      <div class="tab-content__body-sm mt-6">
        <pieChart :allData="chartData" :height="360" :width="360" />
      </div>
    </div>
    <div class="tab-content__item">
      <div class="tab-content__title">銷售管道數量統計</div>
      <TabHeader :show-select="true" class="mt-6" />
      <div class="tab-content__body mt-6">
        <multilineChart
          :datasetsArray="lineChartDatasets"
          :height="520"
          :bottomLabels="[
            '10.10 (一)',
            '10.11 (二)',
            '10.13 (三)',
            '10.14 (四)',
            '10.15 (五)',
            '10.16 (六)',
            '10.17 (日)',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";

import multilineChart from "../charts/multipleLineChart.vue";
import pieChart from "../charts/pieChart.vue";
export default {
  components: {
    TabHeader,
    multilineChart,
    pieChart,
  },
  data() {
    return {
      chartData: [
        { data: 12, color: "#D4D4D4", label: "官網" },
        { data: 20, color: "#2DFFC0", label: "購物網站(pchome)" },
        { data: 68, color: "#0B6FC9", label: "購物網站(momo)" },
      ],
      lineChartDatasets: [
        {
          data: [30, 15, 20, 24, 25, 13, 14],
          label: "購物網頁(momo)",
          type: "line",
          fill: "+1",
          backgroundColor: "transparent",
          borderColor: "#FF9200",
          pointBackgroundColor: "white",
          pointHoverBackgroundColor: "white",
          tension: 0.5,
          pointRadius: 5,
          pointHoverRadius: 7,
          datalabels: {
            color: "#FF9200",
            align: "top",
            labels: {
              title: {
                font: {
                  weight: "bold",
                  size: 16,
                },
              },
            },
          },
        },
        {
          data: [25, 20, 27, 25, 15, 15, 10],
          label: "官網",
          type: "line",
          fill: "+1",
          backgroundColor: "transparent",
          borderColor: "#2AFEBE",
          pointBackgroundColor: "white",
          pointHoverBackgroundColor: "white",
          tension: 0.5,
          pointRadius: 5,
          pointHoverRadius: 7,
          datalabels: {
            color: "#2AFEBE",
            align: "top",
            labels: {
              title: {
                font: {
                  weight: "bold",
                  size: 16,
                },
              },
            },
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-content {
  &__item:last-child {
    margin-top: 52px;
  }
  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #656565;
  }
  &__body {
    height: 620px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 40px 40px 60px 40px;
    }
  }
  &__body-sm {
    height: 394px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
    div {
      width: 90%;
    }
  }
  @media only screen and (max-width: 1024px) {
    &__body-sm {
      height: 100% !important;
      padding: 20px;
    }
  }
}
</style>
