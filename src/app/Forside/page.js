import CarrouselCard from "@/components/CarrouselCard";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import OmOs from "@/components/OmOs";
import KontaktOs from "@/components/KontaktOs";
import Proces from "@/components/Proces";
export default function Loading() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <KontaktOs />
      <section className="relative w-full">
        <video
          src="/img/video.mp4"
          className="w-full h-auto"
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
