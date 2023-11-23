<template>
  <div>
    <div v-if="showTopLabels" class="chart-labels mb-10 mr-4">
      <div class="chart-labels__item">
        <div :style="{ backgroundColor: '#4A8EF5' }"></div>
        <div>居家單機</div>
      </div>
      <div class="chart-labels__item">
        <div :style="{ backgroundColor: '#1DCD98' }"></div>
        <div>機構系統</div>
      </div>
    </div>
    <Bar
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
    showTopLabels: {
      type: Boolean,
      default: true,
    },
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    // set the width of the chart
    width: {
      type: Number,
      default: 800,
    },
    // set the height of the chart
    height: {
      type: Number,
      default: 400,
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
    // array of integers for first data set
    firstDataSet: {
      type: Array,
      default: () => [10, 50, 50, 10, 10, 40, 50, 30, 40, 20, 10, 20, 15],
    },
    // label for first data set that will appear on chart's Legend section
    firstDatasetLabel: {
      type: String,
      default: "First Data Set Label",
    },
    // array of integers for second data set
    secondDataSet: {
      type: Array,
      default: () => [60, 50, 40, 60, 60, 50, 60, 60, 60, 50, 60, 40, 30],
    },
    // label for second data set that will appear on chart's Legend section
    secondDataSetLabel: {
      type: String,
      default: "Second Data Set Label",
    },
    // labels at the bottom of the chart
    bottomLabels: {
      type: Array,
      default: () => [
        "0am",
        "1am",
        "2am",
        "3am",
        "4am",
        "5am",
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
      ],
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: {
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            display: true,
            grid: {
              display: false,
            },
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
            align: "end",
            labels: {
              boxWidth: 20,
              boxHeight: 20,
            },
          },
          layout: {
            padding: 100,
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
            label: this.firstDatasetLabel,
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
            maxBarThickness: 21,
            borderwidth: 21,
            borderSkipped: false,
            barPercentage: 1.0,
            datalabels: {
              display: false,
            },
          },
          {
            label: this.secondDataSetLabel,
            data: this.secondDataSet,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(
                0,
                0,
                0,
                this.height
              );
              gradient.addColorStop(0, "#4A8EF5");
              gradient.addColorStop(1, "#666666A3");
              return gradient;
            },
            borderRadius: 11,
            maxBarThickness: 21,
            borderwidth: 1,
            borderSkipped: false,
            barPercentage: 1.0,
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
