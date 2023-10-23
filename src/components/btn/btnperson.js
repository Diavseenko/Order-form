import React from 'react';

export default function Btnperson(props) {
   return (
      <div className="btn-panel">
         <button className={props.valid ? 'btn btn-next-step' : "btn btn-next-step btn-next-step--gray"}
            disabled={!props.valid}
            onClick={() => { props.savePerson(); props.moveBySteps(1, props.number) }}>
            {props.valid ? "Next Step" : "Fill form"}
         </button>
      </div>
   )
};
