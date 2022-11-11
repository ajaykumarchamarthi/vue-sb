<template>
  <button
    @click="onClick"
    type="button"
    class="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    :class="[
      outlined
        ? ' bg-red-500 hover:bg-gray-100 text-gray-900'
        : 'text-white bg-blue-700 hover:bg-blue-400',
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    outlined: Boolean,
  },
  setup() {
    const onClick = () => console.log("Button is clicked");
    return {
      onClick,
    };
  },
};
</script>
