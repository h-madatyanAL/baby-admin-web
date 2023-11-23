<template>
  <div class="dialog-container">
    <v-form class="dialog-container__form" v-model="isValid">
      <div class="dialog-container__left-side">
        <div class="custom-label">帳號狀態</div>
        <v-radio-group v-model="status" row>
          <v-radio :ripple="false" label="正常" value="正常"></v-radio>
          <v-radio :ripple="false" label="撤銷" value="撤銷"></v-radio>
        </v-radio-group>
        <div class="custom-label mt-4">Email*</div>
        <v-text-field
          v-if="status === '正常'"
          class="custom-input"
          outlined
          v-model="payload.email"
          width="100%"
        />
        <div v-else class="email-box">
          <v-text-field
            class="custom-input custom-input-sm"
            outlined
            placeholder="$inactive_"
            width="100%"
          />
          <span class="pb-7">+</span>
          <v-text-field
            class="custom-input"
            outlined
            v-model="payload.email"
            width="100%"
          />
        </div>
        <div class="custom-label mt-4">姓名*</div>
        <v-text-field
          class="custom-input"
          outlined
          v-model="payload.name"
          width="100%"
        />
        <div class="custom-label mt-4">生日*</div>
        <v-text-field
          class="custom-input"
          outlined
          v-model="birthdayDate"
          width="100%"
        />
        <div class="custom-label mt-4">性別</div>
        <v-radio-group v-model="gender" row>
          <v-radio :ripple="false" label="女性" value="female"></v-radio>
          <v-radio :ripple="false" label="男性" value="male"></v-radio>
        </v-radio-group>
      </div>
      <div class="dialog-container__custom-divider"></div>
      <div class="dialog-container__right-side">
        <div>
          <div class="custom-label">國家*</div>
          <v-text-field
            class="custom-input"
            outlined
            v-model="payload.nation"
            width="100%"
          />
          <div class="custom-label mt-4">銷售管道</div>
          <v-radio-group v-model="payload.salesPipeline" row>
            <v-radio :ripple="false" label="官網" value="官網"></v-radio>
            <v-radio
              :ripple="false"
              label="購物網站(momo)"
              value="購物網站"
            ></v-radio>
          </v-radio-group>
          <div class="custom-label mt-4">使用中裝置</div>
          <div class="dialog-container__device-header">
            <span>MAC address</span>
            <span>SN</span>
            <span>裝置版本</span>
          </div>
          <div class="dialog-container__device-body">
            <span>00-EE-S0-DC-92</span>
            <span>C0019901234</span>
            <span>藍芽版</span>
          </div>
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
  props: {
    activeData: Object,
  },
  data() {
    const payload = JSON.parse(JSON.stringify(this.activeData)) || {};
    return {
      gender: "",
      status: "正常",
      birthdayDate: "1997.11.20",
      isValid: false,
      payload,
    };
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
    height: 614px;
  }
  &__left-side {
    width: 100%;
    max-width: 480px;
  }
  &__custom-divider {
    height: calc(100% - 60px);
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
  &__device-header {
    width: 100%;
    height: 45px;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 4px;
    background-color: $primary-light;
    margin-top: 50px;
    display: flex;
    align-items: center;
    padding: 0 33px;
    gap: 10px;
    span {
      width: 100%;
      color: $white;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
    }
    span {
      width: 28%;
    }
    span:first-child {
      width: 45%;
    }
    span:last-child {
      width: 17%;
    }
  }
  &__device-body {
    margin-top: 12px;
    width: 100%;
    height: 37px;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    padding: 0 33px;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      width: 100%;
      color: $gray;
      font-size: 14px;
      white-space: nowrap;
    }
    span {
      width: 28%;
    }
    span:first-child {
      width: 45%;
    }
    span:last-child {
      width: 17%;
    }
  }
}
.email-box {
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 16px;
    color: $gray;

  }
}
.custom-label {
  color: $gray;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 24px;
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
.custom-input-sm {
  max-width: 135px !important;
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
