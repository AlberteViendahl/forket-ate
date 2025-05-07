import CarrouselCard from "@/components/CarrouselCard";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Knap from "@/components/Knap";
import OmOs from "@/components/OmOs";
import KontaktOs from "@/components/KontaktOs";

export default function Loading() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <KontaktOs />

      <section className="relative w-full">
        <img src="/img/video_desk.svg" alt="video" className="w-full h-auto" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-darkblue text-5xl font-bold">
          ANKJÆR TOTAL ENTREPRISE
        </h1>
      </section>
      <section className="bg-brown">
        <OmOs />
        <CarrouselCard />
        <Knap />
      </section>
      <Footer />
    </div>
  );
}
