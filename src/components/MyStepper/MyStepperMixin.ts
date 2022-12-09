import { defineComponent } from "vue";
import type { MyStepper } from "@/components/MyStepper";
import type { PropType } from "vue";

export type MyStepperMixinProps = {
  index: number;
  $stepper: typeof MyStepper;

  isActive: boolean;
};

export const MyStepperMixin = defineComponent<MyStepperMixinProps>({
  props: {
    index: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  inject: {
    $stepper: {
      from: "$stepper",
      default: {},
    },
  },
  computed: {
    isActive() {
      return this.$stepper.activeIndex === this.index;
    },
  },
});

export default MyStepperMixin;
