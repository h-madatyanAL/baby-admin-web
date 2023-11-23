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
              <span>{{ head.text }}</span>
            </td>
          </tr>
        </thead>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.function="{ item }">
        <v-btn @click="$router.push('/account-management/detail')" text>{{ item.function }}</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      headers: [
        { text: "機構名稱", value: "name", align: "center", sortable: false },
        { text: "負責人", value: "principal", sortable: false },
        { text: "連絡電話", value: "phone", sortable: false },
        { text: "BCD裝置數量", value: "units", sortable: false },
        { text: "已開通帳號數量", value: "openedAccounts", sortable: false },
        { text: "功能", value: "function", sortable: false },
      ],
      desserts: [
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        }, {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
        {
          name: "米奇妙妙屋",
          principal: "謝和村",
          phone: "0926231619",
          units: "30台",
          openedAccounts: "2",
          function: "編輯",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-tooltip__content {
  opacity: 1 !important;
  width: 272px;
  color: #FFF6F6 !important;
  font-weight: 500 !important;
  font-size: 12px !important;
  padding: 7px 10px 7px 20px;
}
</style>
