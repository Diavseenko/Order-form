import React from 'react';

import "./btn.css";

export default function BtnPanel(props) {
   const moveBySteps = (num) => {
      const n = props.number + num
      props.setStep(
         props.steps.map((step) => {
            if (step.number === n) { step.active = true } else { step.active = false }
            return step
         })
      )
   };

   const confirm = () => {
      const result = {};
      result.name = props.person.name;
      result.email = props.person.email;
      result.phone = props.person.phone;
      props.selects.map((sel) => {
         if (sel.selected) {
            result.plan = sel.select
         } return sel
      });
      props.addons.map((add, ind) => {
         if (add.selected) {
            result["addon" + ind] = add.nameadd
         } return add
      });
      moveBySteps(1);
      props.saveValid(true, " ", " ", " ")
      alert(JSON.stringify(result));
   };

   if (props.number === 1) {
      return (
         <div className="btn-panel">
            <button className={props.valid ? 'btn btn-next-step' : "btn btn-next-step btn-next-step--gray"}
               disabled={!props.valid}
               onClick={(e) => { moveBySteps(1) }}>
               {props.valid ? "Next Step" : "Fill form"}
            </button>
         </div>
      )
   } else if (props.number === 4) {
      return (
         <div className="btn-panel-two">
            <button className='btn btn-go-back' onClick={() => moveBySteps(-1)}>go Back</button>
            <button className='btn btn-next-step confirm' onClick={() => confirm()}>Confirm</button>
         </div>
      )
   } return (
      <div className="btn-panel-two">
         <button className='btn btn-go-back' onClick={() => moveBySteps(-1)}>go Back</button>
         <button className='btn btn-next-step' onClick={() => moveBySteps(1)}>Next Step</button>
      </div>
   )
};
