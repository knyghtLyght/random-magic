import Api from "@/services/Api";

export default {
  indexItems() {
    return Api().get("songs");
  },
  indexEffects() {
    return Api().get("login");
  }
};
