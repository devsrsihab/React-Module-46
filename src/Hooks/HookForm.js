import { useState } from "react";

const useInputeSate = (defaultValue = "") => {


  const [value, setValue] = useState(defaultValue);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

  const onChange = (e) => {
    setValue(e.target.value);
  }
//   return [value , handleChange] 
  return {value , onChange}
};
export default useInputeSate

/**
 * 1. define a default value for the input
 * 2. define a hanlder for the input
 */
