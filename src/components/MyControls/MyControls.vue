<template>
  <div class="controls">
    <span>
      <my-button v-if="activeIndex !== 0" link @click.prevent="onPrevClick"
        >Go Back</my-button
      >
    </span>

    <my-button @click.prevent="onNextClick" class="next">
      <span>{{ activeIndex === finalIndex ? "Confirm" : "Next Step" }}</span>
    </my-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyButton } from "@/components/form";
import type { PropType } from "vue";

type MyControlsProps = {
  activeIndex: number;
  finalIndex: number;
};

export default defineComponent<MyControlsProps, MyControlsProps>({
  name: "MyControls",
  components: { MyButton },
  props: {
    activeIndex: {
      type: Number as PropType<number>,
      required: true,
      default: 1,
    },
    finalIndex: {
      type: Number as PropType<number>,
      required: true,
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
