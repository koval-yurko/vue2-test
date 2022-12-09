<template>
  <div id="app" class="app">
    <my-steps-nav class="nav" :active-index="activeIndex" />

    <div class="content">
      <div class="wrapper">
        <my-multi-form
          class="form"
          ref="multiForm"
          :active-index="activeIndex"
          :form-data="formData"
          @submit="next"
        />

        <my-controls
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
import { plans } from "@/constants";
import { BILLING_TIME_MONTHLY } from "@/types";
import type { FormData, Plan, AddOn } from "@/types";

const FIRST_STEP = 0;
const LAST_STEP = 3;

type AppProps = {
  activeIndex: number;
  formData: FormData;
  plans: Plan[];
  addons: AddOn[];
};

export default defineComponent<AppProps>({
  components: {
    MyStepsNav,
    MyMultiForm,
    MyControls,
  },
  data() {
    return {
      activeIndex: 3,
      formData: {
        name: "",
        email: "",
        plan: plans[0].id,
        billingTime: BILLING_TIME_MONTHLY,
        addons: [],
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

.nav {
  width: 275px;
  flex-shrink: 0;
  margin-right: 15px;
}

.content {
  width: 620px;
  flex-shrink: 0;
}

.form {
  min-height: 490px;
}
</style>
