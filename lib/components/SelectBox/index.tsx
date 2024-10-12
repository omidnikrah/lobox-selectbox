import { LoboxSelectbox } from "./components";
import type { OptionItem } from "./components";

interface SelectBoxProps {
  name: string;
  defaultValue?: string[];
  options: OptionItem[];
  onAddNewItem: (option: OptionItem) => void;
  onChange?: (option: OptionItem) => void;
}

export const SelectBox = ({ name, defaultValue, options, onAddNewItem, onChange }: SelectBoxProps) => {
  return (
    <LoboxSelectbox.Root
      name={name}
      defaultValue={defaultValue}
      options={options}
      onAddNewItem={onAddNewItem}
      onChange={onChange}
    >
      <LoboxSelectbox.Trigger />
      <LoboxSelectbox.Options />
    </LoboxSelectbox.Root>
  );
};
