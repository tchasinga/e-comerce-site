import  { useState, useEffect } from 'react';
import '../index.css';
import Jordans from '../Projects/Objecthree.jsx';


const Newproduct = () => {
    const [products, setProducts] = useState(Jordans);

    useEffect(() => {
        // Define a function to update the message
        const updateMessage = (itemId) => {
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === itemId ? { ...product, time: 'All is over' } : product
                )
            );
        };

        // Schedule the update for each item with 'Ended-soon' after 30 minutes
        products.forEach((product) => {
            if (product.time === 'Ended-soon') {
                setTimeout(() => {
                    updateMessage(product.id);
                }, 60 * 1000); // 30 minutes in milliseconds
            }
        });
    }, [products]);

    return (
        <div className="newproduct mt-7 mb-7">
            <div className="">
              <p className='text-sm mb-4 cursor-pointer font-semibold'>Available shoes is {products.length}</p>
                <div className='newproductgrid'>
                    {products.map((jordan) => {
                        return (
                            <div className="newproductgriditem p-1 flex flex-col mb-1  justify-center bg-gray-100 " key={jordan.id}>
                                <div className='text-white codecolor'>
                                   <h1 className='bg-red-500 w-20 m-1 rounded-sm   text-xs font-semibold pl-1 mt-3'>{jordan.time}</h1>
                                </div>                                    
                                <div className="newproductgriditemimg">
                                    <img src={jordan.myImage} alt="newgridImg" />
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
    );
};

export default Newproduct;
