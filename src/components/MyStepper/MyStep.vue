<template>
  <div class="step" :class="{ active: isActive }">
    <div class="label">Step {{ index }}, isActive - {{ isActive }}</div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type MyStepper from "@/components/MyStepper.vue";

type MyStepProps = {
  index: number;
  $stepper: typeof MyStepper;
};

export default defineComponent<MyStepProps>({
  name: "MyStep",
  props: {
    index: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  data() {
    return {
      // clonedName: this.name,
    };
  },
  inject: {
    $stepper: {
      from: "$stepper",
      default: {},
    },
  },
  computed: {
    isActive() {
      return this.$stepper.activeStep === this.index;
    },
  },
});
</script>

<style scoped>
.step {
}
.step.active {
  background: #ccc;
}
</style>
