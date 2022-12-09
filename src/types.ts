export const BILLING_TIME_MONTHLY = "monthly";
export const BILLING_TIME_YEARLY = "yearly";

export type BillingType =
  | typeof BILLING_TIME_MONTHLY
  | typeof BILLING_TIME_YEARLY;

export type BillingInfo = {
  price: number;
  text?: string;
};

export type BillingItem = {
  billing: Record<BillingType, BillingInfo>;
};

export type Plan = BillingItem & {
  id: string;
  title: string;
  icon: string;
};

export type AddOn = BillingItem & {
  id: string;
  title: string;
  body: string;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  billingTime: BillingType;
  addons: string[];
};

export interface FormStep {
  index: number;
  isValid(): boolean;
  getUpdates(): Partial<FormData>;
}
