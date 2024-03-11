import React, { useRef } from "react";

export const Delivery = () => {
  const botonPeyaRef = useRef(null);
  const botonRappiRef = useRef(null);

  const seleccionEnvio = () => {
    botonPeyaRef.current.classList.add("border-red-700");
    botonPeyaRef.current.classList.remove(
      "hover:shadow-[0px_2px_17px_-5px_rgba(0,0,0,0.75)]"
    );
    botonPeyaRef.current.classList.remove(
      "shadow-[0px_1px_8px_-3px_rgba(0,0,0,0.5)]"
    );
    botonRappiRef.current.classList.add(
      "hover:shadow-[0px_2px_17px_-5px_rgba(0,0,0,0.75)]"
    );
    botonRappiRef.current.classList.add(
      "shadow-[0px_1px_8px_-3px_rgba(0,0,0,0.5)]"
    );
  };
  const seleccionEnvio2 = () => {
    botonRappiRef.current.classList.add("border-red-700");
  };

  return (
    <>
      <div className="py-16 bg-red-700 border-b border-orange-100 md:border-red-700">
        <div className="py-8 bg-white w-12/12 md:w-4/12 md:rounded-2xl md:ml-16">
          <div className="md:ml-4">
            <h3 className="mb-3 ml-6 text-2xl font-bold text-orange-950">
              BK Delivery
            </h3>
            <p className="mb-4 ml-6 text-orange-950">
              Como vos querés, donde vos querés
            </p>
          </div>
          <div className="flex w-11/12 gap-2 m-auto md:w-10/12">
            <div
              onClick={seleccionEnvio}
              ref={botonPeyaRef}
              className="w-6/12 px-10 py-4 border-4 cursor-pointer shadow-[0px_1px_8px_-3px_rgba(0,0,0,0.5)] hover:shadow-[0px_2px_17px_-5px_rgba(0,0,0,0.75)] border-red-700 rounded-xl flex flex-coñ justify-center"
            >
              <img
                className="w-5/12 m-auto"
                src="https://seeklogo.com/images/R/rappi-logo-63FD346993-seeklogo.com.png"
                alt=""
              />
            </div>
            <div
              onClick={seleccionEnvio2}
              ref={botonRappiRef}
              className="w-6/12 px-10 py-4 md:w-10/12 rounded-xl cursor-pointer shadow-[0px_1px_8px_-3px_rgba(0,0,0,0.5)] hover:shadow-[0px_2px_17px_-5px_rgba(0,0,0,0.75)] flex flex-col justify-center"
            >
              <img
                className="w-5/12 m-auto"
                src="https://seeklogo.com/images/P/pedidos-ya-logo-70D1FA3532-seeklogo.com.png"
                alt=""
              />
            </div>
          </div>
          <button className="block w-10/12 m-auto mt-4 font-semibold text-center text-white bg-red-700 md:w-9/12 rounded-xl">
            Hacé tu pedido
          </button>
        </div>
      </div>
    </>
  );
};
