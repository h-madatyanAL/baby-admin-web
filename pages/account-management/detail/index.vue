<template>
  <div>
    <div class="d-flex main-wrapper">
      <div class="left-block pa-6 d-flex flex-column justify-space-between">
        <div>
          <div class="header d-flex">
            <div>
              <v-btn @click="$router.push('/account-management')" text
                ><img src="@/assets/images/icon_back.svg" alt=""
              /></v-btn>
            </div>
            <div class="d-flex align-center">
              <span class="header__side-bar-title">返回機構帳號列表</span>
            </div>
          </div>
          <div class="content d-flex flex-column mt-5">
            <div class="content__section">
              <div class="content__section__title">機構名稱</div>
              <div class="content__section__text">米奇妙妙屋</div>
            </div>
            <div class="content__section">
              <div class="content__section__title">地址</div>
              <div class="content__section__text">
                新北市汐止區大同路一段158 號
              </div>
            </div>
            <div class="content__section">
              <div class="content__section__title">連絡電話</div>
              <div class="content__section__text">024499909</div>
            </div>
            <div class="content__section">
              <div class="content__section__title">負責人</div>
              <div class="content__section__text">謝和村</div>
            </div>
            <div class="content__section">
              <div class="content__section__title">機構類型</div>
              <div class="content__section__text">月子中心</div>
            </div>
            <div class="content__section">
              <div class="content__section__title">Gateway MAC address</div>
              <div class="content__section__text">00-F1-EE-50-DC-92</div>
            </div>
          </div>
        </div>

        <div class="footer d-flex justify-center">
          <v-btn @click="editAgency" color="primary pt-3 pl-13 pr-15 pb-3"
            >編輯基本資料</v-btn
          >
        </div>
      </div>
      <div class="right-block">
        <div class="right-block__first-row">
          <div class="action_section d-flex justify-space-between">
            <div class="table-title d-flex align-center">已開通帳號 (19)</div>
            <v-btn color="primary">新增帳號</v-btn>
          </div>
          <div class="data_table">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
            >
              <!-- eslint-disable-next-line -->
              <template v-slot:item.function="{ item }">
                <v-btn @click="openAccountDetailEditDialog" text>{{
                  item.function
                }}</v-btn>
              </template>
            </v-data-table>
          </div>
        </div>
        <div class="right-block__second-row">
          <div class="action_section d-flex justify-space-between">
            <div class="table-title d-flex align-center">BCD裝置 (共40筆)</div>
            <v-btn color="primary">資料匯入(EXCEL)</v-btn>
          </div>
          <div class="data_table">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
            >
              <!-- eslint-disable-next-line -->
              <template v-slot:item.function="{ item }">
                <v-btn @click="openDeviceInfo" text>{{ item.function }}</v-btn>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </div>
    <Dialog :showDialog="showDeviceInfo" title="BCD裝置資訊編輯" width="600">
      <template v-slot:body>
        <EditDeviceInfo @close-dialog="closeDialog" />
      </template>
    </Dialog>
    <Dialog
      :showDialog="showDetailEditDialog"
      title="機構人員帳號編輯"
      width="605"
    >
      <template v-slot:body>
        <AccdetailDialog @close-dialog="closeDialog" />
      </template>
    </Dialog>
    <Dialog
      :showDialog="showEditAgencyDialog"
      title="機構基本資料編輯"
      width="600"
    >
      <template v-slot:body>
        <EditAgencyDetail @close-dialog="closeDialog" />
      </template>
    </Dialog>
  </div>
</template>

<script>
import EditAgencyDetail from "../../../components/shared/editAgencyDeatil.vue";
import EditDeviceInfo from "../../../components/shared/editDeviceInformation.vue";
import AccdetailDialog from "../../../components/shared/accountDetailEditDialog.vue";
import Dialog from "../../../components/shared/dialog.vue";
export default {
  name: "detail-page",
  components: {
    Dialog,
    EditDeviceInfo,
    EditAgencyDetail,
    AccdetailDialog,
  },
  data() {
    return {
      showDetailEditDialog: false,
      headers: [
        { text: "機構名稱", value: "name", align: "center", sortable: false },
        { text: "負責人", value: "principal", sortable: false },
        { text: "連絡電話", value: "phone", sortable: false },
        { text: "BCD裝置數量", value: "units", sortable: false },
        { text: "已開通帳號數量", value: "openedAccounts", sortable: false },
        { text: "功能", value: "function", sortable: false },
      ],
      desserts: [
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
      ],
      dialog: false,
      showDeviceInfo: false,
      showEditAgencyDialog: false,
    };
  },
  methods: {
    closeDialog() {
      this.showDeviceInfo = false;
      this.showEditAgencyDialog = false;
      this.showDetailEditDialog = false;
    },
    openDeviceInfo() {
      this.showDeviceInfo = true;
    },
    editAgency() {
      this.showEditAgencyDialog = true;
    },
    openAccountDetailEditDialog() {
      this.showDetailEditDialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  gap: 40px;
  margin: 40px 0px;
}
.left-block {
  background-color: white;
  width: 260px;
  color: #676767;
  box-shadow: 0px 2px 4px #00000029;
}
.right-block {
  width: 100%;
  gap: 40px;
  &__first-row {
    margin-bottom: 30px;
  }
}
.right-block .data_table {
  box-shadow: 0px 3px 6px #00000029;
}
.header {
  gap: 10px;
  font-size: 20px !important;
  font-weight: 600;
  &__side-bar-title {
    font-size: 16px;
  }
}
.action_section {
  width: 100%;
  margin-bottom: 30px;
}
.content {
  &__section {
    margin-bottom: 35px;
    font-size: 16px !important;
    &__text {
      line-height: 19px;
      font-size: 15px;
      color: #656565;
      font-family: sans-serif;
      &____title {
        font-size: 15px;
      }
    }
  }
}
.table-title {
  line-height: 19px;
  font-size: 16px;
  font-weight: 600;
  color: #656565;
  font-family: sans-serif;
}
.data_table {
  color: #656565;
  font-family: sans-serif;
}
::v-deep thead tr {
  height: 70px;
}
::v-deep {
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
}
</style>
