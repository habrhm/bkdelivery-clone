import { create } from "zustand";

interface Store {
  menuDrawerOpen: boolean;
  setMenuDrawerOpen: (open: boolean) => void;
}

export const useStateStore = create<Store>()((set) => ({
  menuDrawerOpen: false,
  setMenuDrawerOpen: (open) => {
    set({ menuDrawerOpen: open });
  },
}));
