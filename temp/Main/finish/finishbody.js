import React from 'react'

function Finishbody(props) {
   return (
      <div className="finish-body">
         <div>
            <h5>{props.nameadd}</h5>
         </div>
         <div>${props.addprice}{props.per}</div>
      </div>
   )
}

export default Finishbody