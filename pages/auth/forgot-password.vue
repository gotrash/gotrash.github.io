<template>
  <div class="login-box">
    <b-card class="card-outline card-primary" no-body>
      <auth-card-header />

      <b-card-body>
        <p class="login-box-msg" v-text="$t('AUTH.MESSAGE.FORGOT_PASSWORD')"></p>

        <b-form @submit.stop.prevent="onSubmit">
          <b-input-group class="mb-3">
            <template #append>
              <b-input-group-text>
                <fa-icon icon="envelope" />
              </b-input-group-text>
            </template>

            <b-form-input
              id="forgot-password-email-input"
              ref="email-input"
              v-model="form.email"
              name="email"
              type="email"
              :placeholder="$t('AUTH.LABEL.EMAIL')"
            />
          </b-input-group>

          <b-form-row>
            <b-col>
              <b-btn type="button" variant="outline-primary" block @click.stop.prevent="onCancel">{{
                $t("GENERAL.LABEL.CANCEL")
              }}</b-btn>
              <b-btn type="submit" variant="primary" block>{{ $t("AUTH.LABEL.REQUEST_NEW_PASSWORD") }}</b-btn>
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
    name: "ForgotPasswordPage",
    components: {
      AuthCardHeader: () => import("~/components/global/AuthCardHeader")
    },
    layout: "auth",
    data() {
      return {
        error: null,
        form: {
          email: null
        }
      };
    },
    methods: {
      onCancel() {
        this.$router.go(-1);
      },
      onSubmit() {
        const { form } = this;

        this.$axios
          .post("/auth/forgot-password", { ...form, origin: window.location.origin })
          .then(res => {
            console.log(res);
            this.$router.push({ name: "auth-confirm-forgot-password" });
          })
          .catch(error => {
            if (error?.config) console.log(error.config);
          });
      }
    }
  };
</script>
