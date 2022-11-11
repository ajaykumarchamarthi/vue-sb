<template>
  <section class="flex flex-col w-1/2 mx-auto">
    <button class="bg-gray-600 text-white p-2 flex space-x-2">
      <p
        v-if="selectedBrands.length > 0"
        v-for="brand in selectedBrands"
        :key="brand"
      >
        {{ brand }}
      </p>
      <p v-else>Select Brands</p>
    </button>
    <ul>
      <li @click="selectBrand(brand)" v-for="brand in brands" :key="brand">
        {{ brand }}
      </li>
      <p v-if="!viewMore" @click="toggleViewMore" class="underline">
        View More
      </p>
    </ul>
  </section>
</template>

<script>
import { ref, toRefs } from "vue";
export default {
  props: {
    brands: Array,
  },
  setup(props) {
    props = toRefs(props);
    const brands = ref(props.brands);

    const selectedBrands = ref([]);

    let viewMore = ref(false);

    const toggleViewMore = () => {
      viewMore.value = true;
      console.log("viewMore Toggled");
      console.log(viewMore.value);
    };

    const selectBrand = (name) => {
      const isExist = selectedBrands.value.find((brand) => brand === name);
      if (isExist) {
        selectedBrands.value.filter((brand) => brand != name);
      } else {
        selectedBrands.value.push(name);
      }
    };

    return {
      brands,
      selectedBrands,
      toggleViewMore,
      selectBrand,
    };
  },
};
</script>
