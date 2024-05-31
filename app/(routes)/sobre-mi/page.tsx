import Avatar from "@/components/avatar";
import ContadorServicios from "@/components/contador-servicios";
import Contenedor from "@/components/contenedor";
import LineaTiempo from "@/components/linea-tiempo";
import TransicionPage from "@/components/transiciones-page";

const SobreMi = () => {
    return ( 
        <>
            <TransicionPage />
            <Contenedor>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi {' '}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>
                <ContadorServicios />
                <LineaTiempo />
            </Contenedor>
        </>
     );
}
 
export default SobreMi;