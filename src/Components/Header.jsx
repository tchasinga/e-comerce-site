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
                          <li className="font-light text-sm">All</li>
                          <li className="font-light text-sm">Today&apos;s Deals</li>
                          <li className="font-light text-sm">Gift Card</li>
                          <li className="font-light text-sm">Resgitry & Gifting</li>
                      </ul>
                  </div>

                    <div className="secondnav">
                         <ul className="flex gap-4 items-center hover:cursor-pointer">
                            <li className="selfSearch flex items-center gap-3">
                                 <BiSearchAlt className="searchicon"/>
                                 <p className="font-light text-sm">Search</p>
                            </li>
                            <li>
                                <FiUser/>
                            </li>
                            <li>
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