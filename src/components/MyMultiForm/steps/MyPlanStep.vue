<template>
  <div class="step" v-if="isActive">
    <ul>
      <li v-for="plan of plans" :key="plan.id">
        {{ plan.title }} <br />
        <component :is="plan.icon"></component>
      </li>
    </ul>

    <input
      type="checkbox"
      id="checkboxd"
      :checked="isMonthlyTime"
      @change="timeUpdate"
    />

    formData- {{ formData.billingTime }}
    <br />
    formDataClone- {{ formDataClone.billingTime }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepperMixin } from "@/components/MyStepper";
import { MyMultiStepMixin } from "@/components/MyMultiForm";
import { MyIconAdvanced, MyIconArcade, MyIconPro } from "@/components/MyIcons";
import { BILLING_TIME_MONTHLY, BILLING_TIME_YEARLY } from "@/types";
import { plans } from "@/constants";
import type { PropType } from "vue";
import type { FormData } from "@/types";

type MyStepProps = {
  formData: FormData;

  formDataClone: FormData;
};

export default defineComponent<MyStepProps>({
  name: "MyPlanStep",
  mixins: [MyStepperMixin, MyMultiStepMixin],
  components: { MyIconAdvanced, MyIconArcade, MyIconPro },
  props: {},
  data() {
    return {
      plans,
      formDataClone: { ...this.formData },
    };
  },
  methods: {
    isValid() {
      console.log("child");
      return false;
    },
    timeUpdate(event: any) {
      const { checked } = event.target;
      const billingTime = checked ? BILLING_TIME_MONTHLY : BILLING_TIME_YEARLY;
      this.formDataClone.billingTime = billingTime;
    },
  },
  computed: {
    isMonthlyTime() {
      return this.formData.billingTime === BILLING_TIME_MONTHLY;
    },
    isYearsTime() {
      return this.formData.billingTime === BILLING_TIME_YEARLY;
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
