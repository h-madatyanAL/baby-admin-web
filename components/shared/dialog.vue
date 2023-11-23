<template>
  <div>
    <v-dialog  :content-class="fullHeight ? 'dialog-lg' : ''" persistent v-model="dialog" :max-width='width'>
      <v-card>
        <h3 v-if="!hideTitle" class="dialog-title">
          {{title}}
        </h3>
        <slot name="body"></slot>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    fullHeight: {
      type: Boolean,
      default: false,
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
    showDialog: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '300'
    } 
  },
  watch: {
    showDialog: {
      deep: true,
      handler() {
          this.dialog = this.showDialog
      }
    }
  },
};
</script>

<style lang='scss' scoped>
  ::v-deep .v-card {
    padding: 35px 45px;
  }
  .dialog-title {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
    color: $gray;
  }
</style>