<template>
	<div class="container">
    <div class='container__body'>
      <div class="logo">
        <span>LOGO</span>
      </div>
      <v-card class="content">
        <div class="content__title">
          登入 管理者後台
        </div>
        <v-form v-model="isValid" ref="form">
          <p class="label">信箱*</p>
          <v-text-field
            v-model.trim="user.username"
            :rules="[rules.required]"
            placeholder=""
            outlined
            prepend-inner-icon="mdi-email-outline"
          ></v-text-field>   
          <p class="label">密碼*</p>
          <v-text-field
            v-model.trim="user.password"
            :rules="[rules.required, rules.min]"
            placeholder=""
            outlined
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-inner-icon="mdi-lock-outline"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
          ></v-text-field>
          <div :style="{'opacity' : this.errorMessage ? 1 : 0}" class="content__error-section">
            {{ this.errorMessage }}
          </div>   
          <div class="action">
            <v-btn
              large
              color="primary"
              min-width='140'
              @click='login'
              :loading="loginLoading"
            >
              登入
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'auth',
  head() {
    return {
      title: 'Login',
    }
  },
  data () {
    return {
      isValid: false,
      user: {
        username: '',
        password: '',
      },
      errorMessage: '',
      showPass: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
      },
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    login () {
      this.loginUser(this.user);
    },
  },
  computed: {
    ...mapGetters('auth', [
      'loginSuccessData',
      'loginErrorData',
      'loginLoading',
    ]),
  },
  watch: {
    loginSuccessData(v) {
      localStorage.setItem('token', v.key);
      this.$router.push('/home');
    },
    loginErrorData(v) {
      this.errorMessage = v.non_field_errors[0];
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    max-width: 1440px;
    height: 100vh;
    width: 100%;
    padding: 12px;
    &__body {
      width: 100%;
      margin: 20px 0; 
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 421px;
        height: 69px;
        background: $white 0% 0% no-repeat padding-box;
        border: 1px solid $border-color;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 102px;
        margin-top: 5%;
        span {
          text-align: left;
          font-size: 24px;
          letter-spacing: 0px;
          color: $border-color;
        }
      }
      .content {
        max-width: 590px;
        width: 100%;
        margin-bottom: 15px;
        border: 1px solid #D0D0D5;
        border-radius: 9px;
        padding: 70px 75px 45px 75px;
        &__title {
          margin-bottom: 35px;
          text-align: center;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0px;
          color: $gray;
        }
        &__error-section {
          transition: all 300ms;
          line-height: 12px;
          font-size: 12px;
          color: $error;
          margin-top: 5px;
        }
        .label {
          margin-bottom: 10px;
          letter-spacing: 0px;
          color: $gray;          
        }
        .action {
          margin-top: 43px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
  @media only screen and (max-height: 750px) {
    .logo {
      margin-bottom: 60px !important;
      margin-top: 1% !important;
    }
  }
</style>