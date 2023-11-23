<template>
  <div class="chart-container">
    <Pie
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
    <div class="chart-container__legends-table">
      <div class="chart-container__legends-table--header">
        <div></div>
        <div>版本</div>
        <div>版本</div>
      </div>
      <div class="chart-container__legends-table--content">
        <div
          class="chart-container__legends-table--content__item"
          v-for="(legend, i) in allData"
          :key="`legend__${i}`"
        >
          <div :style="{ background: legend.color }"></div>
          <div>{{ legend.label }}</div>
          <div>{{ legend.data }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pie } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  LineController,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  TimeScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  Filler,
  TimeScale
);

export default {
  name: "BarChart",
  components: { Pie },
  props: {
    height: {
      type: Number,
      default: 320,
    },
    width: {
      type: Number,
      default: 320,
    },
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => {
        return [];
      },
    },
    allData: {
      type: Array,
      default: () => [
        { data: 13, color: "#D4D4D4", label: "wifi版" },
        { data: 24, color: "#0B6FC9", label: "藍芽連線版" },
        { data: 63, color: "#1DCD98", label: "藍芽廣播版" },
      ],
    },
    // display legend
    displayLegend: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: this.displayLegend,
            align: "end",
            position: "right",
            labels: {
              boxWidth: 20,
              boxHeight: 20,
            },
          },
        },
        scale: {
          ticks: {
            display: false,
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.allData.map((item) => (item = item.label)),
        datasets: [
          {
            label: this.allData.map((item) => (item = item.label)),
            data: this.allData.map((item) => (item = item.data)),
            backgroundColor: this.allData.map((item) => (item = item.color)),
            datalabels: {
              display: false,
            },
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  &__legends-table {
    width: 100%;
    max-width: 570px;
    &--header {
      padding: 0 30px;
      height: 40px;
      display: flex;
      align-items: center;
      gap: 30px;
      background-color: $primary-light;
      box-shadow: 0px 2px 4px #00000029;
      border-radius: 4px;
      div {
        width: 100%;
        font-size: 16px;
        color: $white;
      }
      div:first-child {
        min-width: 15px;
        width: 15px;
      }
    }
    &--content {
      margin-top: 16px;
      background: $white;
      box-shadow: 0px 2px 4px #00000029;
      border: 1px solid #e2dcdc;
      border-radius: 4px;
      padding: 0 30px;
      max-height: 365px;
      overflow-y: auto;
      &__item {
        height: 73px;
        border-bottom: 1px solid #e2dcdc;
        display: flex;
        align-items: center;
        gap: 30px;
        div {
          width: 100%;
          font-size: 16px;
          color: $gray;
        }
        div:first-child {
          min-width: 15px;
          width: 15px;
          height: 15px;
          border-radius: 3px;
        }
      }
      &__item:last-child {
        border: none;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    &__legends-table {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 1024px) {
  .chart-container {
    flex-direction: column;
  }
}
</style>
