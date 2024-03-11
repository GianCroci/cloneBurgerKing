import React from "react";

export const PlayStore = () => {
  return (
    <>
      <section className="pt-12 bg-red-700 md:flex md:flex-row-reverse">
        <div className="md:w-6/12 ">
          <h3 className="mb-8 ml-4 text-4xl font-extrabold tracking-tighter text-white md:leading-loose md:mt-20 md:w-9/12">
            Descargá la APP y disfrutá mucho más <br /> por mucho menos
          </h3>
          <div className="flex items-center justify-start flex-1 gap-5 mb-10 ml-6 w-12/12">
            <div className="w-3/12 ">
              <img
                className="w-full h-8 md:h-auto"
                src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/google_play.png"
                alt=""
              />
            </div>
            <div className="w-3/12 ">
              <img
                className="w-full h-8 md:h-auto"
                src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/app__store.png"
                alt=""
              />
            </div>
          </div>
          <p className="mx-6 mb-12 text-xs text-white md:mt-20 md:w-10/12">
            Apple y el logotipo de Apple son marcas comerciales de Apple Inc.,
            registradas en EE. UU. Y otros países. App Store es una marca de
            servicio de Apple Inc. Google Play es una marca comercial de Google
            Inc. Se aplican términos.
          </p>
        </div>

        <div className="w-9/12 m-auto md:w-6/12 md:m-0 md:flex md:items-end">
          <img
            className="m-auto md:m-0 md:w-9/12 md:ml-20 "
            src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/landing_page_image-croped-5-1-1.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};
