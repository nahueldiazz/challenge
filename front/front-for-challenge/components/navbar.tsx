import React from 'react';
import imageMeli from '../utils/images/mercado-livre.png'
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const search = (event: any) => {
    event.preventDefault();
    router.push(`/items?search=${event.target.search.value}`)
  }
  return (
    <div>
      <nav className="bg-yellow-300 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <a href="#" className="flex items-center">
            <Image src={imageMeli} alt="Logo de MercadoLibre" className="h-10 w-10 mr-2" />
          </a>

          <form className="relative text-gray-600 flex items-center w-full" onSubmit={(e)=>search(e)}>
            <input
              type="search"
              name="search"
              placeholder="Buscar"
              className="bg-white h-10 px-5 pr-10 text-sm focus:outline-none w-full"
            />
            <button type="submit" role='search' name='btn-search' className="absolute right-0 top-0 h-full w-12 bg-gray-200">
            <div className="flex items-center justify-center ">
              <i className="fa fa-search" aria-hidden="true"></i>
              </div>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;