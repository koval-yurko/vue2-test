<template>
  <div class="form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "MyMultiForm",
  props: {
    activeStep: {
      type: Number as PropType<number>,
      required: true,
      default: 1,
    },
  },
  provide() {
    return {
      $multiForm: this,
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
