import Footer from "@/components/Footer";
import Galleri from "@/components/Galleri";
import KontaktOs from "@/components/KontaktOs";
import Nav from "@/components/Nav";

export async function generateMetadata() {
  return {
    title: "Byg Dit Perfekte Hjem: Udforsk Stilarter, Materialer & Inspiration",
    description:
      "Få inspiration til dit drømmehjem med stil, materialer og detaljer fra rigtige projekter. Klik og udforsk nu!",
  };
}

export default function Inspiration() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <KontaktOs />
      <Galleri />
      <Footer />
    </div>
  );
}
