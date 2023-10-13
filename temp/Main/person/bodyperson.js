import React, { useEffect } from 'react';
import useInput from '../hooks/useinput';

export default function BodyPerson(props) {
   const inputName = useInput(props.person.name);
   const inputEmail = useInput(props.person.email);
   const inputPhone = useInput(props.person.phone);
   const regName = new RegExp(/^[a-zA-z]{2,16}$/);
   const regEmail = new RegExp(/.+@.+\..+/i);
   const regPhone = new RegExp(/^\d+$/);

   useEffect(() => {
      if (props.valid) {
         props.setPerson({
            ...props.person,
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
         });
      }
   }, [props.valid]);

   const checkInp = (inp, reg, fill) => {
      if (reg.test(inp.value)) {
         validForm();
         return ""
      } else if (inp.value.length < 2) {
         return ""
      } return "Enter correct" + " " + fill;
   };

   const validForm = () => {
      if (regName.test(inputName.value) && regEmail.test(inputEmail.value) && regPhone.test(inputPhone.value)) {
         return props.setValid(true)
      } return props.setValid(false)
   };

   return (
      <form className="person-form">
         <div className="person-input">
            <label className="label" htmlFor="name"><span>Name</span><span className="notice-name">{checkInp(inputName, regName, "name")}</span></label>
            <input className={regName.test(inputName.value) ? "person" : "person atantion"} name="name" id="name" {...inputName} ></input>

            <label className="label" htmlFor="email"><span>Email Address</span><span className="notice-email">{checkInp(inputEmail, regEmail, "email")}</span></label>
            <input input className={regEmail.test(inputEmail.value) ? "person" : "person atantion"} type="email" name="email" id="email" {...inputEmail}></input>

            <label className="label" htmlFor="phone"><span>Phone Number</span><span className="notice-phone">{checkInp(inputPhone, regPhone, "Phone number")}</span></label>
            <input className={regPhone.test(inputPhone.value) ? "person" : "person atantion"} type="phone" name="phone" id="phone" {...inputPhone}></input>
         </div>
      </form>
   )
};
