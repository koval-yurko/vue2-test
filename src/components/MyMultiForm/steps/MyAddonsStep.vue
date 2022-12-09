<template>
  <div class="step" v-if="isActive">Addons step</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepperMixin } from "@/components/MyStepper";
import { MyMultiStepMixin } from "@/components/MyMultiForm";
import { addons } from "@/constants";
import type { PropType } from "vue";
import type { FormData } from "@/types";

type MyStepProps = {
  formData: FormData;

  formDataClone: FormData;
};

export default defineComponent<MyStepProps>({
  name: "MyAddonsStep",
  mixins: [MyStepperMixin, MyMultiStepMixin],
  props: {},
  data() {
    return {
      addons,
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
