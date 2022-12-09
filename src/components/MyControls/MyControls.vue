<template>
  <div class="controls">
    <my-button link @click.prevent="onPrevClick">Go Back</my-button>

    <my-button @click.prevent="onNextClick" class="next">Next Step</my-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyButton } from "@/components/form";
import type { PropType } from "vue";

export default defineComponent({
  name: "MyControls",
  components: { MyButton },
  props: {
    activeIndex: {
      type: Number as PropType<number>,
      required: true,
      default: 1,
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
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 15px;
}
.next {
  min-width: 122px;
}
</style>
