import React from "react";

export const BuscaTuLocal = () => {
  return (
    <>
      <section className="relative bg-orange-100">
        <div className="flex flex-col bg-burgerking-200 md:mt-28 w-12/12 md:w-11/12 md:m-auto rounded-xl md:flex-row md:items-center md:mb-20 md:justify-between md:px-10 md:py-12">
          <div className="md:w-9/12">
            <h3 className="mt-8 ml-5 text-2xl font-bold text-orange-950">
              Locales
            </h3>
            <p className="mt-4 ml-5 text-lg font-normal text-orange-950">
              Encontrá el mas cercano
            </p>
            <input
              className="block w-11/12 py-4 pl-5 m-auto mt-5 rounded-lg placeholder-orange-950"
              type="text"
              placeholder="Tu ciudad o dirección"
            />
          </div>
          <div className="w-7/12 m-auto mt-12 md:w-3/12 md:h-40">
            <img
              src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/BK_ILLUSTRATION_PICKLE_EYE_MASK_ST_FC.png"
              alt="ilustracion de busqueda"
              className="w-full md:w-full md:h-full md:object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};
