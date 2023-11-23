<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :hide-default-header="true"
      class="settings__table__body"
    >
      <template v-slot:header="{ props }">
        <thead>
          <tr>
            <td
              :style="{ textAlign: head.align || '' }"
              v-for="(head, i) in props.headers"
              :key="`key__${i}`"
            >
              <span v-if="head.value === 'currentDevice'">
                <span>{{ head.text }}</span>
                <v-tooltip color="#313B4B" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      class="mb-1 ml-1"
                      size="19px"
                      color="primary"
                    >
                      mdi-information-outline
                    </v-icon>
                  </template>
                  <!-- eslint-disable-next-line -->
                  <span>此欄位顯示之數量只包含｢有成功連線的裝置」並非當初購買裝置的數量。</span>
                </v-tooltip>
              </span>
              <span v-else>{{ head.text }}</span>
            </td>
          </tr>
        </thead>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.function="{ item }">
        <v-btn text @click="openDialog(item)">{{ item.function }}</v-btn>
      </template>
    </v-data-table>
    <Dialog 
      :showDialog="showPropertiesDialog" 
      title="帳號資料編輯" 
      width="1180"
    >
      <template v-slot:body>
        <AccountManagementDialog :active-data="currentDialogData" @close-dialog="closeDialog" />
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "../shared/dialog.vue";
import AccountManagementDialog from "../shared/accountManagementDialog.vue";
export default {
  components: {
    Dialog,
    AccountManagementDialog,
  },
  data() {
    return {
      currentDialogData: {},
      showPropertiesDialog: false,
      headers: [
        { text: "狀態", value: "state", align: "center", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "姓名", value: "name", sortable: false },
        { text: "國家", value: "nation", sortable: false },
        { text: "銷售管道", value: "salesPipeline", sortable: false },
        {
          text: "當下使用裝置",
          value: "currentDevice",
          align: "center",
          sortable: false,
        },
        { text: "功能", value: "function", sortable: false },
      ],
      desserts: [
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
        {
          state: "正常",
          email: "sherrychu@appar.com.tw",
          name: "王小明",
          nation: "台灣",
          salesPipeline: "官網",
          currentDevice: "2個",
          function: "編輯",
        },
      ],
    };
  },
  methods: {
    openDialog(data) {
      this.currentDialogData = data
      this.showPropertiesDialog = true;
    },
    closeDialog() {
      this.showPropertiesDialog = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.v-tooltip__content {
  opacity: 1 !important;
  width: 272px;
  color: #fff6f6 !important;
  font-weight: 500 !important;
  font-size: 12px !important;
  padding: 7px 10px 7px 20px;
}
</style>
