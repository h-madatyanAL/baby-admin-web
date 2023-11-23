<template>
  <div class="new-account">
    <p class="new-account__label">權限</p>
    <v-radio-group
      v-model="radioGroup"
      row
    >
      <v-radio
        active-class="active"
        label="女性"
        value="女性"
      ></v-radio>
      <v-radio
        label="男性"
        value="男性"
      ></v-radio>
    </v-radio-group>
    <p class="new-account__label">職位*</p>
    <v-select
      height="45"
      :items="items"
      dense
      outlined
    ></v-select>
    <p class="new-account__label">信箱*</p>
      <v-text-field outlined height="45"></v-text-field>
    <p class="new-account__label">密碼*</p>
      <v-text-field outlined height="45"></v-text-field>
    <div class="new-account__action">
      <v-btn color="gray" @click="$emit('close-dialog')" class="cencel">取消</v-btn>
      <v-btn color="primary" class="save">確定新增</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radioGroup: '',
      items: []
    }
  }

}
</script>

<style lang='scss' scoped>
  .new-account {
    &__label {
      color: #7A7A7A;
      font-size: 16px;
      font-weight: 500;
      margin: 0;
      margin-bottom: 30px;
      margin-top: 10px;
    }
    &__action {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 35px;
      .cencel {
        color: #fff;
        width: 80px;
      }
      .save  {
        width: 130px;
      }
    }   
  }
  ::v-deep {
    .v-radio {
      label {
        margin-left: 10px;
        color: #707070;
      }
    }
  }
</style>