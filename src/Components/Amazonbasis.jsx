 
 import {CgArrowLongRightR} from "react-icons/cg";
 
 
 const Amazonbasis = () => {
    return (
       <div className="mb-7">
           <div className="flex amazoncontainer w-full gap-3">
            <div className="amazondate  flex flex-col ">
               <h1 className="text-base font-semibold">Amazing store</h1>
               <p className="text-xs">Welcom shop today and make revervation</p>
               <p className="text-xs">To discuse about a price later</p>
               <div>
               <ul className="flex mt-3 items-center gap-3">
             <li>See more</li>
            <li>
              <CgArrowLongRightR className="text-xl animate__animated animate__fadeInLeft" />
            </li>
          </ul>
               </div>
        </div>

        {/* second session */}

        <div className="amazondate flex flex-col">
               <h1 className="text-base font-semibold">Deals & Promotion</h1>
               <p className="text-xs">Welcom shop today and make revervation</p>
               <p className="text-xs">To discuse about a price later</p>
               <div>
               <ul className="flex mt-3 items-center gap-3">
            <li>See more</li>
            <li>
              <CgArrowLongRightR className="text-xl animate__animated animate__fadeInLeft" />
            </li>
          </ul>
               </div>
        </div>
           </div>
       </div>
    )
 }

    export default Amazonbasis;