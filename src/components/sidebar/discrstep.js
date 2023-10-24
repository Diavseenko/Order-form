import React from 'react';
import uuid from 'react-uuid';

import MapsDrop from './mapsDrop';

export default function DiscrStep(props) {
   return (
      <div className="sidebar-item" key={uuid()}>
         <MapsDrop
            key={uuid()}
            steps={props.steps}
            setStep={props.setStep}
            number={props.number}
            active={props.active}

         />
         <div className="sidebar-discription">
            <h3>Step {props.number}</h3>
            <p>{props.discription}</p>
         </div>
      </div>

   )
}
