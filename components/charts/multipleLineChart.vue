<template>
  <div>
    <div v-if="showTopLabels" class="chart-labels mb-4 mr-4">
      <div
        class="chart-labels__item"
        v-for="(item, i) in datasetsArray"
        :key="`label__${i}`"
      >
        <div :style="{ backgroundColor: item.borderColor }"></div>
        <div>{{ item.label }}</div>
      </div>
    </div>
    <LineChart
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :height="height"
      :css-classes="cssClasses"
      :styles="styles"
    />
  </div>
</template>

<script>
import { Line as LineChart } from "vue-chartjs/legacy";
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
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController
);

export default {
  name: "BarChart",
  components: { LineChart },

  props: {
    datasetsArray: {
      type: Array,
      default: () => [
        {
          data: [10, 29, 12, 23, 19, 21, 14],
          label: "銷售總數",
          type: "line",
          fill: "+1",
          backgroundColor: "transparent",
          borderColor: "#4981FD",
          pointBackgroundColor: "white",
          pointHoverBackgroundColor: "white",
          tension: 0.5,
          pointRadius: 5,
          pointHoverRadius: 7,
          datalabels: {
            display: false,
          },
        },
        {
          data: [30, 15, 20, 24, 25, 13, 14],
          label: "機構系統",
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
            display: false,
          },
        },
        {
          data: [25, 20, 27, 25, 15, 15, 10],
          label: "居家單機",
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
            display: false,
          },
        },
      ],
    },
    showTopLabels: {
      type: Boolean,
      default: true,
    },
    showYLabels: {
      type: Boolean,
      default: true,
    },
    displayLegend: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 310,
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
      type: Object,
      default: () => {},
    },
    // labels at the bottom of the chart
    bottomLabels: {
      type: Array,
      default: () => [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        linearGradientLine: true,
        plugins: {
          legend: {
            display: this.displayLegend,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              align: "start",
            },
          },
          y: {
            display: this.showYLabels,
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.bottomLabels,
        datasets: this.datasetsArray,
      };
    },
  },
};
</script>
