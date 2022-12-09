<template>
  <div class="step" :class="{ active: isActive }">
    <div class="number">{{ index + 1 }}</div>
    <div>
      <div class="label">Step {{ index + 1 }}</div>
      <div class="title"><slot></slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepperMixin } from "@/components/MyStepper";
import type { PropType } from "vue";

type MyStepProps = {
  index: number;
};

export default defineComponent<MyStepProps>({
  name: "MyStep",
  mixins: [MyStepperMixin],
  props: {},
  data() {
    return {
      // clonedName: this.name,
    };
  },
});
</script>

<style scoped>
.step {
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: var(--my-c-gray-1);
}

.number {
  margin: 0 16px;
  width: 32px;
  height: 32px;
  font-size: 13px;
  line-height: 32px;
  font-weight: 700;
  border: solid 1px var(--my-c-gray-1);
  border-radius: 50%;
  text-align: center;
  transition: color 0.3s ease, background 0.3s ease;
}

.label {
  color: var(--my-c-gray-5);
  font-size: 12px;
  text-transform: uppercase;
}

.title {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.step.active .number {
  background: var(--my-c-primary-4);
  color: var(--my-c-primary-2);
}
</style>
