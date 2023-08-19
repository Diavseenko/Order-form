import React from 'react'

import SideBar from './sidebar/sidebar';
import Main from './Main/main';

export default function App() {
   return (
      <div className='app-modal'>
         <SideBar />
         <Main />
      </div>
   )
}

/*export default function App() {
   return (
      <div className='app-modal'>
         <SideBar />
         
      </div>
   )
}
*/