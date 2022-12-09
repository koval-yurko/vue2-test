<template>
  <div class="stepper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "MyStepper",
  props: {
    activeIndex: {
      type: Number as PropType<number>,
      required: true,
      default: 1,
    },
  },
  provide() {
    return {
      $stepper: this,
    };
  },
});
</script>

<style scoped></style>
