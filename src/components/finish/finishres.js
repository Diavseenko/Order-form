import React from 'react'

function Finishres(props) {
   return (

      <div className="finish-total">
         <div>
            <h5 className="finish-title">Total ({props.period})</h5>
         </div>
         <div className="total">${props.price}{props.per}</div>
      </div>
   )
}

export default Finishres