<template>
  <div class="step" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";
import type MyMultiForm from "@/components/MyMultiForm.vue";

type MyMultiStepProps = {
  index: number;
  $multiForm: typeof MyMultiForm;
};

export default defineComponent<MyMultiStepProps>({
  name: "MyMultiStep",
  props: {
    index: {
      type: Number as PropType<number>,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      // activeStep: 1,
    };
  },
  inject: {
    $multiForm: {
      from: "$multiForm",
      default: {},
    },
  },
  computed: {
    isActive() {
      return this.$multiForm.activeStep === this.index;
    },
  },
});
</script>

<style scoped></style>
