import '../index.css'
import AirpodPro from '../Img/AppleAirPods.png'
import {  FiStar } from 'react-icons/fi'

const Headmarket = () => {
    return (
        <div className="headmarket mx-0   px-40">
            <div className="bg-gray-100 mt-5 headmarket gap-40 flex p-20">
                <div className="">
                  <h1 className='text-4xl mb-3 font-semibold'>SHOP COMPUTERS <br/> & ACCESSORIES</h1>
                 <p className='myTageparagraphe'>Shop laptop desktop monitors, tablet, PC</p>
                 <p className='myTageparagraphe mb-3'>Gaming, hard driver and storage , accessories and <br/> more </p>
                 <h4 className='ViewMore'>View more</h4>
                </div>
                {/* Adding second session */}
                <div className='bg-white w-3/12 mainFlex relative flex flex-row-reverse justify-center items-center'>
                    <div className=''>
                        <img src={AirpodPro} alt="AirpodPro" className='w-96 AirpodPro'/>
                    </div>
                    <div className='flex flex-col relative right-8'>
                    <p className='text-gray-500 text-xs '>Enjoy and play with deep sound</p>
                    <h1 className='font-semibold'>AirPods Pro</h1>
                        <ul className='flex gap-0 text-yellow-600'>
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
        
        </div>
    )
}

export default Headmarket