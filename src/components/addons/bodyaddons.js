import React from 'react';

import "./bodyaddons.css";

export default function BodyAddons(props) {

   const selectAddOns = (id) => {
      props.setAddons(
         props.addons.map((add) => {
            if (add.id === id) { add.selected = !add.selected };
            return add;
         })
      )
   }

   return (
      <div className={props.selected ? "addons-item active" : "addons-item"} >
         <div className="addons-checkbox">
            <input type="checkbox" checked={props.selected} onChange={() => selectAddOns(props.id)} />
         </div>

         <div className="addons-discription">
            <h5 className="addons-name">{props.name}</h5>
            <p className="addons-text">{props.about}</p>
         </div>

         <div className="addons-price">
            <p>+${props.price}{props.rate}</p>
         </div>

      </div>
   )
}
