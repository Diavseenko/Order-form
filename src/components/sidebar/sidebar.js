import React from 'react';

import DiscrStep from './discrstep';

import "./sidebar.css";

export default function SideBar(props) {
   return (
      <div className='side-bar'>
         <div className="sidebar-items">
            {props.steps.map((step) => {
               if (step.number < 5) {
                  return (
                     <DiscrStep
                        key={step.id}
                        steps={props.steps}
                        setStep={props.setStep}
                        discription={step.discription}
                        number={step.number}
                        active={step.active}
                        changeStep={props.changeStep}
                     />
                  )
               } return
            })}
         </div>
      </div>
   )
};