import type { Plan, AddOn } from "@/types";

export const plans: Plan[] = [
  {
    id: "arcade",
    title: "Arcade",
    icon: "MyIconArcade",
    billing: {
      monthly: {
        price: 9,
      },
      yearly: {
        price: 90,
        text: "2 months free",
      },
    },
  },
  {
    id: "advanced",
    title: "Advanced",
    icon: "MyIconAdvanced",
    billing: {
      monthly: {
        price: 12,
      },
      yearly: {
        price: 120,
        text: "2 months free",
      },
    },
  },
  {
    id: "pro",
    title: "Pro",
    icon: "MyIconPro",
    billing: {
      monthly: {
        price: 15,
      },
      yearly: {
        price: 150,
        text: "2 months free",
      },
    },
  },
];

export const addons: AddOn[] = [
  {
    id: "services",
    title: "Online services",
    body: "Access to multiple games",
    billing: {
      monthly: {
        price: 1,
      },
      yearly: {
        price: 10,
      },
    },
  },
  {
    id: "storage",
    title: "Large storage",
    body: "Extra 1TB of cloud save",
    billing: {
      monthly: {
        price: 2,
      },
      yearly: {
        price: 20,
      },
    },
  },
  {
    id: "profile",
    title: "Customizable Profile",
    body: "Custom theme on your profile",
    billing: {
      monthly: {
        price: 2,
      },
      yearly: {
        price: 20,
      },
    },
  },
];
