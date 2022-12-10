<template>
  <button
    class="button"
    :class="{ link: !!link }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

type MyButtonProps = {
  link?: boolean;
};

export default defineComponent<MyButtonProps>({
  name: "MyButton",
  props: {
    link: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
});
</script>

<style scoped>
.button {
  margin: 0;
  padding: 13px 23px 15px;
  font-size: 17px;
  font-family: var(--font-family-main);
  background: var(--botton-color);
  color: var(--my-c-gray-1);
  border-radius: 8px;
  cursor: pointer;
  appearance: none;
  border: none;

  transition: color 0.3s ease, background 0.3s ease;
}
.button:hover {
  background: var(--botton-color-hover);
}

.button.link {
  padding: 3px 0;
  background: none;
  color: var(--botton-link-color);
}
.button.link:hover {
  background: none;
  color: var(--botton-link-color-hover);
}
</style>
