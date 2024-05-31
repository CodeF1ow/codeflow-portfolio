import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/datos";

import AvatarPortfolio from "@/components/avatar-portfolio";
import TransicionPage from "@/components/transiciones-page";
import CirculoImagen from "@/components/circulo-imagen";
import ContenedorPagina from "@/components/contenedor-pagina";
import CajaPortfolio from "@/components/caja-portfolio";

const PaginaPortfolio = () => {
  return (
    <ContenedorPagina>
      <TransicionPage />
      <AvatarPortfolio />
      <CirculoImagen />
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Mis últimos{" "}
          <span className="font-bold text-secondary">trabajos realizados</span>
        </h1>

        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
          {dataPortfolio.map((data) => (
            <CajaPortfolio key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContenedorPagina>
  );
};

export default PaginaPortfolio;
