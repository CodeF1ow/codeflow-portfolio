import Inicio from "@/components/inicio";
import CoverParticles from "@/components/particulas";
import TransicionPage from "@/components/transiciones-page";

export default function Home() {
  return (
    <main>
      <TransicionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Inicio />
      </div>
    </main>
  );
}
