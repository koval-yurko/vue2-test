<template>
  <div class="form-step step" v-if="isActive">
    <h2 class="head">Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>

    <div class="form">
      <div class="checkbox">
        <div class="checkbox-item" v-for="addon of addonsList" :key="addon.id">
          <input
            type="checkbox"
            name="plans"
            :id="addon.id"
            :value="addon.id"
            v-model="addons"
          />
          <label :for="addon.id">
            <span>
              <span class="title">{{ addon.title }}</span>
              <span class="text">{{ addon.body }}</span>
            </span>
            <span v-if="isMonthlyTime" class="price">
              +${{ addon.billing.monthly.price }}/mo
            </span>
            <span v-if="isYearlyTime" class="price">
              +${{ addon.billing.yearly.price }}/yr
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepperMixin } from "@/components/MyStepper";
import { MyMultiStepMixin } from "@/components/MyMultiForm";
import { BILLING_TIME_MONTHLY, BILLING_TIME_YEARLY } from "@/types";
import { addons } from "@/constants";
import type { MyStepperMixinProps } from "@/components/MyStepper";
import type { MyMultiStepMixinProps } from "@/components/MyMultiForm";
import type { FormStep } from "@/types";

type MyStepProps = FormStep &
  MyStepperMixinProps &
  MyMultiStepMixinProps & {
    addons: string[];
  };

export default defineComponent<MyStepProps, MyStepProps>({
  name: "MyAddonsStep",
  mixins: [MyStepperMixin, MyMultiStepMixin],
  props: {},
  data() {
    return {
      addonsList: addons,
      addons: this.formData.addons,
    };
  },
  methods: {
    isValid() {
      return true;
    },
    getUpdates() {
      return {
        addons: [...this.addons],
      };
    },
  },
  computed: {
    isMonthlyTime() {
      return this.formData.billingTime === BILLING_TIME_MONTHLY;
    },
    isYearlyTime() {
      return this.formData.billingTime === BILLING_TIME_YEARLY;
    },
  },
  watch: {
    formData() {
      this.addons = this.formData.addons;
    },
  },
});
</script>

<style scoped>
.step {
  padding: 33px 0;
}

.form {
  padding-top: 26px;
}

.checkbox-item {
  position: relative;
  margin-bottom: 18px;
}

.checkbox-item input {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 20px;
  margin-top: -10px;
}

.checkbox-item label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 15px 16px 65px;
  border: solid 1px var(--my-c-gray-4);
  border-radius: 8px;
  cursor: pointer;
}

.checkbox-item input:checked + label {
  border-color: var(--my-c-primary-2);
  background: var(--my-c-gray-2);
}

.checkbox-item input + label:hover,
.checkbox-item input:focus + label {
  border-color: var(--my-c-primary-2);
}

.checkbox-item input:focus-visible + label {
  border-color: var(--my-c-primary-2);
  outline: solid 1px var(--my-c-primary-2);
}

.checkbox-item .title {
  display: block;
  font-weight: 700;
  line-height: 1.2;
  color: var(--my-c-primary-1);
}

.checkbox-item .text {
  font-size: 15px;
}

.checkbox-item .price {
  color: var(--my-c-primary-2);
}
</style>
