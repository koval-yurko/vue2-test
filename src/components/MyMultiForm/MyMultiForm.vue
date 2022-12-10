<template>
  <form @submit.prevent="onSubmit">
    <my-stepper :active-index="activeIndex">
      <my-info-step :index="0" :form-data="formData" :ref="setSteps" />
      <my-plan-step :index="1" :form-data="formData" :ref="setSteps" />
      <my-addons-step :index="2" :form-data="formData" :ref="setSteps" />
      <my-summary-step :index="3" :form-data="formData" :ref="setSteps" />
    </my-stepper>
    <button type="submit" v-show="false">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepper } from "@/components/MyStepper";
import MyInfoStep from "@/components/steps/MyInfoStep.vue";
import MyPlanStep from "@/components/steps/MyPlanStep.vue";
import MyAddonsStep from "@/components/steps/MyAddonsStep.vue";
import MySummaryStep from "@/components/steps/MySummaryStep.vue";

import type { PropType } from "vue";
import type { FormData, FormStep } from "@/types";

type MyMultiFormProps = {
  activeIndex: number;
  formData: FormData;
  steps: FormStep[];
};

export default defineComponent<MyMultiFormProps>({
  name: "MyMultiForm",
  components: {
    MyStepper,
    MyInfoStep,
    MyPlanStep,
    MyAddonsStep,
    MySummaryStep,
  },
  props: {
    activeIndex: {
      type: Number as PropType<number>,
      required: true,
      default: 0,
    },
    formData: {
      type: Object as PropType<FormData>,
      required: true,
    },
  },
  data() {
    return {
      steps: [],
    };
  },
  provide() {
    return {
      $multiForm: this,
    };
  },
  emits: ["submit"],
  methods: {
    setSteps(step: FormStep) {
      if (step) {
        this.steps[step.index] = step;
      }
    },
    isActiveStepValid() {
      const step = this.steps[this.activeIndex];
      if (!step) {
        return false;
      }
      return step.isValid();
    },
    getActiveStepUpdates() {
      const step = this.steps[this.activeIndex];
      if (!step) {
        return undefined;
      }
      return step.getUpdates();
    },
    goto(index: number) {
      this.$emit("goto", index);
    },
    onSubmit(event: Event) {
      this.$emit("submit", event);
    },
  },
});
</script>

<style scoped></style>
