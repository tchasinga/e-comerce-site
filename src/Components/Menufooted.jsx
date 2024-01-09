import { HiMenuAlt2 } from "react-icons/hi";
import { FiSearch, FiUser, FiHeart } from "react-icons/fi";

let Menufooted = () => {
    return (
        <div className="footContainer fixed bottom-0 left-0 right-0 bg-gray-300">
            <div className="flex justify-between items-center p-5">
                <div className="flex pr-10 items-center">
                    <HiMenuAlt2 className="text-3xl" />
                </div>
                <div className="flex gap-16 items-center">
                    <FiSearch className="text-3xl" />
                    <FiUser className="text-3xl" />
                    <FiHeart className="text-3xl" />
                </div>
            </div>
        </div>
    )
}

export default Menufooted;
