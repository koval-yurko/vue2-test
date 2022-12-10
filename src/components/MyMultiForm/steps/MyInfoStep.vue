<template>
  <div class="form-step step" v-if="isActive">
    <h2 class="head">Personal info</h2>
    <p>Please provide your name, email address and phone number</p>

    <div class="form">
      <my-input label="Name" type="text" v-model="name" :error="nameError" />
      <my-input
        label="Email Address"
        type="text"
        v-model="email"
        :error="emailError"
      />
      <my-input
        label="Phone Number"
        type="text"
        v-model="phone"
        :error="phoneError"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyStepperMixin } from "@/components/MyStepper";
import { MyMultiStepMixin } from "@/components/MyMultiForm/MyMultiStepMixin";
import { MyInput } from "@/components/form/MyInput";
import type { MyStepperMixinProps } from "@/components/MyStepper";
import type { MyMultiStepMixinProps } from "@/components/MyMultiForm";
import type { FormStep } from "@/types";

type MyStepProps = FormStep &
  MyStepperMixinProps &
  MyMultiStepMixinProps & {
    name: string;
    nameError: string;
    email: string;
    emailError: string;
    phone: string;
    phoneError: string;
  };

export default defineComponent<MyStepProps, MyStepProps>({
  name: "MyInfoStep",
  mixins: [MyStepperMixin, MyMultiStepMixin],
  components: { MyInput },
  props: {},
  data() {
    return {
      name: this.formData.name,
      nameError: "",
      email: this.formData.email,
      emailError: "",
      phone: this.formData.phone,
      phoneError: "",
    };
  },
  methods: {
    isValid() {
      let isValid = true;
      if (!this.name) {
        this.nameError = "Name is required";
        isValid = false;
      }
      if (!this.email) {
        this.emailError = "Email is required";
        isValid = false;
      }
      if (!this.phone) {
        this.phoneError = "Phone is required";
        isValid = false;
      }
      return isValid;
    },
    getUpdates() {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };
    },
  },
  watch: {
    name() {
      this.nameError = "";
    },
    email() {
      this.emailError = "";
    },
    phone() {
      this.phoneError = "";
    },
    formData() {
      this.name = this.formData.name;
      this.email = this.formData.email;
      this.phone = this.formData.phone;
    },
  },
});
</script>

<style scoped></style>
