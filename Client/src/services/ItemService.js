import Api from "@/services/Api";

export default {
  indexItems() {
    return Api().get("items");
  },
  indexEffects() {
    return Api().post("items");
  },
  getOfficalItem(searchObj) {
    console.log(searchObj);
    return Api().post("Item", searchObj);
  }
};
