<template>
  <div id="app" class="app">
    <my-steps-nav class="nav" :active-index="activeIndex" />

    <div class="content">
      <div class="wrapper">
        <my-thank-you v-if="showThankYou">
          Thanks for confirming your subscriptioon! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </my-thank-you>

        <my-multi-form
          v-if="!showThankYou"
          class="form"
          ref="multiForm"
          :active-index="activeIndex"
          :form-data="formData"
          @submit="next"
          @goto="goto"
        />

        <my-controls
          v-if="!showThankYou"
          :active-index="activeIndex"
          :final-index="3"
          @prev="prev"
          @next="next"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepsNav } from "@/components/MyStepsNav";
import { MyMultiForm } from "@/components/MyMultiForm";
import { MyControls } from "@/components/MyControls";
import { MyThankYou } from "@/components/MyThankYou";
import { plans, addons } from "@/constants";
import { BILLING_TIME_MONTHLY } from "@/types";
import type { FormData, Plan, AddOn } from "@/types";

const FIRST_STEP = 0;
const LAST_STEP = 3;

type AppProps = {
  activeIndex: number;
  showThankYou: boolean;
  formData: FormData;
  plans: Plan[];
  addons: AddOn[];
};

export default defineComponent<AppProps>({
  components: {
    MyStepsNav,
    MyMultiForm,
    MyControls,
    MyThankYou,
  },
  data() {
    return {
      activeIndex: 0,
      showThankYou: false,
      formData: {
        name: "",
        email: "",
        plan: plans[0].id,
        billingTime: BILLING_TIME_MONTHLY,
        addons: [addons[0].id, addons[1].id],
      },
    };
  },
  methods: {
    next() {
      const multiForm = this.$refs.multiForm as unknown as typeof MyMultiForm;
      if (!multiForm) {
        return;
      }
      const isValid = multiForm.isActiveStepValid();
      if (isValid) {
        const updates = multiForm.getActiveStepUpdates();
        if (updates) {
          this.formData = { ...this.formData, ...updates };
        }
        if (this.activeIndex === LAST_STEP) {
          this.showThankYou = true;
          return;
        }
        this.activeIndex = this.activeIndex + 1;
      }
    },
    prev() {
      const multiForm = this.$refs.multiForm as unknown as typeof MyMultiForm;
      if (!multiForm) {
        return;
      }
      if (this.activeIndex === FIRST_STEP) {
        return;
      }
      this.activeIndex = this.activeIndex - 1;
    },
    goto(index: number) {
      this.activeIndex = index;
    },
  },
});
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 15px;
  border-radius: 15px;
  background: var(--my-c-gray-1);
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 450px;
  margin: 0 auto;
}

.nav {
  width: 275px;
  min-height: 570px;
  flex-shrink: 0;
  margin-right: 15px;
}

.content {
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
  width: 620px;
}

.form {
  min-height: 465px;
  flex-grow: 1;
}
</style>
