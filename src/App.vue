<template>
  <!-- <AppButton>Story Button</AppButton> -->
  <DropDown :brands="brands" />
</template>

<script>
// import AppButton from "./components/AppButton/AppButton.vue";
import DropDown from "./components/DropDown/DropDown.vue";

export default {
  components: {
    // AppButton,
    DropDown,
  },
  setup() {
    const brands = [
      "Amazon",
      "Flipkart",
      "FB",
      "Microsoft",
      "TGT",
      "Timing Tech",
      "TCS",
      "Paypal",
      "AWS",
      "Service Now",
      "Capgemini",
      "Infosys",
      "HCL",
      "CTS",
    ];
    return {
      brands,
    };
  },
};
</script>
