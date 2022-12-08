<template>
  <div class="stepper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "MyStepper",
  props: {
    activeStep: {
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
  data() {
    return {
      // activeStep: 1,
    };
  },
});
</script>

<style scoped></style>
