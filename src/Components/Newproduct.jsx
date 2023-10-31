import '../index.css'
import Jordans from '../Projects/Objecthree.jsx'

const Newproduct = () => {

    return (
        <div className="newproduct mt-7">
            <div className="">
                <div className='newproductgrid'>
                    {
                        Jordans.map((jordan) => {
                            return (
                                <div className="newproductgriditem p-1 flex flex-col mb-7  justify-center bg-gray-100 " key={jordan.id}>
                                    <div className=''>
                                        <h1 className='bg-red-500 w-20 m-1 text-xs font-semibold pl-1 mt-3'>{jordan.time}</h1>
                                    </div>                                    
                                    <div className="newproductgriditemimg">
                                        <img src={jordan.myImage} alt="newgridImg" />
                                    </div>
                                   <div className="p-2">
                                   <div className="newproductgriditemname mt-2">
                                        <h1 className='text-sm font-medium'>{jordan.name}</h1>
                                    </div>
                                    <div className="newproductgriditemviewer">
                                        <h1 className='text-xs  p-0 '>{jordan.viewer}</h1>
                                    </div>
                                    <div className="newproductgriditemprice">
                                        <h1 className='font-semibold'>{jordan.price}</h1>
                                    </div>
                                  
                                   </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Newproduct;