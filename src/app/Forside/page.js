import CarrouselCard from "@/components/CarrouselCard";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import OmOs from "@/components/OmOs";
import KontaktOs from "@/components/KontaktOs";
import Proces from "@/components/Proces";
import Pil from "@/components/Pil";
import Head from "next/head";

export async function generateMetadata() {
  return {
    title:
      " Ankjær Totalentreprise | Arkitekttegnet Hus & Totalentreprise i Nordsjælland & København",
    description:
      "Vi tegner og bygger dit arkitekttegnede drømmehus fra bunden – præcist som du ønsker det. Kontakt os i dag!",
  };
}

export default function Loading() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>
          Ankjær Totalentreprise | Dit arkitekttegnede hjem fra idé til
          virkelighed
        </title>
        <meta
          name="description"
          content="Vi tegner og bygger dit arkitekttegnede drømmehus fra bunden – præcist som du ønsker det. Kontakt os i dag!"
        />
      </Head>
      <Nav />
      <KontaktOs />
      <section className="relative w-full">
        <video
          src="/img/video.mp4"
          className="w-full h-auto z-0"
          autoPlay
          muted
          loop
          playsInline
        />
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white
 lg:text-7xl xs:text-3xl  md:text-6xl font-bold text-nowrap"
        >
          ANKJÆR TOTALENTREPRISE
        </h1>
        <p className="absolute md:top-2/3 xs:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white xs:text-l md:text-2xl xs:text-nowrap">
          Vi tegner og bygger dit drømmehus fra bunden
        </p>
        <Pil className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
      </section>
      <section>
        <Proces />
        <OmOs />
        <CarrouselCard />
      </section>
      <Footer />
    </div>
  );
}
