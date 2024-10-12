import { ChangeEvent, createContext, KeyboardEvent, useContext } from "react";

import { OptionItem } from "./types";

interface SelectBoxContextProps {
  isOpen: boolean;
  searchValue: string;
  selectedOptions: string[];
  options: OptionItem[];
  filteredOptions: OptionItem[];
  handleToggle: () => void;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleOptionClick: (option: OptionItem) => void;
  handleAddNewItem: () => void;
  handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
}

export const SelectBoxContext = createContext<SelectBoxContextProps | undefined>(undefined);

export const useSelectBoxContext = (): SelectBoxContextProps => {
  const context = useContext(SelectBoxContext);
  if (!context) {
    throw new Error("SelectBox components must be used within a SelectBox.Root");
  }
  return context;
};
