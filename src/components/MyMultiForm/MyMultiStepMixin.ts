import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { FormData } from "@/types";

export type MyMultiStepMixinProps = {
  formData: FormData;
};

export const MyMultiStepMixin = defineComponent<MyMultiStepMixinProps>({
  props: {
    formData: {
      type: Object as PropType<FormData>,
      required: true,
    },
  },
  methods: {
    isValid() {
      throw new Error('"isValid" should be defined for each step');
    },
    getUpdates() {
      throw new Error('"getUpdates" should be defined for each step');
    },
  },
});

export default MyMultiStepMixin;
