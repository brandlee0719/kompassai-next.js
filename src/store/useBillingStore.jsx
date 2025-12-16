import { create } from "zustand";
import { devtools } from "zustand/middleware";

const defaultPrices = {
  main: null,
  phones: null,
  emails: null,
  validations: null,
};

const useBillingStore = create(
  devtools((set) => ({
    selectedPrices: defaultPrices,
    redirect: false, //route path like 'billingpay'
    changePrices: (update) =>
      set((state) => {
        return { selectedPrices: { ...state.selectedPrices, ...update } };
      }),
    cleanPrices: () => set({ selectedPrices: defaultPrices }),
    setRedirect: (value) => set({ redirect: value }),
  })),
);
export default useBillingStore;
