<template>
  <div class="page-box">
    <v-tabs :show-arrows="true" v-model="activeTabIndex" class="tabs">
      <v-tab v-for="(tab, i) in tabs" :key="`tab_${i}`">{{ tab }}</v-tab>
    </v-tabs>
    <div class="page-box__content">
      <KeepAlive>
        <Transition name="fade" mode="out-in">
          <Component :ref="activeComponentName" :is="activeComponentName" />
        </Transition>
      </KeepAlive>
    </div>
  </div>
</template>

<script>
const allComponents = [
  "BreathingCondition",
  "SleepingReminder",
  "ActivityTime",
  "SleepLog",
  "HealthRecord",
  "DiaperRecord",
];
const tabs = [
  "呼吸狀況",
  "趴睡提醒",
  "活動時間",
  "睡眠紀錄",
  "健康紀錄",
  "尿布狀態紀錄",
];

export default {
  components: {
    BreathingCondition: () =>
      import("@/components/baby-data/breathingCondition"),
    SleepingReminder: () => import("@/components/baby-data/sleepingReminder"),
    ActivityTime: () => import("@/components/baby-data/activityTime"),
    SleepLog: () => import("@/components/baby-data/sleepLog"),
    HealthRecord: () => import("@/components/baby-data/healthRecord"),
    DiaperRecord: () => import("@/components/baby-data/diaperRecord"),
  },
  data() {
    return {
      allComponents,
      tabs,
      activeTabIndex: null,
    };
  },
  computed: {
    activeComponentName() {
      return this.allComponents[this.activeTabIndex];
    },
  },
};
</script>

<style lang="scss" scoped></style>
