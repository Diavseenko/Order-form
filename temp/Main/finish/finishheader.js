import React from 'react'

function Finishheader(props) {

   const moveBySteps = (num) => {
      const n = props.number + num
      props.setStep(
         props.steps.map((step) => {
            if (step.number === n) { step.active = true } else { step.active = false }
            return step
         })
      )
   };
   return (
      <div className="finish-header">
         <div>
            <h5>{props.select} ({props.period})</h5>
            <p className="finish-change" onClick={() => moveBySteps(-2)}>Change</p>
         </div>
         <div className="finish-price">${props.price}{props.per}</div>
      </div>
   )
}

export default Finishheader