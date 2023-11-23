<template>
  <div>
    <v-form v-model="isValid">
      <div class="custom-label">機構單位</div>
      <div class="value-box">米奇妙妙屋</div>
      <div class="custom-label mt-6">帳號狀態</div>
      <v-radio-group hide-details v-model="status" row>
        <v-radio :ripple="false" label="正常" value="正常"></v-radio>
        <v-radio :ripple="false" label="撤銷" value="撤銷"></v-radio>
      </v-radio-group>
      <div class="custom-label mt-6">Email*</div>
      <v-text-field
        class="custom-input"
        outlined
        v-model="email"
        width="100%"
      />
      <div class="custom-label">密碼*</div>
      <v-text-field
        class="custom-input"
        outlined
        v-model="password"
        width="100%"
      />
      <div class="custom-label">姓名*</div>
      <v-text-field class="custom-input" outlined v-model="name" width="100%" />
      <div class="custom-label">帳號有效日期*</div>
      <v-text-field
        class="custom-input"
        outlined
        v-model="expirationDate"
        width="100%"
      />
      <div class="custom-label">權限</div>
      <v-radio-group hide-details v-model="permission" row>
        <v-radio :ripple="false" label="一般" value="一般"></v-radio>
        <v-radio :ripple="false" label="管理員" value="管理員"></v-radio>
      </v-radio-group>
      <div class="actions mt-6">
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
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isValid: false,
      unit: "米奇妙妙屋",
      status: "正常",
      email: "sherrychu@appar.com.tw",
      password: "asehroaer4u0-qi[e",
      name: "王小明",
      expirationDate: "2022.10.10",
      permission: "一般",
    };
  },
};
</script>

<style lang="scss" scoped>
.custom-label {
  color: $gray;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
}
.value-box {
  font-size: 16px;
  color: $gray;
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
::v-deep {
  .v-input--selection-controls {
    margin-top: 12px !important;
  }

  .v-input--radio-group__input {
    gap: 24px;
  }
  label {
    font-size: 16px;
    font-weight: 500;
    color: $gray !important;
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
