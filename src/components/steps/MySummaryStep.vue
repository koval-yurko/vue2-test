<template>
  <div class="form-step step" v-if="isActive">
    <h2 class="head">Finishing up</h2>
    <p>Double-check everything looks OK before confirming.</p>

    <div class="form">
      <div class="box">
        <div class="wrapper">
          <div class="row">
            <div class="cell">
              <span class="title"
                >{{ planInfo.title }} ({{ billingTimeName }})</span
              >
              <br />
              <a class="link" @click.prevent="goToPlan">Change</a>
            </div>
            <div class="cell title">
              <span v-if="isMonthlyTime">
                ${{ planInfo.billing.monthly.price }}/mo
              </span>
              <span v-if="isYearlyTime">
                ${{ planInfo.billing.yearly.price }}/yr
              </span>
            </div>
          </div>

          <div v-if="addonsInfo" class="addons">
            <div class="row" v-for="addon of addonsInfo" :key="addon.id">
              <div class="cell">{{ addon.title }}</div>
              <div class="cell">
                <span v-if="isMonthlyTime">
                  +${{ addon.billing.monthly.price }}/mo
                </span>
                <span v-if="isYearlyTime">
                  +${{ addon.billing.yearly.price }}/yr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <div class="row">
          <div class="cell">{{ totalInfo.title }}</div>
          <div class="cell total">
            <span v-if="isMonthlyTime">
              +${{ totalInfo.billing.monthly }}/mo
            </span>
            <span v-if="isYearlyTime">
              ${{ totalInfo.billing.yearly }}/yr
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepperMixin } from "@/components/MyStepper";
import { MyMultiStepMixin } from "@/components/MyMultiForm";
import { plans, addons } from "@/constants";
import { BILLING_TIME_MONTHLY, BILLING_TIME_YEARLY } from "@/types";
import type { MyStepperMixinProps } from "@/components/MyStepper";
import type { MyMultiStepMixinProps } from "@/components/MyMultiForm";
import type { BillingType, FormStep } from "@/types";

type MyStepProps = FormStep &
  MyStepperMixinProps &
  MyMultiStepMixinProps & {
    plan: string;
    billingTime: BillingType;
  };

export default defineComponent<MyStepProps>({
  name: "MySummaryStep",
  mixins: [MyStepperMixin, MyMultiStepMixin],
  props: {},
  methods: {
    isValid() {
      return true;
    },
    goToPlan() {
      this.$multiForm.goto(1);
    },
  },
  computed: {
    isMonthlyTime() {
      return this.formData.billingTime === BILLING_TIME_MONTHLY;
    },
    isYearlyTime() {
      return this.formData.billingTime === BILLING_TIME_YEARLY;
    },
    billingTimeName() {
      return this.formData.billingTime === BILLING_TIME_MONTHLY
        ? "Monthly"
        : "Yearly";
    },
    planInfo() {
      return plans.find((p) => p.id === this.formData.plan);
    },
    addonsInfo() {
      const addonsInfo = addons.filter(
        (a) => this.formData.addons.indexOf(a.id) !== -1
      );
      return addonsInfo.length ? addonsInfo : undefined;
    },
    totalInfo() {
      const titleInfo =
        this.formData.billingTime === BILLING_TIME_MONTHLY
          ? "per month"
          : "per year";

      const planInfo = plans.find((p) => p.id === this.formData.plan);
      const addonsInfo = addons.filter(
        (a) => this.formData.addons.indexOf(a.id) !== -1
      );

      const billing = {
        monthly: planInfo ? planInfo.billing.monthly.price : 0,
        yearly: planInfo ? planInfo.billing.yearly.price : 0,
      };

      addonsInfo.forEach((addon) => {
        billing.monthly += addon.billing.monthly.price;
        billing.yearly += addon.billing.yearly.price;
      });

      return {
        title: `Total (${titleInfo})`,
        billing,
      };
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
  font-size: 14px;
}

.wrapper {
  padding: 0 20px;
}

.box {
  margin-bottom: 10px;
  padding: 12px 0 9px;
  background: var(--my-c-gray-2);
  border-radius: 10px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
}

.title {
  font-size: 16px;
  font-weight: 700;
  color: var(--my-c-primary-1);
}

.addons {
  margin-top: 10px;
  padding-top: 10px;
  border-top: solid 1px var(--my-c-gray-4);
}

.total {
  font-size: 19px;
  font-weight: 700;
  color: var(--my-c-primary-2);
}

.link {
  text-decoration: underline;
  cursor: pointer;
}
.link:hover {
  color: var(--my-c-primary-2);
}
</style>
