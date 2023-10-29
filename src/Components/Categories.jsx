import { CgArrowLongRightR } from "react-icons/cg";
import 'animate.css'

const Categories = () =>{
    return(
        <div className="categories mt-7">
          <div className="flex justify-between items-center text-sm">
             <div>
                <h3>Shop by categories</h3>
             </div>
             <div>
                    <ul className="flex items-center gap-3">
                       <li>
                        All Department
                       </li>
                       <li>
                        <CgArrowLongRightR className="text-xl animate__animated animate__fadeInLeft"/>
                       </li>
                    </ul>
             </div>
          </div>
        </div>
    )
}
export default Categories