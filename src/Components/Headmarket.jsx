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



const Headmarket = () => {
    return (
        <div className="headmarket mx-0  px-40">
            <div className="bg-gray-100 mt-5 headmarket gap-40 flex-wrap flex p-20">
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
                    <div className='flex flex-col relative right-14'>
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
          </div>
        </div>
    )
}

export default Headmarket