import React from "react";

export const Novedades = () => {
  return (
    <>
      <section className="mb-16">
        <h3 className="mt-10 ml-5 text-2xl font-bold md:ml-14 mb-7 text-orange-950">
          Novedades
        </h3>
        <div className="flex flex-col justify-between w-11/12 gap-6 m-auto md:flex-row">
          <div className="flex flex-col m-auto w-12/12 rounded-xl md:mt-0">
            <img
              className="rounded-xl md:hover:shadow-[0px_2px_17px_-5px_rgba(0,0,0,0.75)] cursor-pointer"
              src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Banner-Philly-Chesse-Arg_930x620_novedades.jpeg"
              alt=""
            />
            <h4 className="my-4 text-2xl font-bold cursor-pointer text-orange-950">
              Philly Cheese
            </h4>
            <p>Cheddar, carne desmechada y cebolla rehogada</p>
          </div>
          <div className="flex flex-col m-auto w-12/12 rounded-xl md:mt-0">
            <img
              className="rounded-xl md:hover:shadow-[0px_2px_17px_-5px_rgba(0,0,0,0.75)] cursor-pointer"
              src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Banner-King-pollo-Arg_930x620_novedades.jpg"
              alt=""
            />
            <h4 className="my-4 text-2xl font-bold cursor-pointer text-orange-950">
              Elegí el tuyo
            </h4>
            <p>
              Ese sabor con el que te identificas, ese crocante que te hace
              feliz y ese pollito que no podes dejar de elegir
            </p>
          </div>
          <div className="flex flex-col m-auto w-12/12 rounded-xl md:mt-0">
            <img
              className="rounded-xl md:hover:shadow-[0px_2px_17px_-5px_rgba(0,0,0,0.75)] cursor-pointer"
              src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Banner-champi-Arg_930x620_novedades-web.jpg"
              alt=""
            />
            <h4 className="my-4 text-2xl font-bold cursor-pointer text-orange-950">
              ¡Conquistá un nuevo reino de sabor con ChampiKing!
            </h4>
            <p>Cheddar, carne desmechada y cebolla rehogada</p>
          </div>
        </div>
      </section>
    </>
  );
};
