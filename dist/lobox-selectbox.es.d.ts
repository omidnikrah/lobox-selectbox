import { JSX as JSX_2 } from 'react/jsx-runtime';
import { OptionItem } from './types';

export { OptionItem }

export declare const SelectBox: ({ name, defaultValue, options, onAddNewItem, onChange }: SelectBoxProps) => JSX_2.Element;

declare interface SelectBoxProps {
    name: string;
    defaultValue?: string[];
    options: OptionItem[];
    onAddNewItem: (option: OptionItem) => void;
    onChange?: (option: OptionItem) => void;
}

export { }
