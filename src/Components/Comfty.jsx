import { CgArrowLongRightR } from "react-icons/cg";
import "animate.css";
import AmbraSking from '../Img/AmbraSkin.png'
import Chemise from '../Img/NewSprinChemise.png'

const Comfty = () => {
  return (
    <div className="generaldetails">
      <div className="getmygridTwo">
        <div className="bg-gray-100 goodImg">
          <div className="flex flex-col px-3">
            <h1 className="text-3xl font-medium mb-2">Comfy styles for her</h1>
            <div className="paradetails text-sm">
              <p>Shop Amazing Fachion including</p>
              <p>Clothes, shoes, accessories and more that can need</p>
            </div>
            <div>
              <ul className="flex items-center text-xs gap-3 mt-5">
                <li>Check more more</li>
                <li>
                  <CgArrowLongRightR className="text-xl animate__animated animate__fadeInLeft" />
                </li>
              </ul>
            </div>
            <div className="flex items-center mt-3">
                <div className="">
                     <img src={AmbraSking} alt="" className="w-10 h-10"/>
                </div>
                <div>
                     <p className="text-sm">Top good products</p>
                     <p className="text-xs text-gray-500">Shop now</p>
                </div>
            </div>
          </div>
        </div>
        {/* second session of grids */}
        <div className="getmygridTwo">
        <div className="bg-gray-700 separater p-5 goodImg2">
          <div className="flex flex-col px-3">
            <h1 className="text-3xl font-medium mb-2">Comfy styles for men</h1>
            <div className="paradetails text-sm">
              <p>Shop Amazing Fachion including</p>
              <p>Clothes, shoes, accessories and more that can need</p>
            </div>
            <div>
              <ul className="flex items-center text-xs gap-3 mt-5">
                <li>Check more more</li>
                <li>
                  <CgArrowLongRightR className="text-xl animate__animated animate__fadeInLeft" />
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3 mt-3">
                <div className="">
                     <img src={Chemise} alt="" className="w-10 h-10"/>
                </div>
                <div>
                     <p className="text-sm">Top good products</p>
                     <p className="text-xs text-gray-500">Shop now</p>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Comfty;
