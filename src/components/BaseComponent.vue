<template>
  <div>Some text {{ name }}, {{ temp }}, {{ clonedName }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "BaseComponent",
  props: {
    name: {
      type: String as PropType<string>,
      // required: true,
      default: "aaa",
    },
  },
  data() {
    return {
      clonedName: this.name,
    };
  },
  computed: {
    temp() {
      return `${this.name}ccc`;
    },
  },
});
</script>

<style scoped>
div {
  width: 100%;
  border-bottom: solid 1px black;
}
</style>
