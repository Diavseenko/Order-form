import React, { useState } from 'react'

import SideBar from './sidebar/sidebar';
import Main from './main/main';
import BtnPanel from './btn/btnPanel';
import "./App.css";

export default function App() {
   let [valid, setValid] = useState(false);

   const [person, setPerson] = useState({
      name: "",
      email: "",
      phone: "",
   });

   const [selects, setSelect] = useState([
      { id: 1, selected: true, src: "./images/icon-arcade.svg", select: "Arcade", pricem: 9, mon: "/mon", price: 90, yr: "/yr", add: "2 months free", },
      { id: 2, selected: false, src: "./images/icon-advanced.svg", select: "Advanst", pricem: 12, mon: "/mon", price: 120, yr: "/yr", add: "2 months free" },
      { id: 3, selected: false, src: "./images/icon-pro.svg", select: "Pro", pricem: 15, mon: "/mon", price: 150, yr: "/yr", add: "2 months free" },
   ]);

   const [addons, setAddons] = useState([
      { id: 1, selected: false, nameadd: "Online service", aboutadd: "Accsess to multiplayer games", addprice: 10, yr: "/yr", addpricem: 1, mon: "/mon" },
      { id: 2, selected: false, nameadd: "Larger storage", aboutadd: "Extra 1TB of cloud save", addprice: 20, yr: "/yr", addpricem: 2, mon: "/mon" },
      { id: 3, selected: false, nameadd: "Customizable profile", aboutadd: "Custom theme on youre profile", addprice: 20, yr: "/yr", addpricem: 2, mon: "/mon" },
   ]);

   const [steps, setStep] = useState([

      { id: 1, number: 1, active: true, discription: "YORE INFO", title: "Personal info", thatDo: "Please provide youre name, Email address and phone number.", yearly: false },
      { id: 2, number: 2, active: false, discription: "SELECT PLAN", title: "Select youre plan", thatDo: "You have the option of mountly or early biling.", yearly: false },
      { id: 3, number: 3, active: false, discription: "ADD-ONS", title: "Pick add-ons", thatDo: "Add-ons help enhance your gaming expearence.", yearly: false },
      { id: 4, number: 4, active: false, discription: "SUMMARU", title: "Finishing up", thatDo: "Doble-check everything looks OK before confirming.", yearly: false },
      { id: 5, number: 5, active: false, discription: "THANK YOU!", title: "", thatDo: "", yearly: false },
   ]);

   const saveValid = (bool, name, email, phone) => {
      if (bool) {
         setPerson({
            ...person,
            name: name,
            email: email,
            phone: phone,
         });
      } setPerson({
         ...person,
      })
   };

   return (
      <div className="container">
         <div className='app-modal'>
            <SideBar
               steps={steps}
               setStep={setStep}
            />
            <div className="main-wrap">
               <Main
                  valid={valid}
                  setValid={setValid}
                  saveValid={saveValid}
                  steps={steps}
                  setStep={setStep}
                  addons={addons}
                  setAddons={setAddons}
                  selects={selects}
                  setSelect={setSelect}
                  yearly={steps[0].yearly}
                  person={person}
                  setPerson={setPerson}
               />
               {steps.map((step) => {
                  if (step.active && step.id > 0 && step.id < 5) {
                     return (
                        <BtnPanel
                           selects={selects}
                           addons={addons}
                           valid={valid}
                           steps={steps}
                           setStep={setStep}
                           saveValid={saveValid}
                           person={person}
                           number={step.number}
                        />
                     )
                  }
               })}
            </div>
         </div>
      </div>
   )
}