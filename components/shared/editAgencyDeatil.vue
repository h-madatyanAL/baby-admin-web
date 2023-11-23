<template>
  <div class="dialog-wrapper">
    <div class="custom-label">機構類型</div>
    <div>
      <div class="radio_group">
        <v-radio-group v-model="organizationType" row>
          <v-radio
            v-for="(type, i) in organizationTypes"
            :key="`type__${i}`"
            :ripple="false"
            :label="type.label"
            :value="type.value"
          ></v-radio>
        </v-radio-group>
      </div>
      <v-btn class="primary-button" width="175px" height="46px" color="primary"
        >新增機構</v-btn
      >
    </div>
    <div>
      <div class="custom-label mt-4">姓名*</div>
      <v-text-field
        hide-details
        class="custom-input"
        outlined
        v-model="institutionName"
        width="100%"
      />
      <div class="custom-label mt-6">連絡電話**</div>
      <v-text-field
      hide-details
        placeholder="請輸入機構的完整名稱"
        class="custom-input"
        outlined
        v-model="contactPhones"
        width="100%"
      />
      <div class="custom-label mt-4">負責人*</div>
      <v-text-field
      hide-details
        placeholder="請輸入機構的連絡電話"
        class="custom-input"
        outlined
        v-model="principal"
        width="100%"
      />
      <div class="custom-label mt-4">地址*</div>
      <v-text-field
      hide-details
        placeholder="請輸入機構的完整地址"
        class="custom-input"
        outlined
        v-model="address"
        width="100%"
      />
      <div class="custom-label mt-4">Gateway MAC address*</div>
      <v-text-field
      hide-details
        placeholder="00-F1-EE-50-DC-92"
        class="custom-input"
        outlined
        v-model="macAddress"
        width="100%"
      />
    </div>
    <div class="actions mt-12">
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
      organizationType: "月子中心",
      institutionName: "",
      contactPhones: "",
      principal: "",
      address: "",
      macAddress: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.dialog-wrapper {
  color: #676767;
}
.custom-label {
  color: $gray;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 17px;
}
.primary-button {
  ::v-deep {
    .v-btn__content {
      font-size: 16px !important;
      font-weight: 600 !important;
    }
  }
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
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>