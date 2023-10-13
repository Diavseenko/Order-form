import React from 'react';

import Header from './header';
import Body from './body';

import "./main.css"

export default function Main(props) {
   return (
      <div className="modal-main">
         {props.steps.map((step) => {
            if (step.active === true) {
               return (
                  <>
                     <Header
                        title={props.steps[step.number - 1].title}
                        thatDo={props.steps[step.number - 1].thatDo}
                     />
                     <Body
                        valid={props.valid}
                        setValid={props.setValid}
                        saveValid={props.saveValid}
                        number={step.number}
                        step={step.number - 1}
                        steps={props.steps}
                        setStep={props.setStep}
                        yearly={step.yearly}
                        addons={props.addons}
                        setAddons={props.setAddons}
                        selects={props.selects}
                        setSelect={props.setSelect}
                        result={props.result}
                        person={props.person}
                        setPerson={props.setPerson}
                     />
                  </>
               )
            }
         })}
      </div>
   )
};
