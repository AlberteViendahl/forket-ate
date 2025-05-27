import Footer from "@/components/Footer";
import Formel from "@/components/Formel";
import Nav from "@/components/Nav";

export async function generateMetadata() {
  return {
    title: "Kontakt Mig Og Kom Tættere På Dit Drømmehus",
    description:
      "Få professionel rådgivning hos Ankjær Total Entreprise. Kontakt os direkte i dag og book et møde!",
  };
}

export default function Kontakt() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Formel />
      <Footer />
    </div>
  );
}
