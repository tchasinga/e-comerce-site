import { CgArrowLongRightR } from "react-icons/cg";

const Getright = () => {
    return (
        <div className="categories mt-7">
        <div className="flex justify-between items-center text-sm">
          <div>
            <h3>Shop new shoes here</h3>
          </div>
          <div>
            <ul className="flex  items-center gap-3">
              <li>All basket</li>
              <li>
                <CgArrowLongRightR className="text-xl animate__animated animate__fadeInLeft" />
              </li>
            </ul>
          </div>
        </div>
           {/* Addign new line-code */}
      </div>
    )
}

export default Getright