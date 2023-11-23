<template>
  <v-card>
    <v-navigation-drawer height="100vh" width="206px" class="sidebar" permanent>
      <v-list-item>
        <div
          height="63px"
          width="100%"
          class="sidebar__logo-box"
          color="primary-dark"
        >
          LOGO
        </div>
      </v-list-item>
      <v-list-item class="pt-9 sidebar__panel-name-box">
        <span><span>Halo</span>AdminPanel 管理者後台</span>
      </v-list-item>
      <v-list-item class="sidebar__pages">
        <div>
          <div
            class="sidebar__page d-flex align-center"
            v-for="(item, i) in sidebarItems"
            :key="`page_${i}`"
            :class="{ 'sidebar__page-active': activePage === item.path }"
            @click="changeActiveId(item)"
          >
            <div
              class="sidebar__page__line"
            ></div>
            <img class="ml-4" :src="item.icon" alt="" />
            <div class="ml-4 sidebar__page__label">{{ item.label }}</div>
          </div>
        </div>
      </v-list-item>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      activePage: '',
      sidebarItems: [
        { 
          id: 1, 
          label: "首頁", 
          icon: require("../assets/images/bar-icon-home.svg"),
          path: "/home"
        },
        {
          id: 2,
          label: "產品銷售狀況",
          icon: require("../assets/images/bar-icon-sales.svg"),
          path: "/report"
        },
        {
          id: 3,
          label: "裝置使用資料",
          icon: require("../assets/images/bar-icon-device.svg"),
          path: "/device-data"
        },
        {
          id: 4,
          label: "寶寶數據蒐集",
          icon: require("../assets/images/bar-icon-baby.svg"),
          path: "/baby-data"
        },
        {
          id: 5,
          label: "註冊帳號管理",
          icon: require("../assets/images/bar-icon-account.svg"),
          path: "/account-management"
        },
      ],
    };
  },
  methods: {
    changeActiveId(item) {
      this.activePage = item.path;
      this.$router.push(item.path)
    },
    getActivePage(v) {
      this.sidebarItems.forEach(item => {
        if(v.path.includes(item.path)) {
          this.activePage = item.path;
        }
      })
    }
  },
  watch: {
    "$route": {
      deep: true,
      handler(v) {
        this.getActivePage(v);
        this.$emit("change-active-page", this.sidebarItems.find(item => item.path === this.activePage))
      }
    },
  },
  mounted() {
    this.getActivePage(this.$route);
    this.$emit("change-active-page", this.sidebarItems.find(item => item.path === this.activePage));
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  padding: 39px 0px 0 0px;
  &__logo-box {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    background-color: $primary-dark;
    border: solid 1px $border-color;
    color: $white;
    border-radius: 6px;
    user-select: none;
    cursor: pointer;
  }
  &__panel-name-box {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    span {
      color: $gray;
      span {
        color: #f9e246;
      }
    }
  }
  &__pages {
    margin-top: 40%;
  }
  &__page {
    margin-bottom: 40px;
    user-select: none;
    cursor: pointer;
    &__line {
      transition: 300ms;
      width: 5px;
      height: 21px;
      background-color: $white;
      border-radius: 6px;
    }
    &__label {
      color: $border-color;
      font-size: 14px;
      font-weight: 500;
    }
    img {
      transition: 300ms;
      filter: invert(35%) sepia(47%) saturate(0%) hue-rotate(194deg) brightness(95%) contrast(70%);
    }
  }
  &__page-active {
    .sidebar__page__line {
      background-color: $primary !important;
    }
    img {
      filter: unset !important;
    }
    .sidebar__page__label {
      color: $primary;
    }
  }
}
</style>
