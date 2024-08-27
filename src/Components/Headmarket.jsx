import '../index.css'
import AirpodPro from '../Img/AppleAirPods.png'
import {  FiStar } from 'react-icons/fi'
import Orderproducts from './Orderproducts'
import Categories from './Categories'
import Getproduct from './Getproduct'
import Amazonbasis from './Amazonbasis'
import Darkskins from './Darkskins'
import Newproduct from './Newproduct'
import Getright from './Getright'
import Secondproduct from './Secondproduct'
import Roomseller from './Roomseller'
import Comfty from './Comfty'
import Lastproduct from './Lastproduct'
import Productmore from './Productmore'




const Headmarket = () => {
    return (
        <div className="headmarket mx-auto max-w-screen-xl px-4">
            <div className="bg-gray-100 mt-20 headmarket gap-48 flex-wrap flex p-20">
                <div className="">
                  <h1 className='text-4xl mb-3 font-semibold'>SHOP COMPUTERS <br/> & ACCESSORIES</h1>
                 <p className='myTageparagraphe'>Shop laptop & desktop monitors, tablet, PC</p>
                 <p className='myTageparagraphe mb-3'>Gaming, hard driver and storage , accessories and <br/> more </p>
                 <h4 className='ViewMore'>View more</h4>
                </div>
                {/* Adding second session */}
                <div className='bg-white mainFlex relative mt-20 flex flex-row-reverse justify-center items-center'>
                    <div className='AirpodProImg'>
                        <img src={AirpodPro} alt="AirpodPro" className='AirpodPro'/>
                    </div>
                    <div className='flex flex-col relative pr-16'>
                    <p className='text-gray-500 text-xs font-bold getNone'>Enjoy and play with deep sound</p>
                    <h1 className='font-bold'>AirPods Pro</h1>
                        <ul className='flex gap-0 font-bold mt-1 mb-1 text-yellow-600'>
                            <li><FiStar/></li>
                            <li>
                            <FiStar/>
                            </li>
                            <li>
                            <FiStar/>
                            </li>
                            <li>
                                <FiStar/>
                            </li>
                            <li>
                            <FiStar/>
                            </li>
                        </ul>
                        <h1 className=''>Starting at $249</h1>
                 </div>
                </div>
            </div>
          <div>
          <Orderproducts/>
          <Categories  />
          <Getproduct/>
          <Amazonbasis/>
          <Darkskins />
          <Getright/>
          <Newproduct/>
          <Secondproduct/>
          <Roomseller/>
          <Comfty/>
          <Lastproduct/>
          <Productmore/>
          </div>
        </div>
    )
}

export default Headmarket