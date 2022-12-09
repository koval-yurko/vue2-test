<template>
  <div class="form-step step" v-if="isActive">
    <h2 class="head">Finishing up</h2>
    <p>Double-check everything looks OK before confirming.</p>
  </div>
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
      return false;
    },
  },
});
</script>

<style scoped></style>
