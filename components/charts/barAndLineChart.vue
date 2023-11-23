<template>
  <div>
    <div v-if="showTopLabels" class="chart-labels mb-10 mr-4">
      <div class="chart-labels__item">
        <div :style="{ backgroundColor: '#FF9200' }"></div>
        <div>平均呼吸異常次數</div>
      </div>
      <div class="chart-labels__item">
        <div :style="{ backgroundColor: '#4A8EF5' }"></div>
        <div>平均呼吸次數(每分鐘)</div>
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
      :barThickness="barThickness"
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
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ChartDataLabels);

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
  components: { Bar },

  props: {
    height: Number,
    showYAxis: {
      type: Boolean,
      default: false,
    },
    showTopLabels: {
      type: Boolean,
      default: true,
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
    lineDataSetLabel: {
      type: String,
      default: "Line Dataset",
    },
    barDataSetLabel: {
      type: String,
      default: "Bar Dataset",
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
    // array of integers for second data set
    lineDataSet: {
      type: Array,
      default: () => [7, 5, 7, 9, 7, 5, 2, 9, 2, 5, 7, 1, 4, 4, 6],
    },
    // array of integers for second data set
    barDataSet: {
      type: Array,
      default: () => [13, 10, 15, 18, 13, 10, 4, 12, 2, 1, 7, 14, 13, 12, 7],
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
    barThickness: {
      type: Number,
      default: 13,
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
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            display: this.showYAxis,
          },
        },
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.bottomLabels,
        datasets: [
          {
            type: "bar",
            label: this.barDataSetLabel,
            data: this.barDataSet,
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
            barThickness: this.barThickness,
            // maxBarThickness: 13,
            borderwidth: 1,
            borderSkipped: false,
            barPercentage: 1.0,
            order: 2,
            datalabels: {
              display: false,
            },
          },
          {
            type: "line",
            label: this.lineDataSetLabel,
            data: this.lineDataSet,
            fill: false,
            backgroundColor: "rgb(245, 158, 66)",
            borderColor: "rgb(245, 158, 66)",
            pointBackgroundColor: "white",
            pointRadius: 5,
            pointHoverRadius: 7,
            order: 1,
            datalabels: {
              color: "rgb(245, 158, 66)",
              align: 'top',
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
  },
};
</script>
