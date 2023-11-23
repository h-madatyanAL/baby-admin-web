<template>
  <div :class="{'justify-end' : !Object.keys(activePage).length || activePage.path === '/home'}" class="header">
    <div v-if="(Object.keys(activePage).length && activePage.path !== '/home')" class="left-side">
      <div class="left-side__vertical-line"></div>
      <img :src="activePage.icon" alt="" height="26">
      <span class="left-side__page-name">{{ activePage.label }}</span>
    </div>
    <div class="right-side">
      <div class="right-side__settings">
        <v-menu
          v-model="settings"
          :close-on-content-click="false"
          :nudge-width="200"
          :nudge-left="45"
          offset-y
          content-class="custom-menu-style"
          :nudge-bottom='10'
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <img src="@/assets/images/settings.svg" alt="">
            </v-btn>
          </template>
          <div class="menu-content">
            <p class="menu-content__title">資訊圖卡顯示設定</p>
            <v-checkbox v-for="(item, index) in checkboxes"
              :key="`item_${index}`"
              v-model="item.checked"
              :label="item.label"
            ></v-checkbox>
            <v-btn color="primary" class="w-full settings-action">
              儲存設定
            </v-btn>
          </div>
        </v-menu>        
      </div>
      <div class="right-side">
        <v-menu
          v-model="accountDetails"
          :close-on-content-click="false"
          :nudge-width="200"
          content-class="custom-menu-style"
          offset-y
          :nudge-bottom='10'
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              width="180px"
              v-bind="attrs"
              v-on="on"
            >
              研發部 - 管理者
              <img class="account-icon" src="@/assets/images/bar-icon-account.svg" alt="">
            </v-btn>
          </template>
          <div class="menu-content">
            <div v-for="(item, index) in settingsData"
                 :key="index">
              <p class="label">{{ item.label }}</p>
              <p class="value">{{ item.value }}</p>
            </div>
            <v-btn @click="openSettingsPage" color="primary" class="w-full account-action">
              管理者帳號列表
            </v-btn>
            <v-btn color="primary" class="w-full mb-5">
              修改密碼
            </v-btn>
            <v-btn @click="logout" color="primary" class="w-full">
              登出
            </v-btn>            
          </div>
        </v-menu>        
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    activePage: Object,
  },
  data () {
    return {
      settings :false,
      accountDetails :false,
      checkboxes: [
        {
          label: '目前已銷售裝置',
          checked: false
        },
        {
          label: '機台連線狀況',
          checked: false
        },
        {
          label: '當日呼吸狀況統計',
          checked: false
        },
        {
          label: '當日睡眠狀況統計',
          checked: false
        },
        {
          label: '當日新增的裝置',
          checked: false
        }
      ],
      settingsData: [
        {
          label: "帳號",
          value: "sherrychu@appar.com.tw"
        },
        {
          label: "權限",
          value: "管理者"
        },
        {
          label: "註冊時間",
          value: "2022.08.22"
        },                
      ]
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    },
    openSettingsPage() {
      this.accountDetails = false;
      this.$router.push('/home/settings');
    }
  }
};
</script>

<style lang='scss' scoped>
  .header {
    width: 100%;
    padding: 45px 32px 0 27px;
    display: flex;
    justify-content: space-between;
    .left-side {
      display: flex;
      gap: 25px;
      &__vertical-line {
        width: 4px;
        background: $primary;
        height: 34px;
        border-radius: 5px;
      }
      &__page-name {
        font-weight: 500;
        font-size: 20px;
        color: $gray;
        white-space: nowrap;
      }
    }
    .right-side {
      display: flex;
      justify-content: space-between;
      gap: 26px;
      &__content {
        .label {
          font-size: 14px;
          color: #656565;
          font-weight: 800;
        }
      }
    }
  }
  .custom-menu-style {
    background: #fff;
  } 
  .menu-content {
    &__title {
      color: $gray;
      font-size: 16px;
      font-weight: 700;
    }
    .v-input {
      ::v-deep label {
          font-size: 14px;
      }
    }
    .label {
      font-size: 14px;
      color: #656565;
      font-weight: 800;
      margin: 0;
      margin-bottom: 5px !important;
    }
    .value {
      color: #656565;
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 35px;
    }    
  }
  .w-full{
    width: 100%;
  }
  .settings-action {
    margin-top: 80px;
  }
  .account-action {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .account-icon {
    filter: invert(9%) sepia(2%) saturate(12%) hue-rotate(343deg) brightness(40%) contrast(81%);
    width: 17px;
    margin-left: 10px;
  }
  @media screen and (max-width: 700px) {
  .header {
    flex-direction: column !important;
    gap : 10px;
  }
  .header .right-side {
    justify-content: flex-start !important;
    gap: 16px;
  }
}
</style>