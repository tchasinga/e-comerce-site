import Darkski from '../Img/Afrikanpost.png'

const Darkskins = () => {
    return (
        <div className="mb-7 bg-gray-100  leading-none"> 
            <div className="flex justify-between items-center">
                <div className="flex flex-col pl-11">
                    <p className="text-sm text-gray-500 font-semibold">Skin care for black Queen !</p>
                    <h1  className="text-4xl  font-semibold">DARK-SKIN CARRING</h1>
                     <h2 className="text-4xl mb-3 font-semibold">BLACK QUEEN</h2>
                     <p className='text-sm'>We made really delivery of our product over 1M countries</p>
                     <p className='text-sm mb-3'>Around the world just made your command</p>
                     <h4 className='ViewMore'>View more</h4>
                </div>
                <div>
                    <img src={Darkski} alt="Darkski" className="getwidth"/>
                </div>
            </div>
        </div>
    )
}

export default Darkskins