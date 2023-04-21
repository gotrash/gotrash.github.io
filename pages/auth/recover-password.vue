<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="login-box">
    <b-card class="card-outline card-primary" no-body>
      <auth-card-header />

      <b-card-body>
        <p class="login-box-msg" v-html="$t('AUTH.MESSAGE.RECOVER_PASSWORD')"></p>

        <b-form @submit.stop.prevent="onSubmit">
          <b-input-group class="mb-3">
            <template #append>
              <b-input-group-text @click="showPassword = !showPassword">
                <fa-icon icon="eye" :class="{ 'text-danger': showPassword }" />
              </b-input-group-text>
            </template>

            <b-form-input
              id="recover-password-password-input"
              ref="password-input"
              v-model="form.password"
              name="password"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="$t('AUTH.LABEL.PASSWORD')"
            />
          </b-input-group>

          <b-input-group class="mb-3">
            <template #append>
              <b-input-group-text @click="showConfirmPassword = !showConfirmPassword">
                <fa-icon icon="eye" :class="{ 'text-danger': showConfirmPassword }" />
              </b-input-group-text>
            </template>

            <b-form-input
              id="recover-password-confirm-password-input"
              ref="confirm-password-input"
              v-model="form.confirmPassword"
              name="confirm-password"
              :type="showConfirmPassword ? 'text' : 'password'"
              :placeholder="$t('AUTH.LABEL.CONFIRM_PASSWORD')"
            />
          </b-input-group>

          <b-form-row>
            <b-col>
              <b-btn type="submit" variant="primary" block>{{ $t("AUTH.LABEL.UPDATE_PASSWORD") }}</b-btn>
            </b-col>
          </b-form-row>
        </b-form>

        <p class="mt-3 mb-1 text-center">
          <b-link :to="{ name: 'auth-login' }">
            {{ $t("AUTH.LABEL.LOGIN") }}
          </b-link>
        </p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "RecoverPasswordPage",
    components: {
      AuthCardHeader: () => import("~/components/headers/AuthCardHeader")
    },
    layout: "auth",
    data() {
      return {
        error: null,
        form: {
          confirmPassword: null,
          password: null
        },
        showConfirmPassword: false,
        showPassword: false
      };
    },
    methods: {
      onCancel() {
        this.$router.go(-1);
      },
      onSubmit() {
        // const { form } = this;
        // this.$axios
        //   .post("/auth/forgot-password", { ...form, origin: window.location.origin })
        //   .then(res => {
        //     console.log(res);
        //     this.$router.push({ name: "auth-confirm-forgot-password" });
        //   })
        //   .catch(error => {
        //     if (error?.config) console.log(error.config);
        //   });
      }
    }
  };
</script>
