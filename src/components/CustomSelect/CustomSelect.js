import React from 'react';

export default function CustomSelect({ selectProps }) {
  /*  const selectProp = {
    selectName: 'A name',
    classSelect: 'choose',
    selectTitle: 'Choose a section',
    classTitle: 'Classname Title',
    classOption: 'classname for the opcion"
    optionValues: []
  };   PropTypes */

  return (
    <select name={selectProps.selectName} className={selectProps.classSelect} defaultValue="">
      <option value="" disabled className={selectProps.classTitle}>
        {selectProps.selectTitle}
      </option>
      {selectProps.optionValues.map((value) => (
        <option key={`${value}-id`} value={value} className={selectProps.classOption}>
          {value}
        </option>
      ))}
    </select>
  );
}
