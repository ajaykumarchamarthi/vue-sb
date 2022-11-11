import ImageCard from "./ImageCard.vue";

export default {
  title: "components/ImageCard",
  components: {
    ImageCard,
  },
};

const Template = (args) => ({
  components: {
    ImageCard,
  },
  setup() {
    return { args };
  },
  template: '<ImageCard v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  title: "Look at this image!",
  text: "This is image is very nice!!! Would you like it buy?",
  imageUrl: "https://picsum.photos/400/300",
  price: "$199",
  buyClick: () => console.log("Buy It!"),
  cancelClick: () => console.log("Not Interested"),
};

export const WithOldPrice = Template.bind({});

WithOldPrice.args = {
  ...Default.args,
  oldPrice: "$299",
};
