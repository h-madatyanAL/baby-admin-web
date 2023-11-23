<template>
  <div class="data-interval">
    <div class="data-interval__title">選擇時間區間</div>
    <div class="radio-button-group-section mb-6 d-flex justify-space-around">
      <v-btn-toggle
        v-model="exportDate"
        tile
        color="grey"
        group
        mandatory
        class="d-flex justify-space-around data-interval__btn-group mt-6"
      >
        <v-btn
          height="34px"
          v-for="(button, i) in buttonsData"
          :key="`button__${i}`"
          :value="button.value"
          class="data-interval__btn-group--btn"
        >
          {{ button.text }}
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="data-interval__inputs-box d-flex align-center">
      <v-text-field
        class="data-interval__input"
        outlined
        placeholder="N/A from"
        hide-details
        v-model="startDate"
      >
      </v-text-field>
      <span>~</span>
      <v-text-field
        v-model="endDate"
        class="data-interval__input"
        outlined
        hide-details
      >
      </v-text-field>
    </div>
    <div class="action-buttons">
      <v-btn color="gray" @click="$emit('close-dialog')" class="cencel"
        >取消</v-btn
      >
      <v-btn color="primary" class="save">確定新增</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      endDate: "2022.09.15",
      startDate: "N / A",
      exportDate: "一週內",
      buttonsData: [
        { text: "一週內", value: "week" },
        { text: "兩週內", value: "twoWeek" },
        { text: "一個月內", value: "month" },
        { text: "三個月內", value: "threeMonths" },
        { text: "無限制", value: "unlimited" },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.data-interval {
  &__title {
    color: $gray-light;
    font-size: 14px;
    font-weight: 600;
  }
  &__btn-group {
    width: 100%;
    &--btn {
      box-shadow: 0px 2px 4px #00000029 !important;
      border: 1px solid #dcdcdc !important;
      border-radius: 3px;
      color: $gray-dark !important;
      font-size: 14px;
    }
    .v-btn--active {
      color: $primary !important;
      border: 1px solid $primary !important;
    }
  }
  &__inputs-box {
    margin-bottom: 45px;
    gap: 22px;
    span {
      font-size: 25px;
      font-weight: 700;
      color: $gray-dark;
    }
  }
  &__input {
    box-shadow: 0px 1px 2px #00000029;
    ::v-deep {
      input {
        color: $gray-dark !important;
        font-size: 14px !important;
      }
    }
  }
}

.action-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
  .cencel {
    color: #fff;
    width: 80px;
    box-shadow: 0px 3px 3px #00000029 !important;
  }
  .save {
    box-shadow: 0px 3px 3px #00000029 !important;
    width: 130px;
  }
}
</style>