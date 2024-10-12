import { createContext, useContext } from "react";

import type { SelectBoxContextProps } from "./types";

export const SelectBoxContext = createContext<SelectBoxContextProps | undefined>(undefined);

export const useSelectBoxContext = (): SelectBoxContextProps => {
  const context = useContext(SelectBoxContext);
  if (!context) {
    throw new Error("SelectBox components must be used within a SelectBox.Root");
  }
  return context;
};
