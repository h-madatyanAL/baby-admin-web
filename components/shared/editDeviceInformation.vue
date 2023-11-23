<template>
  <div class="dialog-wrapper">
    <div class="mb-8">
      <div><span class="unit">機構單位</span></div>
      <div><span>米奇妙妙屋</span></div>
    </div>
    <div class="mb-4">
      <h4 class="mb-4">MAC address*</h4>
      <v-text-field
        outlined
        placeholder="00-F1-EE-50-DC-92"
        hide-details
        v-model="makAdress"
      >
      </v-text-field>
    </div>
    <div class="mb-4">
      <h4 class="mb-4">SN*</h4>
      <v-text-field
        outlined
        placeholder="C00019901234"
        hide-details
        v-model="sn"
      >
      </v-text-field>
    </div>
    <div class="mb-4">
      <h4 class="mb-4">裝置名程*</h4>
      <v-text-field outlined placeholder="適用機" hide-details v-model="text_3">
      </v-text-field>
    </div>
    <div class="radio_group mb-4 ">
      <h4 class="mb-2">裝置版本</h4>
      <v-radio-group v-model="radios" mandatory row>
        <v-radio label="藍芽版" value="bluetoothVersion"></v-radio>
        <v-radio label="藍芽廣播版" value="bluetoothRadioversion"></v-radio>
        <v-radio label="wifi版" value="wifiVersion"></v-radio>
      </v-radio-group>
    </div>

    <div class="action-buttons d-flex justify-space-between">
      <div>
        <v-btn color="#646464" @click="$emit('close-dialog')">移除裝置</v-btn>
      </div>
      <div class="action-buttons__right-section d-flex justify-space-between">
        <v-btn color="#646464" @click="$emit('close-dialog')" class="cencel"
          >取消</v-btn
        >
        <v-btn color="primary" @click="$emit('close-dialog')" class="save">確定新增</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      makAdress: "",
      sn: "",
      text_3: "",
      radios: null,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .dialog-title {
  margin: 0px !important;
}
.dialog-wrapper {
  color: $gray;
}
.action-buttons {
  width: 100%;
  &__right-section {
    gap: 16px;
  }
}
.action-buttons button {
    color: $white;
}
.unit {
    font-weight: 600;
}

</style>