import CarrouselCard from "@/components/CarrouselCard";
import Footer from "@/components/Footer";
import Knap from "@/components/Knap";
import KontaktOs from "@/components/KontaktOs";
import Nav from "@/components/Nav";
import OmOs from "@/components/OmOs";

export default function Loading() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Knap />
      <KontaktOs cla />
      <section className="relative w-full">
        <img src="/img/video_desk.svg" alt="video" className="w-full h-auto" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-darkblue text-5xl font-bold">
          ANKJÆR TOTAL ENTREPRISE
        </h1>
      </section>
      <section className="bg-brown">
        <OmOs />
        <CarrouselCard />
      </section>
      <Footer />
    </div>
  );
}
