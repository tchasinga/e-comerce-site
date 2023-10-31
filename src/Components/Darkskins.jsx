import Darkski from '../Img/BIGKUENNY.png'

const Darkskins = () => {
    return (
        <div className="mb-7 bg-gray-100  leading-none  bgGet"> 
            <div className="flex justify-between items-center newchecking">
                <div className="flex flex-col pl-11">
                    <p className="text-sm getFont text-gray-500 font-semibold">Skin care for black Queen !</p>
                    <h1  className="text-4xl myfont mb-0 font-semibold">DARK-SKIN CARRING</h1>
                     <h2 className="text-4xl myfont mb-3 font-semibold">BLACK QUEEN</h2>
                     <p className='text-sm'>We made really delivery of our product over 1M countries</p>
                     <p className='text-sm mb-3'>Around the world just made your command</p>
                     <h4 className='ViewMore newViewMoree'>View more</h4>
                </div>
                <div>
                    <img src={Darkski} alt="Darkski" className="getwidth"/>
                </div>
            </div>
        </div>
    )
}

export default Darkskins