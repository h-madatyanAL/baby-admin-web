<template>
  <div class="new-position">
    <v-text-field v-model="newPosition" outlined></v-text-field>
    <div class="new-position__action">
      <v-btn color="gray" @click="$emit('close-dialog')" class="cencel">取消</v-btn>
      <v-btn color="primary" class="save">確定新增</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newPosition: "請輸入職位名稱 ex: 開發人員"
    }
  }

}
</script>

<style lang='scss' scoped>
  .new-position {
    &__action {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 15px;
      .cencel {
        color: #fff;
        width: 80px;
      }
      .save  {
        width: 130px;
      }
    }   
  }
</style>