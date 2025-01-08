import dropDownStyle from './DropdownList.style.module.css';
import { JSX } from 'preact';

export interface DropDownListProps<ValueType> {
  tipText?: string;
  optionValue?: Array<{ option: any; value: ValueType }>;
  value?: ValueType;
  onChange?: (value: ValueType) => void;
}

export function DropDownList<ValueType extends string | number>(
  props: DropDownListProps<ValueType>,
): JSX.Element {
  return (
    <>
      <span>{props.tipText}</span>
      <select
        class={dropDownStyle.dropDown}
        value={props.value}
        onChange={(e: any) => {
          props.onChange?.(e.target.value);
        }}
      >
        {props.optionValue !== undefined
          ? props.optionValue.map((e) => (
              <option key={e.value} value={e.value}>
                {e.option}
              </option>
            ))
          : null}
      </select>
    </>
  );
}
