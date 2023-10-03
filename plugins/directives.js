const checkValue = event => {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");

  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  }

  event.preventDefault();
};

const vNumberOnly = {
  mounted(el) {
    el.addEventListener("keypress", checkValue);
  },
  beforeUnmount(el) {
    el.removeEventListener("keypress", checkValue);
  }
};

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive("number-only", vNumberOnly);
});
