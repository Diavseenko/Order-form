import React from 'react';
import uuid from 'react-uuid';

export default function BtnPerson(props) {
   return (
      <div className="btn-panel" key={uuid()}>
         <button className={props.valid ? 'btn btn-next-step' : "btn btn-next-step btn-next-step--gray"}
            disabled={!props.valid}
            onClick={() => { props.savePerson(); props.moveBySteps(1, props.number) }}>
            {props.valid ? "Next Step" : "Fill form"}
         </button>
      </div>
   )
};
