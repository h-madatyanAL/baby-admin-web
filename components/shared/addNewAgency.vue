<template>
  <div class="dialog-container">
    <v-form class="dialog-container__form" v-model="isValid">
      <div class="dialog-container__left-side">
        <div class="custom-label">機構類型</div>
        <v-radio-group v-model="payload.organizationType" row>
          <v-radio
            v-for="(type, i) in organizationTypes"
            :key="`type__${i}`"
            :ripple="false"
            :label="type.label"
            :value="type.value"
          ></v-radio>
        </v-radio-group>

        <v-dialog v-model="addCheckboxDialog" width="550">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="primary-button"
              width="175px"
              height="46px"
              color="primary"
              v-bind="attrs"
              v-on="on"
              >新增機構</v-btn
            >
          </template>

          <v-card class="dialog-card">
            <div class="dialog-card__header px-5 py-3 d-flex align-center">
              <v-icon size="23px" color="#F12222">mdi-alert</v-icon>
              <span class="pl-2 pt-1">注意</span>
            </div>
            <div class="dialog-card__body px-5 pt-4">
              新增的機構類型將無法再做刪除，統計數據也將會根據新的機構類型被重新計算。
            </div>
            <div class="dialog-card__actions px-5 pt-2 pb-5">
              <v-text-field
                class="custom-input"
                outlined
                v-model="newCheckBoxName"
                width="100%"
                hide-details
              />
              <v-btn
                class="primary-button"
                width="105px"
                height="40px"
                color="primary"
                @click="addCheckbox"
                :disabled="newCheckBoxName === ''"
                >新增機構</v-btn
              >
            </div>
          </v-card>
        </v-dialog>
        <div class="custom-label mt-6">機構名稱*</div>
        <v-text-field
          placeholder="請輸入機構的完整名稱"
          class="custom-input"
          outlined
          v-model="payload.name"
          width="100%"
        />
        <div class="custom-label">連絡電話*</div>
        <v-text-field
          placeholder="請輸入機構的連絡電話"
          class="custom-input"
          outlined
          v-model="payload.contactPhone"
          width="100%"
        />
        <div class="custom-label">負責人*</div>
        <v-text-field
          placeholder="請輸入機構的負責人姓名"
          class="custom-input"
          outlined
          v-model="payload.principal"
          width="100%"
        />
        <div class="custom-label">地址*</div>
        <v-text-field
          placeholder="請輸入機構的完整地址"
          class="custom-input"
          outlined
          v-model="payload.address"
          width="100%"
        />
        <div class="custom-label">Gateway MAC address*</div>
        <v-text-field
          placeholder="請輸入完整的MAC address EX : 00-F1-EE-50-DC-92"
          class="custom-input"
          outlined
          v-model="payload.macAddress"
          width="100%"
        />
      </div>
      <div class="dialog-container__custom-divider"></div>
      <div class="dialog-container__right-side">
        <div>
          <div class="custom-label">新增機構人員帳號</div>
          <div class="custom-label mt-2">Email*</div>
          <v-text-field
            placeholder="請輸入登入用的電子郵件"
            class="custom-input"
            outlined
            v-model="accPayload.email"
            width="100%"
          />
          <div class="custom-label">密碼*</div>
          <v-text-field
            placeholder="請輸入登入用的密碼"
            class="custom-input"
            outlined
            type="password"
            v-model="accPayload.password"
            width="100%"
          />
          <div class="custom-label">姓名*</div>
          <v-text-field
            placeholder="請輸入人員完整姓名"
            class="custom-input"
            outlined
            v-model="accPayload.name"
            width="100%"
          />
          <div class="custom-label">帳號有效日期*</div>
          <v-text-field
            class="custom-input"
            outlined
            v-model="accPayload.date"
            width="100%"
          />
          <div class="custom-label">權限</div>
          <v-radio-group v-model="payload.salesPipeline" row>
            <v-radio :ripple="false" label="一般" value="一般"></v-radio>
            <v-radio :ripple="false" label="管理員" value="管理員"></v-radio>
          </v-radio-group>
        </div>
        <div class="dialog-container__actions">
          <v-btn
            width="95px"
            height="39px"
            color="gray-light"
            @click="$emit('close-dialog')"
            >取消</v-btn
          >
          <v-btn
            width="95px"
            height="39px"
            class="ml-4"
            color="#6FBADE"
            @click="$emit('close-dialog')"
            >儲存</v-btn
          >
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      organizationTypes: [
        { label: "月子中心", value: "月子中心" },
        { label: "托嬰中心", value: "托嬰中心" },
        { label: "特殊日照中心", value: "特殊日照中心" },
      ],
      payload: {
        organizationType: "",
        name: "",
        contactPhone: "",
        principal: "",
        address: "",
        macAddress: "",
      },
      accPayload: {
        email: "",
        password: "",
        name: "",
        date: "",
        permission: "一般",
      },
      newCheckBoxName: "",
      isValid: false,
      addCheckboxDialog: false,
    };
  },
  methods: {
    addCheckbox() {
      if (this.organizationTypes.length >= 6) return;
      this.organizationTypes.push({
        label: this.newCheckBoxName,
        value: this.newCheckBoxName,
      });
      this.newCheckBoxName = "";
      this.addCheckboxDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-container {
  &__form {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    height: 740px;
  }
  &__left-side {
    width: 100%;
    max-width: 480px;
  }
  &__custom-divider {
    height: calc(100% - 200px);
    margin-top: 30px;
    width: 1px;
    background-color: #bfbfbf;
  }
  &__right-side {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    max-width: 480px;
  }
  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      box-shadow: 0px 3px 3px #00000029 !important;
    }
    ::v-deep {
      .v-btn__content {
        color: $white;
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
      }
    }
  }
}
.custom-label {
  color: $gray;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 17px;
}
.custom-input {
  ::v-deep {
    fieldset {
      box-shadow: 0px 1px 2px #00000029 !important;
    }
    input {
      color: $gray-dark !important;
      font-size: 14px !important;
    }
  }
}
.primary-button {
  ::v-deep {
    .v-btn__content {
      font-size: 16px !important;
      font-weight: 600 !important;
    }
  }
}
.dialog-card {
  background-color: #edf1f5 !important;
  &__header {
    font-size: 16px;
    font-weight: 700;
    color: $gray;
  }
  &__body {
    font-size: 14px;
    font-weight: 500;
    color: $gray;
  }
  &__actions {
    display: flex;
    align-items: center;
    gap: 38px;
  }
}
::v-deep {
  .v-input--radio-group__input {
    gap: 24px;
  }
  label {
    font-size: 16px;
    font-weight: 500;
    color: $gray !important;
  }
}
</style>
