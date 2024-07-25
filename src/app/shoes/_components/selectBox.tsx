"use client";

import Select, {StylesConfig} from 'react-select';

const styles: StylesConfig = {
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

export default function SelectBox({items}: any) {
  return (
    <Select
      isMulti
      isSearchable={false}
      options={items}
      className="basic-multi-select mb-5"
      classNamePrefix="select"
      styles={styles}
    />
  )
}