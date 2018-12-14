import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("user/register", credentials);
  },
  login(credentials) {
    console.log(credentials);
    return Api().post("user/login", credentials);
  }
};
