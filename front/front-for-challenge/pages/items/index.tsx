import { getItems } from '@/services/apiResponse';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ItemsResponse } from './types';

const Items = () => {
    const [items, setItems] = useState<ItemsResponse[]>([])
    const router = useRouter();
    const { search } = router.query;

    const searchItems = async ()=>{
      const dataItems = await getItems(search as string)
        return dataItems
    }

    useEffect(() => {
    searchItems().then((item)=>{
        setItems(item.items)
    })
    }, [search])
    
    const navigateItemId = (idItem : string)=>{
        router.push(`/items/${idItem}`)
    }
  return (
    items.length > 0 && (
      <>
        <div className="max-w-4xl mx-auto flex  justify-center  flex-col gap-1 mt-10">
          {items?.map((item: any) => (
            <div className=" flex bg-white" onClick={() => navigateItemId(item?.id)}>
              <div className="w-1/3">
                <img
                  src={item?.picture}
                  alt={item?.title}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full p-4">
                <p className="text-lg font-semibold">${item?.price.amount}</p>
                <h2 className="text-xl font-semibold mb-2">{item?.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  );
};

export default Items;