/* eslint-disable import/no-anonymous-default-export */

// Modules
import React from "react";

// CSS
import "./select.scss";

// Component
export default ({options= [], label= "", onChangeSelect}) => {

  const testname = "select-test-id-"+label;

  return (    
    <>

      <label>{label}:</label>

      <select data-test-id={testname} name={label} id={label} onChange={onChangeSelect} defaultValue={options.length === 1 ? options[0].name : ''}>
          

          {options && options.length > 1 && (
              <option id="-1" value="-1">Select an option</option>
          )}
          
          {options && options.map((value, index) => (
              <option key={index}  id={value.code} value={value.name}>{value.name}</option>
          ))}

      </select>

    </>

  );
};