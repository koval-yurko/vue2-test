<template>
  <my-stepper :active-index="activeIndex" class="holder">
    <my-step :index="0">Your info</my-step>
    <my-step :index="1">Select plan</my-step>
    <my-step :index="2">Add-ons</my-step>
    <my-step :index="3">Summary</my-step>
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
  display: flex;
  flex-direction: column;
  padding: 35px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--my-c-primary-2);
  background-image: url("@/assets/bg-sidebar-desktop.svg");
  background-size: cover;
}

@media (max-width: 800px) {
  .holder {
    flex-direction: row;
    justify-content: center;
    padding-bottom: 100px;
    border-radius: 0;
    background-image: url("@/assets/bg-sidebar-mobile.svg");
  }
}
</style>
