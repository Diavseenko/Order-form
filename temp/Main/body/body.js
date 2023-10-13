import React from 'react';

import BodyPerson from './bodyperson';
import BodySelect from './bodyselect';
import InterChoise from './interchoise';
import BodyAddons from './bodyaddons';
import BodyFinish from './bodyfinish';
import Finishmess from './finishmess';

// import "./bodyselect.css";

export default function Body(props) {

   switch (props.step) {
      case 0:
         return (
            <BodyPerson
               valid={props.valid}
               setValid={props.setValid}
               saveValid={props.saveValid}
               number={props.number}
               onChangePerson={props.onChangePerson}
               onSubmit={props.onSubmit}
               person={props.person}
               setPerson={props.setPerson}
               steps={props.steps}
               setStep={props.setStep}
            />
         )
      case 1:
         return (
            <div className="select">
               <div className="select-body">
                  <div className="select-items">
                     {
                        props.selects.map((sel) => {
                           if (props.yearly) {
                              return (
                                 <BodySelect
                                    selects={props.selects}
                                    setSelect={props.setSelect}
                                    id={sel.id}
                                    key={sel.id}
                                    src={sel.src}
                                    select={sel.select}
                                    selected={sel.selected}
                                    price={sel.price}
                                    rate={sel.yr}
                                    add={sel.add}
                                 />
                              )
                           } return (
                              <BodySelect
                                 selects={props.selects}
                                 setSelect={props.setSelect}
                                 key={sel.id}
                                 id={sel.id}
                                 src={sel.src}
                                 select={sel.select}
                                 selected={sel.selected}
                                 price={sel.pricem}
                                 rate={sel.mon}
                              />
                           )
                        })
                     }
                  </div>
                  <InterChoise
                     yearly={props.yearly}
                     steps={props.steps}
                     setStep={props.setStep}
                  />
               </div>
            </div>
         )
      case 2:
         return (
            <div className="addons">
               <div className="addons-items">
                  {
                     props.addons.map((add) => {
                        if (props.yearly) {
                           return (
                              <BodyAddons
                                 key={add.id}
                                 id={add.id}
                                 addons={props.addons}
                                 setAddons={props.setAddons}
                                 selected={add.selected}
                                 name={add.nameadd}
                                 about={add.aboutadd}
                                 price={add.addprice}
                                 rate={add.yr}
                              />
                           )
                        } return (
                           <BodyAddons
                              key={add.id}
                              id={add.id}
                              addons={props.addons}
                              setAddons={props.setAddons}
                              selected={add.selected}
                              name={add.nameadd}
                              about={add.aboutadd}
                              price={add.addpricem}
                              rate={add.mon}
                           />
                        )
                     })
                  }
               </div>
            </div>
         )
      case 3:
         return (
            <div className="finish">
               < BodyFinish
                  selects={props.selects}
                  addons={props.addons}
                  steps={props.steps}
                  number={props.number}
                  setStep={props.setStep}
                  result={props.result}
                  yearly={props.yearly}
               />
            </div>
         )
      case 4:
         return (
            <Finishmess />
         )

   }

}
