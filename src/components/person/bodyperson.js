import React, { useEffect } from 'react';
import useInput from '../hooks/useinput';

import "./bodyperson.css";

export default function BodyPerson(props) {

   const inputName = useInput(props.person.name.toString());
   const inputEmail = useInput(props.person.email.toString());
   const inputPhone = useInput(props.person.phone.toString());
   const regName = new RegExp(/^[a-zA-z]{2,16}$/);
   const regEmail = new RegExp(/.+@.+\..+/i);
   const regPhone = new RegExp(/^((\+)[ ]?)?(\(?\d{3,4}\)?[ ]?)?[\d\- ]{5,10}$/);
   const valNameForm = regName.test(inputName.value);
   const valEmailForm = regEmail.test(inputEmail.value);
   const valPhoneForm = regPhone.test(inputPhone.value);
   const valName = () => {
      if (inputName.value.length > 1) {
         if (regName.test(inputName.value)) {
            return true;
         } return false;
      } return true;
   };
   const valEmail = () => {
      if (inputEmail.value.length > 1) {
         if (regEmail.test(inputEmail.value)) {
            return true;
         } return false;
      } return true;
   };
   const valPhone = () => {
      if (inputPhone.value.length > 1) {
         if (regPhone.test(inputPhone.value)) {
            return true;
         } return false;
      } return true;
   };

   const valForm = valNameForm && valEmailForm && valPhoneForm;
   useEffect(() => {
      if (valForm && !props.valid) {
         props.setPerson({
            ...props.person,
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
         });
         return props.setValid(true);
      } else if (!valForm && props.valid) {
         props.setPerson({
            ...props.person,
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
         });
         return props.setValid(false);
      } return undefined;
   }, [valForm]);

   return (
      <form className="person-form">
         <div className="person-input">
            <label className="label" htmlFor="name"><span>Name</span><span className="notice-name">{valName() ? "" : "Enter correct name"}</span></label>
            <input className={valName() ? "person" : "person atantion"} name="name" id="name" placeholder='e.g. Enthony Hopkins' {...inputName} ></input>

            <label className="label" htmlFor="email"><span>Email Address</span><span className="notice-email">{valEmail() ? "" : "Enter correct email"}</span></label>
            <input input className={valEmail() ? "person" : "person atantion"} type="email" name="email" id="email" placeholder='e.g. enthonyhopkins@gmail.com' {...inputEmail}></input>

            <label className="label" htmlFor="phone"><span>Phone Number</span><span className="notice-phone">{valPhone() ? "" : "Enter correct phone"}</span></label>
            <input className={valPhone() ? "person" : "person atantion"} type="phone" name="phone" id="phone" placeholder='e.g. +1234567890' {...inputPhone}></input>
         </div>
      </form>
   )
};
