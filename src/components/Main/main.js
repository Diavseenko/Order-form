import React from 'react';
import uuid from "react-uuid";

import Header from './header';
import Body from './body';

import "./main.css"

export default function Main(props) {
   return (
      <div className="modal-main">
         {props.steps.map((step) => {
            if (step.active) {
               return (
                  <React.Fragment key={uuid()}>
                     < Header
                        key={uuid()}
                        title={props.steps[step.number - 1].title}
                        thatDo={props.steps[step.number - 1].thatDo}
                     />
                     <Body
                        key={uuid()}
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
                  </React.Fragment>
               )
            } return undefined;
         })}
      </div >
   )
};
