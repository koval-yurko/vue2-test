<template>
  <div class="step" v-if="isActive">Summary step</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepperMixin } from "@/components/MyStepper";
import { MyMultiStepMixin } from "@/components/MyMultiForm";
import type { PropType } from "vue";
import type { FormData } from "@/types";

type MyStepProps = {
  formData: FormData;

  formDataClone: FormData;
};

export default defineComponent<MyStepProps>({
  name: "MySummaryStep",
  mixins: [MyStepperMixin, MyMultiStepMixin],
  props: {},
  data() {
    return {
      formDataClone: { ...this.formData },
    };
  },
  methods: {
    isValid() {
      console.log("child");
      return false;
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
