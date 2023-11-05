import { CgArrowLongRightR } from "react-icons/cg";
import "animate.css";


const Secondproduct = () =>{
    return(
        <div className="categories mt-7 mb-7">
        <div className="flex justify-between items-center text-sm">
          <div>
            <h3>Top amazing product</h3>
          </div>
          <div>
            <ul className="flex  items-center gap-3">
              <li>Check more</li>
              <li>
                <CgArrowLongRightR className="text-xl animate__animated animate__fadeInLeft" />
              </li>
            </ul>
          </div>
        </div>
           {/* Addign new line-code */}
      </div>
    );
}

export default Secondproduct;