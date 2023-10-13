import React, { useState } from 'react'

export default function useInput(initialvalue) {

   const [value, setValue] = useState(initialvalue);

   const onChange = (e) => {
      setValue(e.target.value)
   }
   const onFocus = (e) => {
      setValue(e.target.value);


   }
   return { value, onChange, onFocus }
}
