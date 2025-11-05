import React from "react";
import { create } from "zustand";

//zutand color aria

interface IphoneAria {
  color: string;
  setColor: (color: string) => void;

  reset: () => void;
}

const useIphoneAria = create<IphoneAria>((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),

  reset: () => set({ color: "#2e2c2e" }),
}));

export default useIphoneAria;
