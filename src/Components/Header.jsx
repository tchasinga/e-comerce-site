import "../index.css";
import { BiSearchAlt } from "react-icons/bi";
import { FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    return (
        <div className="fixed top-0 left-0  right-0 bg-black z-10">
            <div className="header flex mt-4 mb-4 mx-0 px-40 flex-wrap items-center justify-between">
                <div className="firstnav">
                    <ul className="flex gap-3 items-center hover:cursor-pointer">
                        <li className="font-bold text-xl">E-commerce</li>
                        <li className="font-light text-sm getNone">All</li>
                        <li className="font-light text-sm getNone">Today&apos;s Deals</li>
                        <li className="font-light text-sm getNone">Gift Card</li>
                        <li className="font-light text-sm getNone">Registry & Gifting</li>
                    </ul>
                </div>

                <div className="secondnav">
                    <ul className="flex gap-4 items-center hover:cursor-pointer">
                        <li className="selfSearch flex items-center getNone gap-3">
                            <BiSearchAlt className="searchicon" />
                            <p className="font-light text-sm">Searching</p>
                        </li>
                        <li className="getNone">
                            <FiUser className="searchicon" />
                        </li>
                        <li className="getNone">
                            <FiHeart className="searchicon" />
                        </li>
                        <li>
                            <FiShoppingCart className="searchicon" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
