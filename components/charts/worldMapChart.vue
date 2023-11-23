<template>
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<script>
// import { Bubble } from 'vue-chartjs/legacy';
import {
  topojson,
  GeoFeature,
  ColorScale,
  ProjectionScale,
  BubbleMapController,
  SizeScale,
} from "chartjs-chart-geo";
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
  RadialLinearScale,
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
  GeoFeature,
  ColorScale,
  ProjectionScale,
  RadialLinearScale,
  BubbleMapController,
  SizeScale
);

export default {
  name: "BarChart",
  // components: { BubbleMapChart, },

  props: {
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
      type: Object,
      default: () => {},
    },
    chartData: {
      type: Array,
      default: () => [
        { latitude: 14.599512, longitude: 120.984222, value: 3 },
        { latitude: 25.105497, longitude: 121.597366, value: 10 },
      ],
    },
    // labels at the bottom of the chart
    countryLables: {
      type: Array,
      default: () => ["Manila", "Taipei"],
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
      },
      states: null,
    };
  },
  computed: {
    chartDataLabel() {
      return this.countryLables;
    },
    dataForMap() {
      return this.chartData;
    },
  },
  mounted() {
    fetch("https://unpkg.com/world-atlas/countries-50m.json")
      .then((r) => r.json())
      .then((data) => {
        const states = topojson.feature(data, data.objects.countries).features;
        const chart = new ChartJS(this.$refs.canvas.getContext("2d"), {
          type: "bubbleMap",
          data: {
            labels: this.chartDataLabel,
            datasets: [
              {
                outline: states,
                showOutline: true,
                backgroundColor: "steelblue",
                outlineBackgroundColor: "#f0f0f0",
                data: this.dataForMap,
                datalabels: {
                  display: false,
                },
              },
            ],
          },
          options: {
            // showOutline: true,
            // showGraticule: true,
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                align: "top",
                formatter: (v) => {
                  return v.description;
                },
              },
            },
            scales: {
              xy: {
                projection: "equalEarth",
              },
              r: {
                size: [1, 20],
                display: false,
              },
            },
          },
        });
      });
  },
};
</script>
