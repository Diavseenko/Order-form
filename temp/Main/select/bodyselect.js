import React from 'react';


export default function BodySelect(props) {
   const select = (id) => {
      props.setSelect(
         props.selects.map((sel) => {
            if (sel.id === id) { sel.selected = true } else { sel.selected = false };
            return sel
         })
      )
   };

   return (
      <div className={props.selected ? "select-item active" : "select-item"} onClick={(e) => select(props.id)}>
         <img className="select-img" src={props.src} alt="" />
         <div>
            <h5 className="select-name">{props.select}</h5>
            <span className="select-price" >${props.price}{props.rate}</span><br></br>
            <span className="select-free" >{props.add ? props.add : "..."}</span>
         </div>
      </div>
   )
};
