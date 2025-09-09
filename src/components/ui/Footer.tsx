import React from 'react'
import { CrowdCanvas, Skiper39 } from './skiper-ui/skiper39'

function Footer() {
  return (<>
    {/* <div className=" relative h-[80vh] w-full bg-[#f6f3f3]"> */}
    <div className=" relative h-[45vh] w-full bg-gray-50 dark:bg-gray-900">
      <CrowdCanvas src="/all-peeps.png" rows={15} cols={7} />
    </div>
{/* <p className='text-center'>© 2023 My Portfolio. All rights reserved.</p> */}
  </>
  );
}

export default Footer
