<template>
  <div class="settings pt-6 pb-9">
    <div class="d-flex justify-space-between align-center settings__header">
      <div class="settings__header__title">管理者帳號列表</div>
      <v-btn @click="addNewAccount" width="142px" height="46px" color="primary">
        新增預約
      </v-btn>
    </div>
    <div class="settings__table-content pt-4">
      <table class="settings__table__header">
        <thead>
          <tr>
            <td v-for="(head, i) in headers" :key="`head_${i}`">
              {{ head.text.toUpperCase() }}
            </td>
          </tr>
        </thead>
      </table>
      <v-data-table
        :headers="headers"
        :items="tableData"
        class="settings__table__body"
        :hide-default-footer="true"
        :hide-default-header="true"
        :mobile-breakpoint="0"
      >
        <!-- eslint-disable-next-line -->
        <template v-slot:item.role="{ item }">
          <v-btn text>編輯</v-btn>
          <v-btn text>刪除帳號</v-btn>
        </template>
      </v-data-table>
    </div>
    <div class="settings__bottom-section">
      <div class="settings__header__title">管理者帳號列表</div>
      <div class="settings__bottom-section__content d-flex mt-4">
        <div class="settings__bottom-section__content-left">
          <div class="settings__bottom-section__content-left__title">
            一般權限所有職位 (2)
          </div>
          <div class="settings__bottom-section__content-left__content">
            <div
              v-for="(tab, i) in tabs"
              :key="`tab_${i}`"
              class="tab"
              :class="{ 'active-tab': activeTab === tab.label }"
              @click="changeActiveTab(tab)"
            >
              {{ tab.label }} {{ `(${tab.count})` }}
            </div>
          </div>
          <div class="settings__bottom-section__content-left__actions">
            <v-btn
              @click="addNewPosition"
              width="142px"
              height="46px"
              color="primary"
              >新增預約</v-btn
            >
          </div>
        </div>
        <div class="settings__bottom-section__content-right">
          <div class="checkbox-container">
            <div class="settings__bottom-section__content-right__title">
              可選取功能/模組
            </div>
            <div
              class="settings__bottom-section__content-right__items-box mt-4"
            >
              <div class="select-all px-6 py-3">
                <v-checkbox
                  v-model="selectedAll"
                  color="#0052D9"
                  dense
                  :ripple="false"
                  class="custom-checkbox"
                  :label="`全部選取 (${checkboxList.length}項)`"
                  hide-details
                >
                </v-checkbox>
              </div>
              <div class="checkbox-list">
                <div
                  v-for="(checkbox, i) in checkboxList"
                  :key="`checkbox_${i}`"
                  class="checkbox-list__item"
                >
                  <v-checkbox
                    color="#0052D9"
                    dense
                    v-model="checkedList"
                    :ripple="false"
                    class="custom-checkbox"
                    :label="checkbox.label"
                    :value="checkbox.value"
                    hide-details
                  >
                  </v-checkbox>
                </div>
              </div>
            </div>
          </div>
          <div class="actions-box">
            <v-btn width="24px" height="24px" color="primary">
              <v-icon color="white">mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn disabled width="24px" height="24px" color="primary">
              <v-icon color="white">mdi-chevron-left</v-icon>
            </v-btn>
          </div>
          <div class="selected-list-container">
            <div class="settings__bottom-section__content-right__title">
              可選取功能/模組
            </div>
            <div
              class="settings__bottom-section__content-right__items-box mt-4"
            >
              <div class="select-all px-6 py-3">
                <v-checkbox
                  color="#0052D9"
                  dense
                  :ripple="false"
                  class="custom-checkbox"
                  :label="`全部選取 (${checkedList.length}項)`"
                  hide-details
                >
                </v-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dialog
      :showDialog="showAddNewAccountDialog"
      title="新增管理者帳號"
      width="600"
    >
      <template v-slot:body>
        <AddNewAccount @close-dialog="closeDialog"></AddNewAccount>
      </template>
    </Dialog>
    <Dialog :showDialog="showAddNewPositionDialog" title="新增職位" width="510">
      <template v-slot:body>
        <AddNewPosition @close-dialog="closeDialog"></AddNewPosition>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "../../../components/shared/dialog.vue";
