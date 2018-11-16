import Api from "@/services/Api";

export default {
  indexItems() {
    return Api().get("items");
  },
  indexEffects() {
    return Api().post("items");
  }
};
