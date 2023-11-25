import newlastproduct from '../Projects/Objectfive'

const  Lastproduct = () =>{
    return(
        <div className="newproduct mt-7">
        <div className="">
          <p className='text-sm mb-4 cursor-pointer font-semibold'>Available shoes is {newlastproduct.length}</p>
            <div className='newproductgrid'>
                {newlastproduct.map((jordan) => {
                    return (
                        <div className="newproductgriditem p-1 flex flex-col mb-1  justify-center bg-gray-100 " key={jordan.id}>                                  
                            <div className="newproductgriditemimg">
                                <img src={jordan.img} alt="newgridImg" />
                            </div>
                           <div className="p-2">
                           <div className="newproductgriditemname mt-2">
                                <h1 className='text-sm font-medium'>{jordan.name}</h1>
                            </div>
                            <div className="newproductgriditemviewer">
                                <h1 className='text-xs  p-0 '>{jordan.viewer}</h1>
                            </div>
                            <div className="newproductgriditemprice">
                                <h1 className='font-semibold'>{jordan.price}</h1>
                            </div>
                           </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    )
}

export default Lastproduct;