import AddNewAccount from "../../../components/shared/addNewAccount.vue";
import AddNewPosition from "../../../components/shared/addNewPosition.vue";
export default {
  name: "home-settings",
  components: {
    Dialog,
    AddNewAccount,
    AddNewPosition,
  },
  data() {
    return {
      showAddNewAccountDialog: false,
      showAddNewPositionDialog: false,
      activeTab: "",
      checkedList: [],
      checkboxList: [
        { label: "[模組] 裝置使用資料", value: "usage-data" },
        { label: "[模組] 寶寶數據收集", value: "baby-data" },
        { label: "[模組] 註冊帳號管理", value: "account-management" },
        { label: "[功能] 新增/編輯機構", value: "add/edit-organization" },
        {
          label: "[功能] 編輯已註冊機構",
          value: "edit-registred-organization",
        },
      ],
      tabs: [
        { label: "RD", count: 2 },
        { label: "Marteting", count: 2 },
      ],
      headers: [
        { text: "權限", value: "name", sortable: false },
        { text: "職位", value: "position", sortable: false },
        { text: "信箱", value: "email", sortable: false },
        { text: "帳號註冊時間", value: "date", sortable: false },
        { text: "功能", value: "role", sortable: false },
      ],
      tableData: [
        {
          name: "管理員",
          position: "RD",
          email: "appar.com.tw@gmail.com",
          date: "2022.10.13",
          role: "",
        },
        {
          name: "一般",
          position: "Marketing",
          email: "appar.com.tw@gmail.com",
          date: "2022.10.13",
          role: "",
        },
        {
          name: "一般",
          position: "Marketing",
          email: "appar.com.tw@gmail.com",
          date: "2022.10.13",
          role: "",
        },
        {
          name: "一般",
          position: "Marketing",
          email: "appar.com.tw@gmail.com",
          date: "2022.10.13",
          role: "",
        },
        {
          name: "一般",
          position: "Marketing",
          email: "appar.com.tw@gmail.com",
          date: "2022.10.13",
          role: "",
        },
      ],
    };
  },
  methods: {
    changeActiveTab(tab) {
      this.activeTab = tab.label;
    },
    closeDialog() {
      this.showAddNewAccountDialog = false;
      this.showAddNewPositionDialog = false;
    },
    addNewAccount() {
      this.showAddNewAccountDialog = true;
    },
    addNewPosition() {
      this.showAddNewPositionDialog = true;
    },
  },
  computed: {
    selectedAll: {
      set(val) {
        this.checkedList = [];
        if (val) {
          this.checkboxList.forEach((element) => {
            this.checkedList.push(element.value);
          });
        }
      },
      get() {
        return this.checkedList.length === this.checkboxList.length;
      },
    },
  },
  mounted() {
    this.activeTab = this.tabs[0].label;
  },
};
</script>

