<template>
  <panel title="Register">
    <v-form ref="form" v-model="valid" class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field 
        v-model="userObj.email"
        label="Email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field 
        v-model="userObj.password"
        label="Password"
        :rules="passRules"
        :counter="32"
        :append-icon="passMask ? 'visibility_off' : 'visibility'"
        :type="passMask ? 'text' : 'password'"
        @click:append="passMask = !passMask"
        required
      ></v-text-field>
      <div class="error" v-html="error"></div>
      <v-btn class="log-btn" @click="login">Login</v-btn>
      <v-btn class="reg-btn" @click="register">Register</v-btn>
    </v-form>
  </panel>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      valid: true,
      passMask: false,
      userObj: {
        email: "",
        password: ""
      },
      error: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passRules: [
        v => !!v || "Pssword is required",
        v => (v && v.length >= 8) || "Pssword must be at least 8 characters"
      ]
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.userObj.email,
          password: this.userObj.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
      if (!this.error) {
        this.$router.push("/");
        this.freshUserObj();
      }
    },
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.userObj.email,
          password: this.userObj.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
      if (!this.error) {
        this.$router.push("/");
        this.freshUserObj();
      }
    },
    freshUserObj() {
      this.error = null;
      this.userObj.email = "";
      this.userObj.password = "";
    }
  }
};
</script>

<style scoped>
</style>
