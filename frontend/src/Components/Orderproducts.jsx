import Order from "../Projects/Objectone"
import '../index.css'

const Orderproducts = () =>{
    return(
        <div className="flex hugeFlexcontainer ">
            {
                Order.map((val, index) => {
                    return(
                        <div key={index} className="flex  myflexcontainer mt-5 items-center justify-center p-1">
                            <div className="flex gap-3 myborder items-center justify-center">
                                <div>
                                    <img src={val.myImg} alt="Airpod" className="w-20 h-20 animate__bounceIn"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold">{val.title}</h2>
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

export default Orderproducts