<template>
  <div>
    <div class="chart-labels mb-10 mr-4">
      <div class="chart-labels__item">
        <div :style="{ backgroundColor: '#1DCD98' }"></div>
        <div>平均發生趴睡次數(每日)</div>
      </div>
    </div>
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :height="height"
    />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
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
  LineController,
  Filler,
  TimeScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    height: Number,
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    // set the width of the chart
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
    // array of integers for first data set
    firstDataSet: {
      type: Array,
      default: () => [2, 5, 5, 10, 10, 4, 5, 12, 14, 20, 10, 6, 12, 6, 8],
    },
    // label for first data set that will appear on chart's Legend section
    datasetLabel: {
      type: String,
      default: "Data Set Label",
    },
    // labels at the bottom of the chart
    bottomLabels: {
      type: Array,
      default: () => [
        "0個月",
        "1個月",
        "2個月",
        "3個月",
        "4個月",
        "5個月",
        "6個月",
        "7個月",
        "8個月",
        "9個月",
        "10個月",
        "11個月",
        "12個月",
        "1年1個月",
        "1年2個月",
      ],
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            align: "end",
            labels: {
              boxWidth: 20,
              boxHeight: 20,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: false,
            display: true,
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return `${value}h`;
              },
              autoSkip: true,
              maxTicksLimit: 24,
              stepSize: 6,
            },
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.bottomLabels,
        datasets: [
          {
            label: this.datasetLabel,
            data: this.firstDataSet,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(
                0,
                0,
                0,
                this.height
              );

              gradient.addColorStop(0, "#2AFEBE");
              gradient.addColorStop(1, "#8D9492");
              return gradient;
            },
            borderRadius: {
              bottomLeft: 11,
              bottomRight: 11,
              topLeft: 11,
              topRight: 11,
            },
            barThickness: 21,
            borderwidth: 2,
            borderSkipped: false,
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
