import Order from "../Projects/Objectsix"
import '../index.css'

const Productmore = () =>{
    return(
        <div className="flex hugeFlexcontainer mb-28">
            {
                Order.map((val, index) => {
                    return(
                        <div key={index} className="flex  myflexcontainer mt-5 items-center justify-center p-1">
                            <div className="flex gap-3 myborder items-center justify-center">
                                <div>
                                    <img src={val.myImage} alt="Airpod" className="w-20 h-20 animate__bounceIn"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold">{val.name}</h2>
                                    <p className="text-xs">{val.details}</p>
                                    <p className="text-sm font-extrabold">{val.price}</p>
                                </div>
                            </div>
                        </div>  
                    )
                })
            }          
        </div>
    )
}

export default Productmore