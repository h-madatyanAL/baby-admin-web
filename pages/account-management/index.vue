<template>
  <div class="page-box">
    <div class="d-flex justify-between">
      <v-tabs :show-arrows="true" v-model="activeTabIndex" class="tabs">
        <v-tab v-for="(tab, i) in tabs" :key="`tab_${i}`">{{ tab }}</v-tab>
      </v-tabs>
      <v-select
        v-if="activeTabIndex === 0"
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
      <v-btn
        class="primary-button"
        color="primary"
        height="48px"
        width="170px"
        @click="openAgencyDialog"
        v-else
      >
        新增機構
      </v-btn>
    </div>
    <div class="page-box__content mt-2">
      <KeepAlive>
        <Transition name="fade" mode="out-in">
          <Component :ref="activeComponentName" :is="activeComponentName" />
        </Transition>
      </KeepAlive>
    </div>
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
    <Dialog :full-height="true" :showDialog="showAgencyDialog" title="帳號資料編輯" width="1180">
      <template v-slot:body>
        <AddNewAgency @close-dialog="closeDialog" />
      </template>
    </Dialog>
  </div>
</template>

<script>
import SetDataInterval from "../../components/shared/setDataInterval.vue";
import AddNewAgency from "../../components/shared/addNewAgency.vue";
import Dialog from "../../components/shared/dialog.vue";

const allComponents = ["RegisteredAccounts", "InstitutionalAccount"];
const tabs = ["所有註冊帳號", "機構帳號"];

export default {
  components: {
    RegisteredAccounts: () =>
      import("@/components/account-management/registeredAccounts"),
    InstitutionalAccount: () =>
      import("@/components/account-management/institutionalAccount"),
    Dialog,
    SetDataInterval,
    AddNewAgency,
  },
  data() {
    return {
      allComponents,
      tabs,
      activeTabIndex: null,
      selectedFile: "下載圖表 (png)",
      fileItems: ["下載圖表 (png)", "匯出所有資料 (excel)"],
      showSetDataDialog: false,
      showAgencyDialog: false,
    };
  },
  computed: {
    activeComponentName() {
      return this.allComponents[this.activeTabIndex];
    },
  },
  methods: {
    closeDialog() {
      this.showSetDataDialog = false;
      this.showAgencyDialog = false;
    },
    setData() {
      this.showSetDataDialog = true;
    },
    openAgencyDialog() {
      this.showAgencyDialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.primary-button {
  ::v-deep {
    .v-btn__content {
      font-weight: 500 !important;
      font-size: 16px !important;
    }
  }
}
.custom-select-primary {
  max-width: 175px;
  ::v-deep {
    .v-input__slot {
      background: $primary !important;
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
  .v-card {
    height: 90vh !important;
  }
  th,
  td {
    color: $gray;
    font-size: 14px !important;
    font-weight: 500 !important;
    .v-btn__content {
      color: $gray;
      font-size: 14px !important;
      font-weight: 500 !important;
    }
  }
  .v-data-table {
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
  }
  .v-data-footer {
    padding: 0 40px;
  }
  .v-data-footer__icons-before,
  .v-data-footer__icons-after {
    i {
      color: $primary !important;
    }
  }
  .v-data-footer__select {
    i {
      color: $primary !important;
    }
  }
  thead {
    th,
    td {
      height: 70px !important;
      padding: 20px;
      border-bottom: thin solid rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
