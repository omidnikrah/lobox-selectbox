import { LoboxSelectbox } from "./components";
import type { OptionItem } from "./components";

interface SelectBoxProps {
  name: string;
  options: OptionItem[];
  onAddNewItem: (option: OptionItem) => void;
}

export const SelectBox = ({ name, options, onAddNewItem }: SelectBoxProps) => {
  return (
    <LoboxSelectbox.Root name={name} options={options} onAddNewItem={onAddNewItem}>
      <LoboxSelectbox.Trigger />
      <LoboxSelectbox.Options />
    </LoboxSelectbox.Root>
  );
};