<style scoped lang="scss">
.settings {
  &__header {
    &__title {
      font-weight: 700;
      color: $gray;
      font-size: 16px;
    }
  }
  &__table {
    &__body {
      border: 1px solid $primary;
      box-shadow: 0px 3px 6px #00000029 !important;
      ::v-deep {
        td,
        th {
          height: 72px !important;
          font-size: 18px !important;
          line-height: 22px;
          font-weight: 500;
          color: $gray-light;
          border-bottom: 1px solid $border-color !important;
        }
        td:first-child {
          width: 15%;
        }
        td:nth-child(2) {
          width: 15%;
        }
        td:nth-child(3) {
          width: 35%;
        }
        td:nth-child(4) {
          width: 15%;
        }
      }
    }
    &__header {
      width: 100%;
      box-shadow: 0px 2px 4px #00000029;
      background: $primary-light;
      margin-bottom: 27px;
      border-radius: 4px;
      ::v-deep {
        td,
        th {
          padding: 0 16px;
          height: 62px;
          font-weight: 600;
          font-size: 16px;
          color: $white;
        }
        td:first-child {
          width: 15%;
        }
        td:nth-child(2) {
          width: 15%;
        }
        td:nth-child(3) {
          width: 35%;
        }
        td:nth-child(4) {
          width: 15%;
        }
      }
    }
  }
  &__bottom-section {
    margin-top: 52px;
    &__content {
      box-shadow: 0px 2px 4px #00000029;
      border: 1px solid $primary;
      height: 340px;
    }
    &__content-left {
      width: 25%;
      border-right: 1px solid $border-color;
      &__title {
        padding: 20px;
        color: $gray;
        font-size: 16px;
        font-weight: 500;
      }
      &__content {
        height: 207px;
        overflow-y: auto;
      }
      &__actions {
        border-top: solid 1px $border-color;
        display: flex;
        justify-content: center;
        padding-top: 10px;
      }
    }
    &__content-right {
      padding: 23px 32px 18px 32px;
      display: flex;
      gap: 30px;
      .checkbox-container {
        height: 100%;
        width: calc(100% - 32px);
      }
      .selected-list-container {
        height: 100%;
        width: calc(100% - 32px);
      }
      .actions-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        .v-btn {
          min-width: unset !important;
          padding: 0 !important;
          border: 1px solid $border-light;
          border-radius: 3px !important;
        }
      }
      &__title {
        color: $gray;
        font-size: 16px;
        font-weight: 700;
      }
      &__items-box {
        height: calc(100% - 40px);
        border: 1px solid $border-light;
        border-radius: 3px;
      }
      .select-all {
        border-bottom: 1px solid $border-light;
      }
      .checkbox-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 14px 20px 14px 15px;
        overflow-y: auto;
        height: calc(100% - 53px);
        &__item {
          transition: all 300ms;
          padding: 4px 8px;
          border-radius: 3px;
        }
        &__item:hover {
          background: #78afe093;
        }
      }
    }
    &__content-right {
      width: 75%;
    }
  }
}
.settings__table__header {
  min-width: 900px !important;
  overflow-y: auto;
}
.settings__table__body {
  min-width: 900px !important;
  overflow-y: auto;
}
.settings__header__title {
  white-space: nowrap;
}
@media screen and (max-width: 1200px) {
  .settings__table-content {
    overflow-y: auto;
  }
}
@media screen and (max-width: 800px) {
  .settings__bottom-section__content {
    flex-direction: column;
    border: none;
    box-shadow: none;
  }
  .settings__bottom-section__content
    div[class^="settings__bottom-section__content-"] {
    flex-direction: column;
    box-shadow: 0px 2px 4px #00000029;
    border-bottom: 1px solid #dcdcdc;
    width: 100%;
    align-items: center;
  }
  .settings__bottom-section__content-left {
    border: 1px solid #5ea7e8 !important;
  }
  .settings__bottom-section__content-right {
    border: 1px solid #5ea7e8;
    margin-top: 15px;
  }
  .settings__bottom-section__content-left__actions {
    border-top: none;
    padding: 10px 0px;
  }
  .actions-box {
    flex-direction: row !important;
  }
  .actions-box button {
    transform: rotate(90deg);
  }
}
@media screen and (max-width: 530px) {
  .settings__header {
    flex-direction: column;
    gap: 5px;
  }
}
.settings__bottom-section__content-left__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.checkbox-container .settings__bottom-section__content-right__title {
  border: none !important;
  box-shadow: none !important;
}
.tab {
  padding: 18px;
  font-size: 14px;
  font-weight: 500;
  color: $gray;
  user-select: none;
  cursor: pointer;
  transition: all 300ms;
}
.active-tab {
  background: #78afe094;
}
.custom-checkbox {
  margin: 0 !important;
  padding: 0 !important;
  ::v-deep {
    label {
      font-size: 14px;
      color: $gray;
    }
  }
}
</style>
