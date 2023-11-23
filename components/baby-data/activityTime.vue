<template>
  <div class="tab-content">
    <TabHeader />
    <div class="tab-content__body">
      <singleBarChart datasetLabel="平均清醒時長(每日)" :height="490" />
    </div>
  </div>
</template>

<script>
import TabHeader from "../../components/shared/tabHeader.vue";
import singleBarChart from "../../components/charts/singleBarChart.vue";

export default {
  components: {
    TabHeader,
    singleBarChart
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  &__body {
    padding: 70px 37px 62px 40px;
    margin-top: 25px;
    height: 620px;
    background-color: $white;
    box-shadow: 0px 6px 20px #c1cfd924;
    border-radius: 12px;
  }
}
</style>