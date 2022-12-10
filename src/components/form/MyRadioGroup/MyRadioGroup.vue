<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

type MyRadioGroupProps = {
  value: string;
  name?: string;
};

export default defineComponent<MyRadioGroupProps, MyRadioGroupProps>({
  name: "MyRadioGroup",
  props: {
    name: {
      type: String as PropType<string>,
      required: false,
    },
  },
  data() {
    console.log(this);
    return {
      value: this.$attrs.value,
    };
  },
  created() {
    this.$on("input", function (...args: any[]) {
      console.log("on input", args);
    });
    this.$on("change", function (...args: any[]) {
      console.log("on change", args);
    });
  },
  provide() {
    return {
      $radioGroup: this,
    };
  },
  methods: {
    toggle(value: string) {
      this.value = value;
    },
  },
  computed: {},
  watch: {
    value() {
      this.$emit("input", this.value);
    },
    "$attrs.value"() {
      // notify children (done)
      this.value = this.$attrs.value;
    },
  },
});
</script>

<style scoped>
.radio-group {
}
</style>
