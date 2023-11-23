<template>
  <div class="tab-header">
    <div class="tab-header__col">
      <v-btn-toggle
        v-model="buttonGroup"
        tile
        color="primary"
        class="button-group"
        group
        background-color="white"
        mandatory
      >
        <v-btn value="年"> 年 </v-btn>
        <v-btn value="月"> 月 </v-btn>
        <v-btn value="週"> 週 </v-btn>
      </v-btn-toggle>

      <v-select
        hide-details
        v-model="selectedDate"
        class="custom-select-lg"
        height="45"
        solo
        :items="dateItems"
        dense
        outlined
        :menu-props="{
          nudgeBottom: '50px',
        }"
      >
      </v-select>
    </div>
    <div
      class="tab-header__col"
      :style="{ justifyContent: showSelect ? 'space-between' : 'flex-end' }"
    >
      <v-select
        v-if="showSelect"
        hide-details
        v-model="selectedType"
        class="custom-select"
        height="45"
        solo
        :items="typeItems"
        dense
        outlined
        :menu-props="{
          nudgeBottom: '50px',
        }"
      ></v-select>
      <v-select
        hide-details
        v-model="selectedFile"
        @change="setData"
        class="custom-select-primary"
        height="45"
        solo
        :items="fileItems"
        dense
        outlined
        :menu-props="{
          nudgeBottom: '50px',
        }"
      ></v-select>
      <Dialog
        :hideTitle="true"
        :showDialog="showSetDataDialog"
        title="選擇時間區間"
        width="700"
      >
        <template v-slot:body>
          <SetDataInterval @close-dialog="closeDialog" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
import SetDataInterval from "./setDataInterval.vue";
import Dialog from "./dialog.vue";
export default {
  components: {
    Dialog,
    SetDataInterval,
  },
  props: {
    showSelect: {
      type: Boolean,
      default: false,
    },
    dateItems: {
      type: Array,
      default: () => [
        "最近一週 (2022.10.09-2022.10.15)",
        "最近一週 (2022.10.09-2024.10.15)",
        "最近一週 (2022.10.09-2023.10.15)",
      ],
    },
    typeItems: {
      type: Array,
      default: () => ["全部銷售對象", "全部銷售", "全部銷售對"],
    },
    fileItems: {
      type: Array,
      default: () => ["下載圖表 (png)", "匯出所有資料 (excel)"],
    },
  },

  data() {
    return {
      selectedDate: "最近一週 (2022.10.09-2022.10.15)",
      selectedType: "全部銷售對象",
      selectedFile: "下載圖表 (png)",
      buttonGroup: "年",
      showSetDataDialog: false,
    };
  },
  methods: {
    closeDialog() {
      this.showSetDataDialog = false;
    },
    setData() {
      this.showSetDataDialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-header {
  display: flex;
  gap: 48px;
  padding: 25px 0;
  &__col {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
  }
  &__col:last-child {
    justify-content: space-between;
  }
  .button-group {
    min-width: 188px;
    background-color: $white;
    box-shadow: 0px 1px 2px #00000029;
    border-radius: 3px;
    button {
      margin: 0 !important;
      border: none !important;
      padding: 0 23px;
    }
    .v-btn--active {
      background: #4799e0 !important;
      color: white;
    }
  }
  .custom-select,
  .custom-select-primary {
    max-width: 190px;
  }
  .custom-select {
    ::v-deep {
      i {
        color: $primary;
      }
      .v-select__selection {
        color: $gray !important;
        font-size: 16px !important;
      }
    }
  }
  .custom-select-lg {
    max-width: 356px;
    ::v-deep {
      i {
        color: $primary;
      }
      .v-select__selection {
        color: $gray !important;
        font-size: 16px !important;
      }
    }
  }
  .custom-select-primary {
    ::v-deep {
      .v-input__slot {
        background: $primary;
      }
      fieldset {
        border: none !important;
      }
      i,
      .v-select__selection {
        color: $white !important;
      }
    }
  }
  ::v-deep {
    .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
      > .v-input__control
      > .v-input__slot {
      box-shadow: 0px 1px 4px #00000029;
    }
  }
}
@media screen and (max-width: 1200px) {
  .tab-header {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start !important;
  }
  .tab-header__col{
    justify-content: flex-start !important;
  }

}
@media screen and (max-width: 780px) {
  .tab-header__col{
    flex-direction: column;
    align-items: flex-start !important;
    justify-content: flex-start !important;
  }
}

</style>
