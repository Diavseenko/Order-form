import React from 'react';

export default function Btnconfirm(props) {

   return (
      <div className="btn-panel-two">
         <button className='btn btn-go-back' onClick={() => props.moveBySteps(-1, props.number)}>go Back</button>
         <button className='btn btn-next-step confirm' onClick={() => { props.confirm(); props.moveBySteps(1, props.number) }}>Confirm</button>
      </div>
   )
};
