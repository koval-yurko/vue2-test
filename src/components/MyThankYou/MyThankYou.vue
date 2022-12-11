<template>
  <div class="holder">
    <my-icon-thank-you class="icon" />
    <div class="title head">{{ title }}</div>
    <div class="text"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyIconThankYou } from "@/components/icons";
import type { PropType } from "vue";

type MyThankYouProps = {
  title?: string;
};

export default defineComponent<MyThankYouProps, MyThankYouProps>({
  name: "MyThankYou",
  components: { MyIconThankYou },
  props: {
    title: {
      type: String as PropType<string>,
      required: false,
      default: "Thank you!",
    },
  },
  emits: ["prev", "next"],
  methods: {
    onPrevClick() {
      this.$emit("prev");
    },
    onNextClick() {
      this.$emit("next");
    },
  },
});
</script>

<style scoped>
.holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  margin: 25px 0 7px;
}

.text {
  text-align: center;
}

@media (max-width: 800px) {
  .holder {
    min-height: 400px;
  }
}
</style>
