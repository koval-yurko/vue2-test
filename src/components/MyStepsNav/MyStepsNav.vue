<template>
  <my-stepper :active-index="activeIndex" class="holder">
    <my-step :index="0">Your info</my-step>
    <my-step :index="1">Step 2 title</my-step>
    <my-step :index="2">Step 3 title</my-step>
    <my-step :index="3">Step 3 title</my-step>
  </my-stepper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepper } from "@/components/MyStepper";
import MyStep from "./MyStep.vue";
import type { PropType } from "vue";

type MyStepProps = {
  activeIndex: number;
};

export default defineComponent<MyStepProps>({
  name: "MyStepsNav",
  components: { MyStepper, MyStep },
  props: {
    activeIndex: {
      type: Number as PropType<number>,
      required: true,
      default: 0,
    },
  },
});
</script>

<style scoped>
.holder {
  padding: 11px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--my-c-primary-2);
  background-image: url("@/assets/bg-sidebar-desktop.svg");
  background-size: cover;
}
</style>
