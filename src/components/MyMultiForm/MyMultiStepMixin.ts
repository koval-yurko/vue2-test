import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { FormData } from "@/types";

export type MyMultiStepMixinProps = {
  formData: FormData;
  $multiForm: { goto(index: number): void };
};

export const MyMultiStepMixin = defineComponent<MyMultiStepMixinProps>({
  props: {
    formData: {
      type: Object as PropType<FormData>,
      required: true,
    },
  },
  inject: {
    $multiForm: {
      from: "$multiForm",
      default: {},
    },
  },
  methods: {
    isValid() {
      throw new Error('"isValid" should be defined for each step');
    },
    getUpdates() {
      return undefined;
    },
  },
});

export default MyMultiStepMixin;
