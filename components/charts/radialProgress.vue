<template>
  <div class="progress-box">
    <div ref="chart"></div>
  </div>
</template>
<script>
import CircleProgress from "js-circle-progress";

export default {
  props: {
    // current value
    contentData: {
      type: Number,
      default: 40,
    },
    // maximum value to input
    contentDataMax: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    contentData(newVal) {
      this.chart.value = newVal;
    },
    contentDataMax(newVal) {
      this.chart.max = newVal;
    },
  },
  mounted() {
    this.chart = new CircleProgress(this.$refs.chart, {
      max: this.contentDataMax,
      value: this.contentData,
      textFormat: (value) => value,
    });
  },
};
</script>
<style lang="scss">
.progress-box {
  width: 120px !important;
  height: 120px !important;
  border: 6px solid #e7e5e5;
  border-radius: 50%;
  padding-top: 6px;
}
.circle-progress-value {
  stroke-width: 9px;
  stroke: hsl(165, 98%, 50%);
  stroke-dasharray: 5 2;
}
.blue-progress {
  .circle-progress-value {
    stroke-width: 9px;
    stroke: rgb(94,167,232);
    stroke-dasharray: 5 2;
  }
}
.circle-progress-circle {
  stroke-width: 9px;
  stroke: #f3f2f2;
  width: 120px !important;
  height: 120px !important;
}
.circle-progress-text {
  font-weight: bold;
  font-size: 20px;
  fill: hsl(0, 0%, 0%);
}
.circle-progress {
  width: 100%;
  height: 100%;
}
</style>
