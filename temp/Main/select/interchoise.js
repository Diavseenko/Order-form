import React from 'react';

export default function InterChoise(props) {

   const setSwitch = () => {
      props.setStep(
         props.steps.map((step) => {
            step.yearly = !step.yearly
            return step
         })
      )
   };

   return (
      <div className="select-choise">
         <div className={props.yearly ? "checkbox__month--gray" : "checkbox__month"}>Monthly</div>
         <label className="checkbox style-e">
            <input type="checkbox" checked={props.yearly} onChange={() => setSwitch()} />
            <div className="checkbox__checkmark"></div>
         </label>
         <div className={props.yearly ? "checkbox__year" : "checkbox__year--gray"}>Yearly</div>
      </div>
   )
}
