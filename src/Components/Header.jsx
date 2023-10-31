import "../index.css";
import {BiSearchAlt} from "react-icons/bi";
import {FiUser ,FiHeart, FiShoppingCart } from 'react-icons/fi';
const Header = () =>{
   
     return(
         <>
             <div className="header flex mt-4 mx-0 px-40 flex-wrap items-center justify-between">
                  <div className="firstnav">
                      <ul className="flex gap-3 items-center hover:cursor-pointer">
                          <li className="font-bold text-xl">E-comerce</li>
                          <li className="font-light text-sm getNone">All</li>
                          <li className="font-light text-sm getNone">Today&apos;s Deals</li>
                          <li className="font-light text-sm getNone">Gift Card</li>
                          <li className="font-light text-sm getNone">Resgitry & Gifting</li>
                      </ul>
                  </div>

                    <div className="secondnav">
                         <ul className="flex gap-4 items-center hover:cursor-pointer">
                            <li className="selfSearch flex items-center getNone gap-3">
                                 <BiSearchAlt className="searchicon"/>
                                 <p className="font-light text-sm">Searching</p>
                            </li>
                            <li className="getNone">
                                <FiUser/>
                            </li>
                            <li className="getNone">
                                 <FiHeart/>
                            </li>
                            <li>
                                <FiShoppingCart/>
                            </li>
                         </ul>
                    </div>
                </div>
         </>
     )

}

export default Header;