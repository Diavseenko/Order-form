import React, { useEffect, useState } from 'react';
import useInput from '../hooks/useinput';

import "./bodyperson.css";

export default function BodyPerson(props) {
   console.log(props.valid)
   const inputName = useInput(props.person.name);
   const inputEmail = useInput(props.person.email);
   const inputPhone = useInput(props.person.phone);
   const regName = new RegExp(/^[a-zA-z]{2,16}$/);
   const regEmail = new RegExp(/.+@.+\..+/i);
   const regPhone = new RegExp(/^((\+)[ ]?)?(\(?\d{3,4}\)?[ ]?)?[\d\- ]{5,10}$/);
   const valName = regName.test(inputName.value);
   const valEmail = regEmail.test(inputEmail.value);
   const valPhone = regPhone.test(inputPhone.value);
   const valForm = valName && valEmail && valPhone;
   console.log(valForm);

   // console.log(valForm);

   useEffect(() => {
      console.log("hi1");
      if (valForm && !props.valid) {
         props.setPerson({
            ...props.person,
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
         });
         console.log("hi2");
         return props.setValid(true);
      } else if (!valForm && props.valid) {
         props.setPerson({
            ...props.person,
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
         });
         return props.setValid(false);
      } return

   }, [valForm]);

   return (
      <form className="person-form">
         <div className="person-input">
            <label className="label" htmlFor="name"><span>Name</span><span className="notice-name">{valName ? "" : "Enter correct name"}</span></label>
            <input className={regName.test(inputName.value) ? "person" : "person atantion"} name="name" id="name" {...inputName} ></input>

            <label className="label" htmlFor="email"><span>Email Address</span><span className="notice-email">{valEmail ? "" : "Enter correct email"}</span></label>
            <input input className={regEmail.test(inputEmail.value) ? "person" : "person atantion"} type="email" name="email" id="email" {...inputEmail}></input>

            <label className="label" htmlFor="phone"><span>Phone Number</span><span className="notice-phone">{valPhone ? "" : "Enter correct phone"}</span></label>
            <input className={regPhone.test(inputPhone.value) ? "person" : "person atantion"} type="phone" name="phone" id="phone" {...inputPhone}></input>
         </div>
      </form>
   )
};
