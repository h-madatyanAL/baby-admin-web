<template>
  <div>
    <div v-if="showTopLabels" class="chart-labels mb-10 mr-4">
      <div class="chart-labels__item">
        <div :style="{ backgroundColor: '#4A8EF5' }"></div>
        <div>成功連線總時長</div>
      </div>
      <div class="chart-labels__item">
        <div :style="{ backgroundColor: '#BFBFBFCE' }"></div>
        <div>裝置離線總時長</div>
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
    showTopLabels: {
      type: Boolean,
      default: true,
    },
    showLines: {
      type: Object,
      default() {
        return {
          x: {
            display: false,
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            display: false,
          },
        };
      },
    },
    barsWidth: {
      type: Number,
      default: 21,
    },
    borderRadius: {
      type: Number,
      default: 11,
    },
    displayLegend: {
      type: Boolean,
      default: false,
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
    // array of integers for first data set
    firstDataSet: {
      type: Array,
      default: () => [10, 5, 12, 10, 11, 10, 21, 10, 8],
    },
    // label for first data set that will appear on chart's Legend section
    firstDatasetLabel: {
      type: String,
      default: "First Data Set Label",
    },
    // array of integers for second data set
    secondDataSet: {
      type: Array,
      default: () => [24, 24, 24, 24, 24, 24, 24, 24, 24],
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
        "10.10 (一)",
        "10.11 (二)",
        "10.13 (三)",
        "10.14 (四)",
        "10.15 (五)",
        "10.16 (六)",
        "10.17 (日)",
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
            display: this.displayLegend,
            align: "end",
            labels: {
              boxWidth: 20,
              boxHeight: 20,
            },
          },
        },
        scales: {
          x: {
            display: this.showLines.x.display,
            grid: {
              display: this.showLines.x.grid.display,
            },
            stacked: true,
          },
          y: {
            ticks: {
              callback: function (value, index, ticks) {
                return `${value}h`;
              },
              autoSkip: true,
              maxTicksLimit: 24,
              stepSize: 6,
            },
            stacked: false,
            grid: {
              display: this.showLines.y.grid.display,
            },
            display: this.showLines.y.display,
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
              gradient.addColorStop(0, "#4A8EF5");
              gradient.addColorStop(1, "#666666A3");
              return gradient;
            },
            borderRadius: {
              bottomLeft: this.borderRadius,
              bottomRight: this.borderRadius,
              topLeft: this.borderRadius,
              topRight: this.borderRadius,
            },
            barThickness: this.barsWidth,
            borderwidth: 2,
            borderSkipped: false,
            datalabels: {
              display: false,
            },
          },
          {
            label: this.secondDataSetLabel,
            data: this.secondDataSet,
            backgroundColor: "rgb(208, 210, 214)",
            borderRadius: this.borderRadius,
            barThickness: this.barsWidth,
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
