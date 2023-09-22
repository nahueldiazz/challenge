import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getItemDescription } from '@/services/itemsService';
import { DescriptionItemsTypes } from '../types';

const ItemDetail = () => {
  const [descriptionItem, setdescriptionItem] = useState<DescriptionItemsTypes>()  
  const router = useRouter();
  const { id } = router.query;

  const getDescription = async () => {
    const description = await getItemDescription(id as string)

    return description
  }

  useEffect(() => {
   getDescription().then((item)=>{
    setdescriptionItem(item)
   })
  }, [id])
  
  return (
    descriptionItem?.item &&
    <>
      <div className="bg-white max-w-4xl mx-auto flex  justify-center bg-white flex-col g-1 mt-10">
        <div className="p-4 flex">
          <img
            src={descriptionItem?.item?.picture}
            alt="Imagen del producto"
            className="w-2/3 rounded-l-lg"
          />

          <div className="w-1/3 flex justify-start flex-col mt-5">
            <span className="text-sm mb-2">{descriptionItem.item.condition === 'new' ? 'Nuevo' : 'Usado'}</span>
            <p className="text-xl font-semibold mb-2">{descriptionItem.item.title}</p>
            <span className="text-5xl  mb-2">$  {descriptionItem.item.price.amount}</span>

            <button className="bg-blue-500 mt-10 text-white px-4 py-2 rounded-sm hover:bg-blue-600">
              Comprar
            </button>
          </div>
        </div>
        <div className='flex flex-col w-2/3'>
          <p className="p-4 text-xl font-semibold">Descripción del producto</p>
          <span className="p-4 text-justify text-sm text-gray-600">{descriptionItem.item.description}</span>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
