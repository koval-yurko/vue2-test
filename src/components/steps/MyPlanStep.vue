<template>
  <div class="form-step step" v-if="isActive">
    <h2 class="head">Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>

    <div class="form">
      <my-radio-group class="plans-radio radio" v-model="plan" name="plans">
        <my-radio
          class="radio-item"
          v-for="planItem of plans"
          :key="planItem.id"
          :value="planItem.id"
        >
          <component class="icon" :is="planItem.icon"></component>
          <span class="text">
            <span class="title">{{ planItem.title }}</span>
            <span v-if="isMonthlyTime"
              >${{ planItem.billing.monthly.price }}/mo</span
            >
            <span v-if="isYearlyTime">
              ${{ planItem.billing.yearly.price }}/yr
              <br />
              <small class="info">{{ planItem.billing.yearly.text }}</small>
            </span>
          </span>
        </my-radio>
      </my-radio-group>

      <div class="checkbox-row">
        <span :class="{ active: isMonthlyTime }">Monthly</span>
        <div class="checkbox">
          <input
            type="checkbox"
            id="time-checkbox"
            :checked="isYearlyTime"
            @change="onBillingTimeUpdate"
          />
          <label for="time-checkbox">select</label>
        </div>
        <span :class="{ active: isYearlyTime }">Yearly</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepperMixin } from "@/components/MyStepper";
import { MyMultiStepMixin } from "@/components/MyMultiForm";
import { MyIconAdvanced, MyIconArcade, MyIconPro } from "@/components/icons";
import { MyRadioGroup, MyRadio } from "@/components/form/MyRadioGroup";
import { BILLING_TIME_MONTHLY, BILLING_TIME_YEARLY } from "@/types";
import { plans } from "@/constants";
import type { MyStepperMixinProps } from "@/components/MyStepper";
import type { MyMultiStepMixinProps } from "@/components/MyMultiForm";
import type { FormStep, BillingType } from "@/types";

type MyStepProps = FormStep &
  MyStepperMixinProps &
  MyMultiStepMixinProps & {
    plan: string;
    billingTime: BillingType;
  };

export default defineComponent<MyStepProps, MyStepProps>({
  name: "MyPlanStep",
  mixins: [MyStepperMixin, MyMultiStepMixin],
  components: {
    MyIconAdvanced,
    MyIconArcade,
    MyIconPro,
    MyRadioGroup,
    MyRadio,
  },
  props: {},
  data() {
    return {
      plans,
      plan: this.formData.plan,
      billingTime: this.formData.billingTime,
    };
  },
  methods: {
    isValid() {
      return true;
    },
    getUpdates() {
      return {
        plan: this.plan,
        billingTime: this.billingTime,
      };
    },
    onBillingTimeUpdate(event: any) {
      const { checked } = event.target;
      this.billingTime = checked ? BILLING_TIME_YEARLY : BILLING_TIME_MONTHLY;
    },
  },
  computed: {
    isMonthlyTime() {
      return this.billingTime === BILLING_TIME_MONTHLY;
    },
    isYearlyTime() {
      return this.billingTime === BILLING_TIME_YEARLY;
    },
  },
  watch: {
    formData() {
      this.plan = this.formData.plan;
      this.billingTime = this.formData.billingTime;
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

.radio {
  display: flex;
  align-items: stretch;
  margin-bottom: 32px;
  min-height: 160px;
}

.radio-item {
  display: flex;
  width: 33.3%;
  margin: 0 8px;
}
.radio-item:first-child {
  margin-left: 0;
}
.radio-item:last-child {
  margin-right: 0;
}

.radio-item .icon {
  margin: 10px 0;
}

.radio-item .text {
  font-size: 13px;
}

.radio-item .title {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: var(--my-c-primary-1);
}

.radio-item .info {
  font-size: 12px;
  color: var(--my-c-primary-1);
}

.checkbox-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background: var(--my-c-gray-2);
}

.checkbox-row > span {
  display: block;
  width: 50%;
  transition: color 0.3s ease;
}
.checkbox-row > span.active {
  color: var(--my-c-primary-1);
}
.checkbox-row > span:first-child {
  text-align: right;
}
.checkbox-row > span:last-child {
  text-align: left;
}

.checkbox {
  position: relative;
  flex-shrink: 0;
  margin: 5px 25px;
}

.checkbox input {
  position: absolute;
  top: 0;
}

.checkbox label {
  position: relative;
  display: block;
  width: 38px;
  height: 19px;
  border-radius: 10px;
  background: gray;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-indent: 100px;
}

.checkbox label:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 4px;
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: white;

  transition: transform 0.3s ease;
}

.checkbox input:checked + label:after {
  transform: translateX(17px);
}

.checkbox input:focus {
  outline: none;
}
.checkbox input:focus + label,
.checkbox input:focus-visible + label {
  outline: solid 2px var(--my-c-primary-2);
}
</style>
