import { JSX as JSX_2 } from 'react/jsx-runtime';
import { OptionItem } from './types';

export { OptionItem }

export declare const SelectBox: ({ name, options, onAddNewItem }: SelectBoxProps) => JSX_2.Element;

declare interface SelectBoxProps {
    name: string;
    options: OptionItem[];
    onAddNewItem: (option: OptionItem) => void;
}

export { }
