import React from 'react'

export default function MapsDrop(props) {
   const changeStep = (number) => {

      props.setStep(
         props.steps.map((step) => {
            if (step.number === number) { step.active = true } else { step.active = false }
            return step
         })
      )
   }

   return (
      <div className='drop'>
         <span className={props.active ? "map-drop active" : "map-drop"} onClick={() => changeStep(props.number)}>{props.number}</span>
      </div >
   )
};
