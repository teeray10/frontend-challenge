"use client";

import Select, {StylesConfig} from 'react-select';

const styles: StylesConfig = {
  singleValue: (styles) => {
    return {
      ...styles,
      color: '#828282'
    }
  },
  option: (styles, {isSelected}) => {
    return {
      ...styles,
      color: isSelected ? '#FFFFFF' : '#828282'
    }
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: '#00A2FF',
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#FFFFFF',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: 'rgba(255,255,255,0.5)',
    ':hover': {
      backgroundColor: '#00B2FFFF',
    },
  }),
  placeholder: (styles) =>  ({
    ...styles,
    color: 'rgba(130, 130, 130, 0.5)',
  })
}

export default function SelectBox({items, isMulti, placeholder}: any) {
  return (
    <Select
      isMulti={isMulti}
      isSearchable={false}
      options={items}
      className="basic-multi-select mb-5"
      classNamePrefix="select"
      placeholder={placeholder}
      styles={styles}
    />
  )
}