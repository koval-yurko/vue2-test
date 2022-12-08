<template>
  <div id="app">
    <my-stepper :active-step="activeStep">
      <my-step :index="1">Step 1 title</my-step>
      <my-step :index="2">Step 2 title</my-step>
      <my-step :index="3">Step 3 title</my-step>
    </my-stepper>

    <MyMultiForm :active-step="activeStep">
      <MyMultiStep :index="1">Step 1 content</MyMultiStep>
      <MyMultiStep :index="2">Step 2 content</MyMultiStep>
      <MyMultiStep :index="3">Step 3 content</MyMultiStep>
    </MyMultiForm>

    <button @click="activeStep = activeStep - 1">Prev</button>
    <button @click="activeStep = activeStep + 1">Next</button>

    <span>activeStep- {{ activeStep }}, <MyIconAdvanced /></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepper, MyStep } from "@/components/MyStepper";
import { MyMultiForm, MyMultiStep } from "@/components/MyMultiForm";
import { MyIconAdvanced } from "@/components/MyIcons";

export default defineComponent({
  components: { MyStepper, MyStep, MyMultiForm, MyMultiStep, MyIconAdvanced },
  data() {
    return {
      activeStep: 1,
    };
  },
});
</script>

<style scoped>
/*border-left: 1px solid var(--color-border);*/
/*color: var(--color-text);*/
/*padding-right: calc(var(--section-gap) / 2);*/
</style>
